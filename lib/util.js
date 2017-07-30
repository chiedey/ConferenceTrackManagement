const config = require('../config');

let util = {};

util.array = {
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
    getRealLength: ary => {
        let length = 0;

        for (idx in ary) length++;

        return length;
    },
    clear: ary => {
        let newAry = [];

        for (let i = 0; i < ary.length; i++)
            if (typeof ary[i] != 'undefined')
                newAry.push(ary[i]);

        return newAry;
    }
};

util.talk = {
    str2Obj: talks => {
        this.talks = [];

        talks.forEach(talk => {
            this.talk = {};

            this.talk.title = talk.replace(/[a-zA-Z0-9\u4E00-\u9FA5\uF900-\uFA2D]+[\-\']*$/g, '').trim();
            this.talk.lightning = '';
            let timeSymbol = talk.match(/[\w\u4E00-\u9FA5\uF900-\uFA2D]+$/g)[0];

            if (timeSymbol === config.lightning.symbol) {
                this.talk.lightning = config.lightning.symbol;
                this.talk.timeCost = config.lightning.timeCost;
            }
            else {
                let timeCost = timeSymbol.replace(/[^0-9]/ig, '');

                if (!timeCost) {
                    this.talk.timeCost = 0;
                    console.log('Error[Get time cost error!]');
                }
                else this.talk.timeCost = Number(timeCost);
            }

            this.talk.unit = config.timeUnit;
            this.talk.weight = 1;
            this.talk.scheduled = '';

            this.talks.push(this.talk);
        });

        return this.talks;
    }
};

module.exports = util;
