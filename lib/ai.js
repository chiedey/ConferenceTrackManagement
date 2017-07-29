let ai = {};

ai.knapsackProblem = {
    faker: (talks, session, tmp) => {
        let idxs = [];

        for (let i = 0; i < 2; i++) idxs.push(tmp[0]++);

        return idxs;
    }
}

module.exports = ai;
