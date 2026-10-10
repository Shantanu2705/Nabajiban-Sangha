const { Jimp } = require("jimp");
const path = require("path");
const fs = require("fs");

async function removeBorder() {
  const inputPath = path.join(__dirname, "public", "banner.png");
  const outputPath = path.join(__dirname, "public", "banner-transparent.png");

  try {
    const buffer = fs.readFileSync(inputPath);
    const image = await Jimp.read(buffer);
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    const visited = new Uint8Array(width * height);
    const queue = [];
    
    for (let x = 0; x < width; x++) {
      queue.push([x, 0]); queue.push([x, height - 1]);
    }
    for (let y = 0; y < height; y++) {
      queue.push([0, y]); queue.push([width - 1, y]);
    }
    
    const tR = image.bitmap.data[0];
    const tG = image.bitmap.data[1];
    const tB = image.bitmap.data[2];
    
    const tolerance = 120; 
    
    function colorMatch(idx) {
      const r = image.bitmap.data[idx + 0];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];
      const dist = Math.sqrt(Math.pow(r - tR, 2) + Math.pow(g - tG, 2) + Math.pow(b - tB, 2));
      return dist < tolerance;
    }

    let head = 0;
    while (head < queue.length) {
      const [x, y] = queue[head++];
      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      
      const vIdx = y * width + x;
      if (visited[vIdx]) continue;
      visited[vIdx] = 1;
      
      const idx = vIdx * 4;
      if (colorMatch(idx)) {
        image.bitmap.data[idx + 3] = 0; // make transparent
        queue.push([x + 1, y]); queue.push([x - 1, y]);
        queue.push([x, y + 1]); queue.push([x, y - 1]);
      }
    }

    // Edge Erosion: eat away 2 pixels of the remaining border to remove anti-aliasing halos
    const erosionAmount = 2;
    for (let iter = 0; iter < erosionAmount; iter++) {
      const toRemove = [];
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;
          if (image.bitmap.data[idx + 3] !== 0) { // If pixel is NOT transparent
            let hasTransparentNeighbor = false;
            const neighbors = [
              [x+1, y], [x-1, y], [x, y+1], [x, y-1],
              [x+1, y+1], [x-1, y-1], [x+1, y-1], [x-1, y+1]
            ];
            for (let i = 0; i < neighbors.length; i++) {
              const nx = neighbors[i][0];
              const ny = neighbors[i][1];
              if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                const nIdx = (ny * width + nx) * 4;
                if (image.bitmap.data[nIdx + 3] === 0) { // If neighbor is transparent
                  hasTransparentNeighbor = true;
                  break;
                }
              } else {
                 hasTransparentNeighbor = true; // edge of image acts as transparent
                 break;
              }
            }
            if (hasTransparentNeighbor) toRemove.push(idx);
          }
        }
      }
      for (let i = 0; i < toRemove.length; i++) {
        image.bitmap.data[toRemove[i] + 3] = 0; // set alpha to 0
      }
    }
    
    await image.write(outputPath);
    console.log("Successfully removed border via flood-fill and edge erosion.");
  } catch (err) {
    console.error(err);
  }
}

removeBorder();
