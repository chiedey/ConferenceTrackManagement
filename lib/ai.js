let ai = {};

ai.dp = {
    kp: {
        zeroOne: (talks, time) => {
            if (talks.length === 0) return [];

            let size      = time;
            let item      = [];
            let value     = [];
            let weight    = [];
            let bagMatrix = [];

            talks.forEach(talk => {
                weight.push(talk.timeCost);
                value.push(talk.weight);
            });

            for (let w = 0; w <= size; w++) {
                item[w]      = [];
                bagMatrix[w] = [];

                for (let j = 0; j < talks.length; j++) {
                    if (0 === w) {
                        bagMatrix[w][j] = 0;
                        continue;
                    }
                    if (weight[j] > w) {
                        bagMatrix[w][j] = bagMatrix[w][j-1] || 0;
                        continue;
                    }

                    let drop   = (bagMatrix[w-weight[j]][j-1] || 0) + value[j];
                    let noDrop = bagMatrix[w][j-1] || 0;

                    bagMatrix[w][j] = Math.max(drop, noDrop);

                    if (drop > noDrop) item[w].push(j);
                }
            }

            let sum  = 0;
            let max  = bagMatrix.pop().pop();
            let idxs = [];
            for (let v = size; v >= 0;) {
                let tmp = item[v].pop();
                while (idxs.indexOf(tmp) != -1) tmp = item[v].pop();
                idxs.push(tmp);
                sum += value[tmp];
                if (sum === max) break;
                v -= weight[tmp];
            }

            return idxs;
        }
    }
}

module.exports = ai;
