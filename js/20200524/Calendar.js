var nYear = new Date().getFullYear();
var nMonth = new Date().getMonth() + 1;
//获取某月的总天数
function fGetMonth(year,month)
{
    var oDate = new Date(year,month,0);//0的目的是获取某月的天数；当前月份的最后一天
    oDate = oDate.getDate();//获取日期
    return oDate;
}
//创建数组
function fGetData(year,month){
    var aDate = new Array();//整个数据
    for(var i = 0; i <7; i ++){
        aDate[i] = new Array(7);//每行数据；aDate[0]第一行、aDate[6]最后一行
    }
    var oMyDate = new Date(year,month - 1,1);//获取当前月份的第一天
    oMyDate = oMyDate.getDay(); //当前月份的1号是星期几 0 至 6
    var nAllDay = fGetMonth(year,month); //当前月份的总天数
    var nDay = 1;//计数器（天数）
    aDate[0][0] = "日";
    aDate[0][1] = "一";
    aDate[0][2] = "二";
    aDate[0][3] = "三";
    aDate[0][4] = "四";
    aDate[0][5] = "五";
    aDate[0][6] = "六";//第一行内容；星期数
    //确定第二行的内容；当前月份1号的星期数开始
    for(var c = oMyDate; c < 7; c ++){
        aDate[1][c] = nDay;
        nDay ++;
    }
    //把其余的天数加入到数组中
    var r,j;//r是行数；j是星期数
    for(r = 2; r < 7; r ++){
        for(j = 0; j < 7; j ++) {
            if(nDay <= nAllDay) {
                aDate[r][j] = nDay;
            nDay ++;
            }
        }
    }
    return aDate;//整个月份的数据
}
//把数组中的数据添加到页面中
function fAddData(year,month){
    var aDate = fGetData(year,month); //赋值当前月份的数据
    var nLastLine = 1;
    var r, c;
    //第一行
    document.write("<h2>" + nYear + "年" + nMonth + "月" + "</h2>")
    document.write("<table><tr>");
    for (var i = 0; i < 7; i ++) {
        document.write("<td>" + aDate[0][i] + "</td>");
    }
    document.write("</tr>");
    //除第一行的其它行;r是行数；c是星期数；
    for(r = 1; r < 7; r ++){
        document.write("<tr>");
        for(c = 0; c < 7; c ++){
            document.write("<td>");
            if(aDate[r][c] > 0) {
                document.write(""+aDate[r][c]+"");
            }else{
                if(r > 1) {
                    document.write("" + nLastLine++ + "");
                }
                document.write(" ");
            }
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
window.onload = fAddData(nYear,nMonth);
