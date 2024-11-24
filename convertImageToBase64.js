const fs = require("fs");
const path = require("path");

module.exports = {
  convertImageToBase64: (imagePath) => {
    const absolutePath = path.join(process.cwd(), "public", imagePath); // Adjust if images are stored elsewhere
    const fileData = fs.readFileSync(absolutePath);
    return fileData.toString("base64");
  },
};
