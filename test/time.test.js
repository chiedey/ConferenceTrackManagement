const _prepare4Global = require('../index');
const time   = require('../lib/time');
const expect = require('chai').expect;

describe('Testing for time.js', () => {
    it("[time.duration('18:00', '19:00')] Count the minutes between A and B, should return a number", () => {
        expect(time.duration('18:00', '19:00')).to.be.an('number');
    });
    
    it("[time.duration('18:00', '19:00')] Count the minutes between 18:00 and 19:00, should return a 60", () => {
        expect(time.duration('18:00', '19:00')).to.be.equal(60);
    });

    it("[time.elapse('18:00', 45)] Specify the time, plus the number of minutes specified, should return a string", () => {
        expect(time.elapse('18:00', 45)).to.be.an('string');
    });

    it("[time.elapse('18:00', 45)] Specify the 18:00, plus the 45 minutes specified, should return 18:45", () => {
        expect(time.elapse('18:00', 45)).to.be.equal('18:45');
    });

    it("[time.militaryTimeTo12HrsClock('18:00')] Should return a string", () => {
        expect(time.militaryTimeTo12HrsClock('18:00')).to.be.an('string');
    });

    it("[time.militaryTimeTo12HrsClock('18:00')] When argument is 18:00, should return 06:00PM", () => {
        expect(time.militaryTimeTo12HrsClock('18:00')).to.be.equal('06:00PM');
    });

    it("[time.isExcess('18:00', '18:15')] Should return a boolean", () => {
        expect(time.isExcess('18:00', '18:15')).to.be.an('boolean');
    });

    it("[time.isExcess('18:00', '18:01')] When the first argument was earlier than the second argument, should return false", () => {
        expect(time.isExcess('18:00', '18:01')).to.not.be.ok;
    });

    it("[time.isExcess('18:02', '18:01')] When the first argument was later than the second argument, should return true", () => {
        expect(time.isExcess('18:02', '18:01')).to.be.ok;
    });

    it("[time.isExcess('18:01', '18:01')] When the first argument is the same as the second argument, should return false", () => {
        expect(time.isExcess('18:01', '18:01')).to.not.be.ok;
    });

    it("[time.isExcess('19:00', '18:01')] 19:00 was later than 18:01, should return true", () => {
        expect(time.isExcess('19:00', '18:01')).to.be.ok;
    });
});
