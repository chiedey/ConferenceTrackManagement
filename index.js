const ai     = require('./lib/ai');
const util   = require('./lib/util');
const time   = require('./lib/time');
const track  = require('./lib/track');
const reader = require('./lib/reader');

let tmp = [0];

let files = process.argv.slice(2);
files.forEach((file, idx) => {files[idx] = `${process.cwd()}/${file}`;});

reader.getTalkList(files).then(talkList => {
    let talks = util.array.merge(talkList);
    talks = util.talk.str2Obj(talks);

    let tracks = [];

    while (util.array.getRealLength(talks)) {
        this.track = track.generator(tracks.length + 1);

        this.track.sessions.forEach(session => {
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

    track.print(tracks);
}).catch(err => {
    console.log(`Error[${err}]`);
});
