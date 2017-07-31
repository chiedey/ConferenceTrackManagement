const _prepare4Global = require('../index');
const expect = require('chai').expect;
const ai     = require('../lib/ai');

const talks = [
    {title: 'aaaaa', lightning: '', timeCost: 60, unit: 'min', weight: 1, scheduled: ''},
    {title: 'bbbbb', lightning: '', timeCost: 60, unit: 'min', weight: 1, scheduled: ''},
    {title: 'ccccc', lightning: '', timeCost: 30, unit: 'min', weight: 1, scheduled: ''},
    {title: 'xxxxx', lightning: '', timeCost: 45, unit: 'min', weight: 1, scheduled: ''},
    {title: 'yyyyy', lightning: '', timeCost: 20, unit: 'min', weight: 1, scheduled: ''},
    {title: 'zzzzz', lightning: '', timeCost: 50, unit: 'min', weight: 1, scheduled: ''}
];
const time = 180;

describe('Testing for ai.js', () => {
    it("[ai.dp.kp.zeroOne(talks, time)] Should return a array in any case", () => {
        expect(ai.dp.kp.zeroOne(talks, time)).to.be.an('array');
    });
});
