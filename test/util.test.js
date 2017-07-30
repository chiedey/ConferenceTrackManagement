const expect = require('chai').expect;
const util  = require('../lib/util');

const talks = [
    'aaaaa aaaaa aaaaa aaaaa aaaaa 60min',
    'bbbbb bbbbb bbbbb bbbbb bbbbb 60min',
    'ccccc ccccc ccccc ccccc ccccc 30min',
    'xxxxx xxxxx xxxxx xxxxx xxxxx 45min',
    'yyyyy yyyyy yyyyy yyyyy yyyyy 20min',
    'zzzzz zzzzz zzzzz zzzzz zzzzz 50min'
];

describe('Testing for util.js', () => {
    it("[util.array.merge([[1], [2]])] Should return a array", () => {
        expect(util.array.merge([[1], [2]])).to.be.an('array');
    });

    it("[util.array.merge([[1,9,9,2], [10,21]])] Should return [1,9,2,10,21]", () => {
        expect(util.array.merge([[1,9,9,2], [10,21]])).to.be.deep.equal([1,9,2,10,21]);
    });

    it("[util.array.getRealLength([1,2,,5,,,6])] Should return a number", () => {
        expect(util.array.getRealLength([1,2,,5,,,6])).to.be.an('number');
    });

    it("[util.array.getRealLength([1,2,,5,,,6])] Should return 4", () => {
        expect(util.array.getRealLength([1,2,,5,,,6])).to.be.equal(4);
    });

    it("[util.array.clear([1,2,,5,,,6])] Should return a array", () => {
        expect(util.array.clear([1,2,,5,,,6])).to.be.an('array');
    });

    it("[util.array.clear([1,2,,5,,,6])] Should return [1,2,5,6]", () => {
        expect(util.array.clear([1,2,,5,,,6])).to.be.deep.equal([1,2,5,6]);
    });

    it("[util.talk.str2Obj(talks)] Should return a array", () => {
        expect(util.talk.str2Obj(talks)).to.be.an('array');
    });

    it("[util.talk.str2Obj(talks)] The element of results should be a object", () => {
        let x = util.talk.str2Obj(talks);
        expect(x[0]).to.be.an('object');
    });
});
