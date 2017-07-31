const _prepare4Global = require('../index');
const expect = require('chai').expect;
const track  = require('../lib/track');

describe('Testing for track.js', () => {
    it("track.generator() Should return a object", () => {
        expect(track.generator()).to.be.an('object');
    });
});
