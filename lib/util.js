const path = require('path');

let util = {};

util.array = {
    //合并多个数组，默认会排重，可通过设定参数isDuplicate=true来保留重复内容
    merge: (arys, isDuplicate = false) => {
        this.ary = [];

        arys.forEach(ary => {
            ary.forEach(item => {
                if (isDuplicate) this.ary.push(item);
                else this.ary.indexOf(item) === -1 ? this.ary.push(item) : 0;
            });
        });

        return this.ary;
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
        this.talks = [];

        talks.forEach(talk => {
            let regExpTitle = /[a-zA-Z0-9\u4E00-\u9FA5\uF900-\uFA2D]+[\-\']*$/g;
            let regExpTimeSymbol = /[\w\u4E00-\u9FA5\uF900-\uFA2D]+$/g;
            this.talk = {};
            talk = talk.trim();

            this.talk.title = talk.replace(regExpTitle, '').trim();
            if (!this.talk.title) this.talk.title = talk.match(regExpTitle) ? talk.match(regExpTitle)[0] : 'Unknown';

            let timeSymbol = talk.match(regExpTimeSymbol);
            if (!timeSymbol) timeSymbol = '0';
            else timeSymbol = timeSymbol[0];

            this.talk.lightning = '';
            if (timeSymbol === global.config.lightning.symbol) {
                this.talk.lightning = global.config.lightning.symbol;
                this.talk.timeCost = global.config.lightning.timeCost;
            }
            else {
                let timeCost = timeSymbol.replace(/[^0-9]/ig, '');

                if (!timeCost) {
                    this.talk.timeCost = 0;
                    this.talk.title += ` ${timeSymbol}`;
                    //console.log('Error[Get time cost error!]');
                }
                else this.talk.timeCost = Number(timeCost);
            }

            this.talk.unit = global.config.timeUnit;
            this.talk.weight = this.talk.timeCost;
            this.talk.scheduled = '';

            if (this.talk.timeCost) this.talks.push(this.talk);
        });

        return this.talks;
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
