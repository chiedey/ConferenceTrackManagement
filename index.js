const ai     = require('./lib/ai');
const util   = require('./lib/util');
const time   = require('./lib/time');
const track  = require('./lib/track');
const reader = require('./lib/reader');

const cfgArg     = ['--cfg', '-c'];
const cfgLength  = 2;
const cfgDefault = './config/config.js';

//处理命令行参数，支持输入多个文件，支持程序选项
let idx;
let cfg;
let files;
let argv = process.argv.slice(2);
for (let i = 0; i < cfgArg.length; i++) {
    idx = argv.indexOf(cfgArg[i]);
    if (idx != -1) break;
}
if (idx != -1) {
    let cfgFile = argv[idx+1];
    if (!cfgFile) throw new Error('Error[Please set the config file]');
    cfg = `${process.cwd()}/${cfgFile}`;
    argv.splice(idx, cfgLength);
} else cfg = cfgDefault;

global.config = require(cfg);

files = argv;
files.forEach((file, idx) => {files[idx] = `${process.cwd()}/${file}`;});

//获取文件内容，并做进一步处理
reader.getTalkList(files).then(talkList => {
    //解析文件内容
    let talks = util.array.merge(talkList);
    talks = util.talk.str2Obj(talks);

    let tracks = [];
    let maxDays = global.config.limit.maxDays || true; //读取配置，如果活动安排天数有限制，则按要求来

    //把所有活动妥善安排到日程
    while (talks.length && (maxDays === true ? true : tracks.length < maxDays)) {
        this.track = track.generator(tracks.length + 1);

        let needTrack = true;
        this.track.sessions.forEach(session => {
            //问题归纳为01背包问题，通过动态规划把合适的活动安排到合适的时间段
            let idxs = ai.dp.kp.zeroOne(talks, session.timeRemain);
            if (!idxs[0] && idxs.length != 0) {
                idxs = [];
                talks = [];
                needTrack = false;
            }

            let mark = session.begin;
            idxs.forEach(idx => {
                let talk = talks[idx];
                talk.scheduled = mark;
                mark = time.elapse(mark, talk.timeCost);
                session.talks.push(talk);
                session.timeUsed += talk.timeCost;
                session.timeRemain -= talk.timeCost;
                delete talks[idx];
            });

            talks = util.array.clear(talks);
        });

        if (needTrack) tracks.push(this.track);
    }

    //打印日程安排
    track.print(tracks);
}).catch(err => {
    //错误捕获
    console.log(`Error[${err}]`);
});
