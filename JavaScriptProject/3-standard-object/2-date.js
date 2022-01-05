// Date对象用来表示日期和时间
var now = new Date();
now; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
now.getFullYear(); // 2015, 年份
now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
now.getDate(); // 24, 表示24号
now.getDay(); // 3, 表示星期三
now.getHours(); // 19, 24小时制
now.getMinutes(); // 49, 分钟
now.getSeconds(); // 22, 秒
now.getMilliseconds(); // 875, 毫秒数
now.getTime(); // 1435146562875, 以number形式表示的时间戳

// 创建指定日期和时间的Date对象
// 月份参数从0开始，0表示1月，5表示6月
var d = new Date(2015, 5, 19, 20, 15, 30, 123);
d; // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

// 解析一个符合ISO 8601格式的字符串，并生成时间戳
// Date.parse()时传入的字符串使用实际月份01~12
var t = Date.parse('2015-06-24T19:49:22.875+08:00');
t; // 1435146562875
// 使用时间戳创建Date对象
var d = new Date(1435146562875);
d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
// 转换为Date对象后getMonth()获取的月份值为0~11
d.getMonth(); // 5

// Date对象表示的时间默认按浏览器所在时区显示
var d = new Date(1435146562875);
// 转为本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
d.toLocaleString(); // '2015/6/24 下午7:49:22'
// 转为UTC时间，与本地时间相差8小时
d.toUTCString(); // 'Wed, 24 Jun 2015 11:49:22 GMT'，UTC时间，与本地时间相差8小时