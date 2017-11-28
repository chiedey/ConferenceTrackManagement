//代码配置化
module.exports = config = {
    timeUnit: 'min',
    lightning: {
        symbol: 'lightning',
        timeCost: 5,
        /*
        merge: {
            break: 'Have a rest...',
            timeCost: 10
        }
        */
    },
    limit: {
    },
    session: {
        section: {
            split: '-',
            default: [
                '09:00-12:00-Lunch',
                '13:00-17:00-Networking Event'
            ]
        },
        limit: {
            'Networking Event': {noEarlier: '16:00', noLater: '17:00'}
        }
    },
    track: {
        title: 'Track'
    }
};
