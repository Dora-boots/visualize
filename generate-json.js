const Path = require('path');
const fs = require('fs');
const basePath = Path.join(__dirname, 'public', 'results');
const jsonPath = Path.join(__dirname, 'public', 'data.json');

const data = {}
let generatorJson = (callback) => {
    fs.readdir(basePath, (err, files) => {
        files.forEach((mouthDirName) => {
            data[mouthDirName] = {}
            let mouthPath = Path.join(basePath, mouthDirName)
            fs.readdir(mouthPath, (err, dayPaths) => {
                dayPaths.forEach((dayDirName) => {
                    data[mouthDirName][dayDirName] = [];
                    let dayFilePath = Path.join(mouthPath, dayDirName);
                    fs.readdir(dayFilePath, (err, dayFiles) => {

                        //按照数字排序
                        dayFiles = dayFiles.sort((a, b) => {
                            return parseInt(a.substring(0, a.indexOf('.'))) - parseInt(b.substring(0, b.indexOf('.')))
                        })
                        dayFiles.forEach((dayFileName) => {
                            if (!dayFileName.startsWith('msg')) {
                                let day = Path.join(dayFilePath, dayFileName);
                                fs.readFile(day, (err, json) => {
                                    data[mouthDirName][dayDirName].push(JSON.parse(json.toString()));
                                });
                            }
                        });
                    });
                });
            });
        });
    });
    setTimeout(callback, 5000);
}

generatorJson(() => {
    fs.writeFile(jsonPath, JSON.stringify(data), err => {
        if (err) {
            console.log(err.message)
        } else {
            console.log('写入json文件成功！')
        }
    });
})