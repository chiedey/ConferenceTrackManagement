//代码配置化
module.exports = config = {
    timeUnit: 'min',
    lightning: {
        symbol: 'lightning',
        timeCost: 5
    },
    limit: {
    },
    session: {
        section: {
            split: '-',
            default: [
                '09:00-12:30-Lunch',
                '13:30-17:00-Networking Event'
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
