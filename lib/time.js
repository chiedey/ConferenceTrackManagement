let time = {};

//字符串时间类型转换成结构化的时间类型，方便后面运算
let str2Obj = str => {
    let tmp = str.split(':');
    let obj = {};

    obj.hr = Number(tmp[0]);
    obj.min = Number(tmp[1]);

    if (obj.hr > 23 || obj.min > 59 || obj.hr < 0 || obj.min < 0) {
        throw new Error('Error[Illegal time]' + ` Hour[${obj.hr}]` + ` Minute[${obj.min}]`);
    }

    return obj;
}

//计算两个时间点之间的分钟数，如18:00和18:15之间相差15分钟
time.duration = (begin, end) => {
    let oBegin = str2Obj(begin);
    let oEnd = str2Obj(end);
    let beginMinOffset;
    let endMinOffset;

    if ((oBegin.hr > oEnd.hr) || (oBegin.hr === oEnd.hr && oBegin.min > oEnd.min)) {
        throw new Error('Error[Illegal time]' + ` Start[${begin}]` + ` End[${end}]`);
    }

    if (oBegin.min === 0) {
        oBegin.hr = oBegin.hr;
        beginMinOffset = 0;
    } else {
        oBegin.hr += 1;
        beginMinOffset = 60 - oBegin.min;
    }
    if (oEnd.min === 0) {
        oEnd.hr = oEnd.hr;
        endMinOffset = 0;
    } else {
        oEnd.hr += 1;
        endMinOffset = 60 - oEnd.min;
    }

    return ((oEnd.hr - oBegin.hr) * 60) + beginMinOffset - endMinOffset;
}

//给定一个时间点，计算经过给定分钟数之后的时间点，如19:00过15分钟到了19:15
time.elapse = (time, min) => {
    let oTime = str2Obj(time);

    oTime.min += min;

    while (oTime.min > 59 || oTime.min < 0) {
        if (oTime.min > 59) {
            oTime.min -= 60;
            oTime.hr += 1;
        } else if (oTime.min < 0) {
            oTime.min += 60;
            oTime.hr -= 1;
        }
    }

    if (oTime.min === 0) oTime.min = '00';
    if (oTime.hr > 23) console.log('Warning[More than one day]');

    return `${oTime.hr}:${oTime.min}`;
}

//24小时制转换成12小时制，如14:00相当于02:00PM
time.militaryTimeTo12HrsClock = time => {
    const AM = 'AM';
    const PM = 'PM';
    
    let oTime = str2Obj(time);
    let tag = '';

    if (oTime.hr >= 0 && oTime.hr < 12) {
        oTime.hr = `${oTime.hr}`;
        tag = AM;
    } else if (oTime.hr >= 12 && oTime.hr < 24) {
        if (oTime.hr === 12) {
            oTime.hr = 12;
        } else {
            oTime.hr = `${oTime.hr - 12}`;
        }
        tag = PM;
    } else {
        throw new Error('Error[Illegal time]' + ` Time[${time}]`);
    }

    if (oTime.min < 10) oTime.min = `0${oTime.min}`;
    if (oTime.hr < 10) oTime.hr = `0${oTime.hr}`;

    return `${oTime.hr}:${oTime.min}${tag}`;
}

//判断时间点A是否超过时间点B，如14:00超过了13:00，则返回true，反之返回false
time.isExcess = (current, noEarlier) => {
    let oCurrent = str2Obj(current);
    let oNoEarlier = str2Obj(noEarlier);

    if (oCurrent.hr > oNoEarlier.hr) return true;
    else if (oCurrent.hr === oNoEarlier.hr) {
        if (oCurrent.min > oNoEarlier.min) return true;
        else return false;
    } else return false;
}

module.exports = time;
