const fs       = require('fs');
const util     = require('./util');
const readline = require('readline');

let reader = {};

let readFile = file => {
    return new Promise((resolve, reject) => {
        let lines      = [];
        let readStream = fs.createReadStream(file);
        let reader     = readline.createInterface({input: readStream});

        reader.on('line', line => {
            lines.push(line);
        });

        reader.on('close', () => {
            resolve(lines);
        });
    });
}

reader.getTalkList = files => {
    return new Promise((resolve, reject) => {
        let promises = [];

        files.forEach((file, idx) => {
            promises.push(readFile(file));

            if (idx === (files.length - 1)) {
                let results = Promise.all(promises);

                results.then(talkList => {
                    resolve(talkList);
                }).catch(err => {
                    console.log(`Error[${err}]`);
                    resolve([]);
                });
            }
        });
    });
}

module.exports = reader;
