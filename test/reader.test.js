const _prepare4Global = require('../index');
const expect = require('chai').expect;
const reader = require('../lib/reader');

describe('Testing for reader.js', () => {
    it('[reader.getTalkList([])] Should return a array whether fail or succeed', () => {
        reader.getTalkList([]).then(ret => {
            expect(ret).to.be.an('array');
        }).catch(err => {
            expect(ret).to.be.an('array');
        });
    });

    it('[reader.getTalkList()] Should return a array even there have no arguments', () => {
        reader.getTalkList().then(ret => {
            expect(ret).to.be.an('array');
        }).catch(err => {
            expect(ret).to.be.an('array');
        });
    });
});
