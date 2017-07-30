const ai     = require('./lib/ai');
const util   = require('./lib/util');
const time   = require('./lib/time');
const track  = require('./lib/track');
const reader = require('./lib/reader');

//从参数获取文件的路径，支持输入多个文件
let files = process.argv.slice(2);
files.forEach((file, idx) => {files[idx] = `${process.cwd()}/${file}`;});

//获取文件内容，并做进一步处理
reader.getTalkList(files).then(talkList => {
    //解析文件内容
    let talks = util.array.merge(talkList);
    talks = util.talk.str2Obj(talks);

    let tracks = [];

    //把所有活动妥善安排到日程
    while (util.array.getRealLength(talks)) {
        this.track = track.generator(tracks.length + 1);

        this.track.sessions.forEach(session => {
            //问题归纳为01背包问题，通过动态规划把合适的活动安排到合适的时间段
            let idxs = ai.dp.kp.zeroOne(talks, session.timeRemain);

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

        tracks.push(this.track);
    }

    //打印日程安排
    track.print(tracks);
}).catch(err => {
    //错误捕获
    console.log(`Error[${err}]`);
});
