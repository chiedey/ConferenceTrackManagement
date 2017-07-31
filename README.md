# Conference Track Management
## 快速访问
[@GitHub](https://github.com/chiedey/ConferenceTrackManagement)
[@NPM](https://www.npmjs.com/package/conference-track-management)
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
# 除了GitHub，项目同时发布到了NPM上面，你也可以
$ npm i conference-track-management
$ cd node_modules/conference-track-management
$ node index.js data/data1.txt
```
将会看到类似的屏幕输出
```bash
Track 1:
09:00AM Ruby Errors from Mismatched Gem Versions 45min
09:45AM Lua for the Masses 30min
10:15AM Overdoing it in Python 45min
11:00AM Writing Fast Tests Against Enterprise Rails 60min
12:00PM Lunch
01:00PM Rails Magic 60min
02:00PM Woah 30min
02:30PM Accounting-Driven Development 45min
03:15PM Communicating Over Distance 60min
04:15PM Common Ruby Errors 45min
05:00PM Networking Event

Track 2:
09:00AM Clojure Ate Scala (on my project) 45min
09:45AM Ruby on Rails: Why We Should Move On 60min
10:45AM Pair Programming vs Noise 45min
11:30AM Sit Down and Write 30min
12:00PM Lunch
01:00PM User Interface CSS in Rails Apps 30min
01:30PM A World Without HackerNews 30min
02:00PM Ruby on Rails Legacy App Maintenance 60min
03:00PM Ruby vs. Clojure for Back-End Development 30min
03:30PM Programming in the Boondocks of Seattle 30min
04:00PM Rails for Python Developers lightning
04:05PM Networking Event

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
    √ [ai.dp.kp.zeroOne(talks, time)] Should return a array in any case

  Testing for reader.js
    √ [reader.getTalkList([])] Should return a array whether fail or succeed
    √ [reader.getTalkList()] Should return a array even there have no arguments

  Testing for time.js
    √ [time.duration('18:00', '19:00')] Count the minutes between A and B, should return a number
    √ [time.duration('18:00', '19:00')] Count the minutes between 18:00 and 19:00, should return a 60
    √ [time.elapse('18:00', 45)] Specify the time, plus the number of minutes specified, should return a string
    √ [time.elapse('18:00', 45)] Specify the 18:00, plus the 45 minutes specified, should return 18:45
    √ [time.militaryTimeTo12HrsClock('18:00')] Should return a string
    √ [time.militaryTimeTo12HrsClock('18:00')] When argument is 18:00, should return 06:00PM
    √ [time.isExcess('18:00', '18:15')] Should return a boolean
    √ [time.isExcess('18:00', '18:01')] When the first argument was earlier than the second argument, should return false
    √ [time.isExcess('18:02', '18:01')] When the first argument was later than the second argument, should return true
    √ [time.isExcess('18:01', '18:01')] When the first argument is the same as the second argument, should return false

  Testing for track.js
    √ track.generator() Should return a object

  Testing for util.js
    √ [util.array.merge([[1], [2]])] Should return a array
    √ [util.array.merge([[1,9,9,2], [10,21]])] Should return [1,9,2,10,21]
    √ [util.array.getRealLength([1,2,,5,,,6])] Should return a number
    √ [util.array.getRealLength([1,2,,5,,,6])] Should return 4
    √ [util.array.clear([1,2,,5,,,6])] Should return a array
    √ [util.array.clear([1,2,,5,,,6])] Should return [1,2,5,6]
    √ [util.talk.str2Obj(talks)] Should return a array
    √ [util.talk.str2Obj(talks)] The element of results should be a object


  22 passing (21ms)
```
## 其他
可以指定多个输入文件，仓库自带了几个数据文件，可以看到不一样的屏幕输出效果
```bash
$ node index.js data/data1.txt data/data2.txt data/data3.txt
# 或者
$ node index.js data/*
```
将会看到类似的屏幕输出
```bash
Track 1:
09:00AM Ruby Errors from Mismatched Gem Versions 45min
09:45AM Lua for the Masses 30min
10:15AM Overdoing it in Python 45min
11:00AM Writing Fast Tests Against Enterprise Rails 60min
12:00PM Lunch
01:00PM Rails Magic 60min
02:00PM Woah 30min
02:30PM Accounting-Driven Development 45min
03:15PM Communicating Over Distance 60min
04:15PM Common Ruby Errors 45min
05:00PM Networking Event

Track 2:
09:00AM Clojure Ate Scala (on my project) 45min
09:45AM Ruby on Rails: Why We Should Move On 60min
10:45AM Pair Programming vs Noise 45min
11:30AM Sit Down and Write 30min
12:00PM Lunch
01:00PM 《行业介绍及发展历程》 60min
02:00PM User Interface CSS in Rails Apps 30min
02:30PM A World Without HackerNews 30min
03:00PM Ruby on Rails Legacy App Maintenance 60min
04:00PM Ruby vs. Clojure for Back-End Development 30min
04:30PM Programming in the Boondocks of Seattle 30min
05:00PM Networking Event

Track 3:
09:00AM 《产品中心介绍》 60min
10:00AM 《资讯数据中心介绍》 60min
11:00AM 《财经新媒体介绍》 60min
12:00PM Lunch
01:00PM Do the homework of maths 60min
02:00PM Do the homework of English 60min
03:00PM Paly games 120min
05:00PM Networking Event

Track 4:
09:00AM Make a call to Dad 10min
09:10AM Make a call to Mason 40min
09:50AM Do the homework of Geography 30min
10:20AM 《人事制度介绍》 20min
10:40AM 《财务制度介绍》 45min
11:25AM 《行政制度介绍》 30min
11:55AM Rails for Python Developers lightning
12:00PM Lunch
01:00PM Watering the flowers 10min
01:10PM Chitchat on line 45min
01:55PM Online shopping 60min
02:55PM Have a rest 20min
03:15PM Do the laundry 45min
04:00PM Make a call to Mom 60min
05:00PM Networking Event

Track 5:
09:00AM Watch movies 120min
11:00AM Burn bath 15min
11:15AM Do housework 45min
12:00PM Lunch
01:00PM Watch news 20min
01:20PM Feed a dog 5min
04:00PM Networking Event

```
## 思路
该问题本质上带有算法考题的特点，给定输入，经过运算之后输出符合要求的结果，同时这个题目带有实际应用价值，项目根目录下的data目录下面data2.txt文件就是实际生活中的真实数据，所以问题还是挺有意思的。把各个活动安排到日程表里，可以归纳为是经典的01背包问题，每个活动相当于是待放入背包的物品，只能安排或者不安排，活动时长可视为物品的重量，至于活动的价值本项目默认设置为该项目耗费的时长，以此类推，背包的容量就是每一个时间段的时长，比如09:00到12:00这个sesison期间的时长是180分钟。所以该问题的日程安排算法可以间接通过01背包问题的解法来运算。
## 原题
```bash
Problem: Conference Track Management

You are planning a big programming conference and have received many proposals which
have passed the initial screen process but you're having trouble fitting them into
the time constraints of the day -- there are so many possibilities! So you write a
program to do it for you.

#The conference has multiple tracks each of which has a morning and afternoon session.
#Each session contains multiple talks.
#Morning sessions begin at 9am and must finish before 12 noon, for lunch.
#Afternoon sessions begin at 1pm and must finish in time for the networking event.
#The networking event can start no earlier than 4:00 and no later than 5:00.
#No talk title has numbers in it.
#All talk lengths are either in minutes (not hours) or lightning (5 minutes).
#Presenters will be very punctual; there needs to be no gap between sessions.
 
Note that depending on how you choose to complete this problem, your solution may
give a different ordering or combination of talks into tracks. This is acceptable;
you don’t need to exactly duplicate the sample output given here.

Test input:
Writing Fast Tests Against Enterprise Rails 60min
Overdoing it in Python 45min
Lua for the Masses 30min
Ruby Errors from Mismatched Gem Versions 45min
Common Ruby Errors 45min
Rails for Python Developers lightning
Communicating Over Distance 60min
Accounting-Driven Development 45min
Woah 30min
Sit Down and Write 30min
Pair Programming vs Noise 45min
Rails Magic 60min
Ruby on Rails: Why We Should Move On 60min
Clojure Ate Scala (on my project) 45min
Programming in the Boondocks of Seattle 30min
Ruby vs. Clojure for Back-End Development 30min
Ruby on Rails Legacy App Maintenance 60min
A World Without HackerNews 30min
User Interface CSS in Rails Apps 30min

Test output:
Track 1:
09:00AM Writing Fast Tests Against Enterprise Rails 60min
10:00AM Overdoing it in Python 45min
10:45AM Lua for the Masses 30min
11:15AM Ruby Errors from Mismatched Gem Versions 45min
12:00PM Lunch
01:00PM Ruby on Rails: Why We Should Move On 60min
02:00PM Common Ruby Errors 45min
02:45PM Pair Programming vs Noise 45min
03:30PM Programming in the Boondocks of Seattle 30min
04:00PM Ruby vs. Clojure for Back-End Development 30min
04:30PM User Interface CSS in Rails Apps 30min
05:00PM Networking Event

Track 2:
09:00AM Communicating Over Distance 60min
10:00AM Rails Magic 60min
11:00AM Woah 30min
11:30AM Sit Down and Write 30min
12:00PM Lunch
01:00PM Accounting-Driven Development 45min
01:45PM Clojure Ate Scala (on my project) 45min
02:30PM A World Without HackerNews 30min
03:00PM Ruby on Rails Legacy App Maintenance 60min
04:00PM Rails for Python Developers lightning
05:00PM Networking Event

```