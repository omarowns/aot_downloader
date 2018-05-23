const download = require('image-downloader');
const path = require('path');

// Download the image
// Takes in { url: '', dest: '' } as parameters
module.exports = async (options = {}) => {
  try {
    const { filename, image } = await download.image(options);
    console.log('⬇️  ', path.basename(filename));
  }
  catch (e) {
    console.log(e);
  }
}
