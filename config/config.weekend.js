//双休日，周末
module.exports = config = {
    timeUnit: 'min',
    lightning: {
        symbol: 'lightning',
        timeCost: 5
    },
    limit: {
        maxDays: 2 //因为周末只有两天，limit下面加一个配置项maxDays = 2限制所有娱乐活动只能安排两天
    },
    session: {
        section: {
            split: '-',
            //默认的时间安排
            default: [
                '07:00-08:30-Breakfast', //早上7点起床，8点半吃早饭
                '09:00-12:00-Lunch',     //中午12点吃午饭，中午12点到下午2点午休
                '14:00-18:00-Dinner',    //晚上6点吃晚饭
                '19:00-23:30-Sleep'      //晚上11点半睡觉
            ],
            //周六玩儿的太嗨太累，周日（第二天）睡了个大懒觉，所以时间的安排也有了些变化
            2: [
                '11:15-12:30-Brunch',              //大懒觉睡到早上11点15，中午12点半吃Brunch（早午饭）
                '14:00-16:00-Waiting for Friends', //下午2点到下午4点在家准备，等朋友过来开派对
                '17:30-23:00-Party Time',          //狂欢时间
                '23:15-23:30-Sleep'                //各回各家，各找各妈
            ]
        },
        limit: {
            //晚上睡觉不早于晚上10点，不晚于晚上11点半，大白话：晚上10点前睡不着，晚上11点半后为了身体健康，必须入睡
            'Sleep': {noEarlier: '22:00', noLater: '23:30'}
        }
    },
    track: {
        title: 'Day' //周末，轻松一点，把Track改成多用于娱乐、旅游行程安排的单词Day
    }
};
