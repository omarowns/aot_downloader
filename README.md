# Shingeki No Kyojin manga scraper

Based on the original work on https://github.com/aos/alcoves I decided to make some my own version to download all the images from http://readshingekinokyojin.com/ effectively downloading the whole Attack on Titan manga into a series of folders (one for each chapter).

## Installation and Running
> Requires Node v7.6 or above

1. Clone the repo
```
$ git clone https://github.com/omarowns/aot_downloader.git
```
2. Install dependencies
```
$ npm install
or
$ yarn install
```
3. Open the `config.json` file and change the `rootPath` and `mangaPath`.
    1. The `rootPath` is where the main manga folder is going to be created
    2. The `mangaPath` is the name of the folder itself, you can change it to _"Shingeki-no-kyojin"_ for example
4. (Optional) You can change the `chapters.json` file to only download certain chapters. For example if I want to download only chapters 15-20 the file would be:
```json
{
  "chapters": [
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
  ]
}
```
5. Run either using `npm start`
6. Once completed you should have a folder structure like:
```
Attack-on-Titan
├── 1
│   ├── 0001-001.png
│   ├── 0001-002.png
│   ├── 0001-003.png
│   ├── 0001-004.png
│   ├── 0001-005.png
│   ├── etc...
├── 2
│   ├── 0002-001.png
│   ├── 0002-002.png
│   ├── 0002-003.png
│   ├── 0002-004.png
│   ├── 0002-005.png
│   ├── etc...
```
7. (Optional) As an extra goodie I created a bash script `zipper.sh` which basically takes in all the created folders and zips it with the extention `cbz` which apparently is for comics. Just make sure to also change the `SRC` and `DEST` paths.
I did this so I could import it into [Calibre](https://calibre-ebook.com/) and then export to MOBI and to my Kindle.

Notes: Some chapters have broken image links so you, like me, will be losing only a couple of pages from like 2 chapters. No biggie ;)
