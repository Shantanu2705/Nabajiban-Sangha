const { Jimp } = require("jimp");
const path = require("path");

async function removeBackground() {
  const inputPath = path.join(__dirname, "public", "logo", "logo.jpeg");
  const outputPath = path.join(__dirname, "public", "logo", "logo.png");

  try {
    console.log("Reading image:", inputPath);
    const fs = require("fs");
    const buffer = fs.readFileSync(inputPath);
    const image = await Jimp.read(buffer);
    
    // Distance threshold for "white"
    const threshold = 30; // tolerance for near-white pixels
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is close to white, make it transparent
      if (red > 255 - threshold && green > 255 - threshold && blue > 255 - threshold) {
        this.bitmap.data[idx + 3] = 0; // Alpha channel
      }
    });

    console.log("Saving image to:", outputPath);
    await image.write(outputPath);
    console.log("Successfully created transparent logo.");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

removeBackground();
