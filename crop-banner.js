const { Jimp } = require("jimp");
const path = require("path");
const fs = require("fs");

async function cropBanner() {
  const inputPath = path.join(__dirname, "public", "banner.png");
  const outputPath = path.join(__dirname, "public", "banner-cropped.png");

  try {
    console.log("Reading image:", inputPath);
    const buffer = fs.readFileSync(inputPath);
    const image = await Jimp.read(buffer);
    
    // Autocrop will remove borders of the same color as the top-left pixel
    // Assuming the white border touches the top-left pixel
    image.autocrop();
    
    console.log("Saving image to:", outputPath);
    await image.write(outputPath);
    console.log("Successfully cropped banner.");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

cropBanner();
