//require
var jquery = require('jquery2min');//不兼容ie678

/*
 *参数说明：
 *time:需要进行倒计时的时间总数,数字类型
 *btn:倒计时其间状态不可点击的按钮,input type="button"的jquery对象
 *changeTxt:显示倒计时秒数的文本,dom
 *样例：
 countdown(60,$('#btn'),$('#txt'));
 */

var countdown = function (time, btn, changeTxt) {
    var timer, changeTime = time, greyBgColor='#ccc',greyFont='#666';
    var defaultStyle = {
        fontColor:btn.css('color'),
        txt:btn.val(),
        backgroundColor:btn.css('background-color'),
        changeTxt:changeTxt.html()
    };
    //循环执行的函数
    (function(time){
        if (changeTime <= 0) {
            btn.removeAttr("disabled");
            btn.css({'color': defaultStyle.fontColor,'background':defaultStyle.backgroundColor});
            btn.val(defaultStyle.txt);
            changeTxt.html(defaultStyle.changeTxt)
            changeTime = time;
            clearTimeout(timer);
        } else {
            btn.attr("disabled", true);
            btn.css({'color': greyFont,'background':greyBgColor});
            changeTxt.html(changeTime + '秒后再次获取');
            changeTime--;
            var arg=arguments;
            timer = setTimeout(function () {
                arg.callee(changeTime);
            }, 1000);
        }
    }());
};
module.exports = countdown;
