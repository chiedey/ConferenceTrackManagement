# Conference Track Management
## 准备Node.js环境(已经装好Node.js环境略过这一步)
简易教程，仅供参考
```bash
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
$ nvm install 6
```
帮助信息
https://github.com/creationix/nvm
## 快速运行
```bash
$ git clone https://github.com/chiedey/ConferenceTrackManagement.git
$ cd ConferenceTrackManagement
$ node index.js data/data1.txt
```
将会看到类似的屏幕输出
```bash
Track 1:
09:00AM Programming in the Boondocks of Seattle 30min
09:30AM Sit Down and Write 30min
10:00AM Woah 30min
10:30AM Rails for Python Developers lightning
10:35AM Lua for the Masses 30min
11:05AM Overdoing it in Python 45min
12:00PM Lunch
01:00PM A World Without HackerNews 30min
01:30PM Ruby vs. Clojure for Back-End Development 30min
02:00PM User Interface CSS in Rails Apps 30min
02:30PM Common Ruby Errors 45min
03:15PM Ruby Errors from Mismatched Gem Versions 45min
04:00PM Writing Fast Tests Against Enterprise Rails 60min
05:00PM Networking Event
Track 2:
09:00AM Pair Programming vs Noise 45min
09:45AM Clojure Ate Scala (on my project) 45min
10:30AM Communicating Over Distance 60min
12:00PM Lunch
01:00PM Ruby on Rails Legacy App Maintenance 60min
02:00PM Ruby on Rails: Why We Should Move On 60min
03:00PM Rails Magic 60min
04:00PM Accounting-Driven Development 45min
04:45PM Networking Event
```
## 测试
全局安装mocha
```bash
$ npm i mocha -g
```
进入项目目录，安装测试所需要的依赖包
```bash
$ cd ConferenceTrackManagement
$ npm i
```
测试
```bash
$ mocha test/*
```
将会看到类似的屏幕输出
```bash
  Testing for ai.js
    ✓ [ai.dp.kp.zeroOne(talks, time)] Should return a array in any case

  Testing for reader.js
    ✓ [reader.getTalkList([])] Should return a array whether fail or succeed
    ✓ [reader.getTalkList()] Should return a array even there have no arguments

  Testing for time.js
    ✓ [time.duration('18:00', '19:00')] Count the minutes between A and B, should return a number
    ✓ [time.duration('18:00', '19:00')] Count the minutes between 18:00 and 19:00, should return a 60
    ✓ [time.elapse('18:00', 45)] Specify the time, plus the number of minutes specified, should return a string
    ✓ [time.elapse('18:00', 45)] Specify the 18:00, plus the 45 minutes specified, should return 18:45
    ✓ [time.militaryTimeTo12HrsClock('18:00')] Should return a string
    ✓ [time.militaryTimeTo12HrsClock('18:00')] When argument is 18:00, should return 06:00PM
    ✓ [time.isExcess('18:00', '18:15')] Should return a boolean
    ✓ [time.isExcess('18:00', '18:01')] When the first argument was earlier than the second argument, should return false
    ✓ [time.isExcess('18:02', '18:01')] When the first argument was later than the second argument, should return false
    ✓ [time.isExcess('18:01', '18:01')] When the first argument is the same as the second argument, should return false

  Testing for track.js
    ✓ track.generator() Should return a object

  Testing for util.js
    ✓ [util.array.merge([[1], [2]])] Should return a array
    ✓ [util.array.merge([[1,9,9,2], [10,21]])] Should return [1,9,2,10,21]
    ✓ [util.array.getRealLength([1,2,,5,,,6])] Should return a number
    ✓ [util.array.getRealLength([1,2,,5,,,6])] Should return 4
    ✓ [util.array.clear([1,2,,5,,,6])] Should return a array
    ✓ [util.array.clear([1,2,,5,,,6])] Should return [1,2,5,6]
    ✓ [util.talk.str2Obj(talks)] Should return a array
    ✓ [util.talk.str2Obj(talks)] The element of results should be a object


  22 passing (17ms)
```
## 其他
可以指定多个输入文件，仓库自带了两个数据文件，可以看到不一样的屏幕输出效果
```bash
$ node index.js data/*
# 或者
$ node index.js data/data1.txt  data/data2.txt
```
将会看到类似的屏幕输出
```bash
Track 1:
09:00AM 《人事制度介绍》 20min
09:20AM Ruby vs. Clojure for Back-End Development 30min
09:50AM Programming in the Boondocks of Seattle 30min
10:20AM Sit Down and Write 30min
10:50AM Woah 30min
11:20AM Rails for Python Developers lightning
11:25AM Lua for the Masses 30min
12:00PM Lunch
01:00PM User Interface CSS in Rails Apps 30min
01:30PM A World Without HackerNews 30min
02:00PM 《行政制度介绍》 30min
02:30PM Ruby Errors from Mismatched Gem Versions 45min
03:15PM Overdoing it in Python 45min
04:00PM Writing Fast Tests Against Enterprise Rails 60min
05:00PM Networking Event
Track 2:
09:00AM Clojure Ate Scala (on my project) 45min
09:45AM Pair Programming vs Noise 45min
10:30AM Accounting-Driven Development 45min
11:15AM Common Ruby Errors 45min
12:00PM Lunch
01:00PM Ruby on Rails Legacy App Maintenance 60min
02:00PM Ruby on Rails: Why We Should Move On 60min
03:00PM Rails Magic 60min
04:00PM Communicating Over Distance 60min
05:00PM Networking Event
Track 3:
09:00AM 《财务制度介绍》 45min
09:45AM 《财经新媒体介绍》 60min
10:45AM 《行业介绍及发展历程》 60min
12:00PM Lunch
01:00PM 《产品中心介绍》 60min
02:00PM 《资讯数据中心介绍》 60min
04:00PM Networking Event
```
## 思路
该问题本质上带有算法考题的特点，给定输入，经过运算之后输出符合要求的结果，同时这个题目带有实际应用价值，项目根目录下的data目录下面data2.txt文件就是实际生活中的真实数据，所以问题还是挺有意思的。把各个活动安排到日程表里，可以归纳为是经典的01背包问题，每个活动相当于是待放入背包的物品，只能安排或者不安排，活动时长可视为物品的重量，至于活动的价值本项目默认设置为1，以此类推，背包的容量就是每一个时间段的时长，比如09:00到12:00这个sesison期间的时长是180分钟。所以该问题的日程安排算法可以间接通过01背包问题的解法来运算。
