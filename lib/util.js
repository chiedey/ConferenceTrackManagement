const path = require('path');

let util = {};

util.array = {
    //合并多个数组，默认会排重，可通过设定参数isDuplicate=true来保留重复内容
    merge: (arys, isDuplicate = false) => {
        let result = [];

        arys.forEach(ary => {
            ary.forEach(item => {
                if (isDuplicate) result.push(item);
                else result.indexOf(item) === -1 ? result.push(item) : 0;
            });
        });

        return result;
    },
    //计算数组有效元素的数量,如传[1,9,,9,2,,10,,,21]，会返回6
    getRealLength: ary => {
        let length = 0;

        for (idx in ary) length++;

        return length;
    },
    //清理数组的无效元素，返回新的数组，如传[1,9,,9,2,,10,,,21]，会返回[1,9,9,2,10,21]
    clear: ary => {
        let newAry = [];

        ary.forEach(item => {
            newAry.push(item);
        });

        return newAry;
    }
};

util.talk = {
    //字符串类型的活动信息，解析成结构化类型的数据，方便后面运算
    str2Obj: talks => {
        let results = [];

        talks.forEach(talk => {
            let regExpTitle = /[a-zA-Z0-9\u4E00-\u9FA5\uF900-\uFA2D]+[\-\']*$/g;
            let regExpTimeSymbol = /[\w\u4E00-\u9FA5\uF900-\uFA2D]+$/g;
            let tmp = {};
            talk = talk.trim();

            tmp.title = talk.replace(regExpTitle, '').trim();
            if (!tmp.title) tmp.title = talk.match(regExpTitle) ? talk.match(regExpTitle)[0] : 'Unknown';

            let timeSymbol = talk.match(regExpTimeSymbol);
            if (!timeSymbol) timeSymbol = '0';
            else timeSymbol = timeSymbol[0];

            tmp.lightning = '';
            if (timeSymbol === global.config.lightning.symbol) {
                tmp.lightning = global.config.lightning.symbol;
                tmp.timeCost = global.config.lightning.timeCost;
            }
            else {
                let timeCost = timeSymbol.replace(/[^0-9]/ig, '');

                if (!timeCost) {
                    tmp.timeCost = 0;
                    tmp.title += ` ${timeSymbol}`;
                    //console.log('Error[Get time cost error!]');
                }
                else tmp.timeCost = Number(timeCost);
            }

            tmp.unit = global.config.timeUnit;
            tmp.weight = tmp.timeCost;
            tmp.scheduled = '';

            if (tmp.timeCost) results.push(tmp);
        });

        return results;
    }
};

util.path = {
    getRightPath: paths => {
        let rightPath = [];

        paths.forEach(_path => {
            let tmp = path.relative(__dirname, _path);
            rightPath.push(path.join(__dirname, tmp));
        });

        return rightPath;
    }
};

module.exports = util;
