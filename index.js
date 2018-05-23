const fs = require('fs');

const downloader = require('./downloader');
const scraper = require('./scraper');

const chapters = require('./chapters.json');
const config = require('./config.json');

const IMAGE_DIRECTORY = `${config.rootPath}${config.mangaPath}`;
const URL = config.url;

const createAotDir = async () => {
  return new Promise((resolve, reject) => {
    fs.access(config.rootPath, fs.constants.F_OK | fs.constants.W_OK, err => {
      if (err) { reject(err); }
      fs.access(IMAGE_DIRECTORY, fs.constants.F_OK, err => {
        if (err) {
          fs.mkdir(IMAGE_DIRECTORY, 0o777, err => {
            if (err) { reject(err); }
            resolve();
          });
        }
        resolve();
      });
    });
  });
}

const createChapterDir = async (dir) => {
  return new Promise((resolve, reject) => {
    fs.access(dir, fs.constants.F_OK | fs.constants.W_OK, err => {
      if (err) {
        fs.mkdir(dir, 0o777, err => {
          if (err) { reject(err); };
          resolve();
        });
      }
      resolve();
    });
  });
}

const main = async () => {
  try {
    await createAotDir();
    for (let index in chapters['chapters']) {
      let chapter = chapters['chapters'][index];
      let imgs = await scraper(`${URL}-${chapter}/`);

      await Promise.all(imgs.map(async (file) => {
        const chapterDir = `${IMAGE_DIRECTORY}${chapter}`;
        await createChapterDir(chapterDir);
        await downloader({
          url: file,
          dest: chapterDir
        });
      }));
      console.log(`🆗  Done with chapter \x1b[36m${chapter}\x1b[0m`);
      console.log(`⏬  Downloaded \x1b[36m${imgs.length}\x1b[0m images!`);
    }

    console.log(`👌  Done -- downloaded all chapters`);
  } catch (e) {
    throw e;
  }
}

main();
