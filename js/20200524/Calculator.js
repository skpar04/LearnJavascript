

function $(id){
    return document.getElementById(id);
}
//需要运算的两个值，和判断点是用到的变量；初始值为0。
var nLeft, nRight, sPoint;
nLeft = 0;
nRight = 0;
sPoint = 0;

var sLength, sTest;//sLength是判断字符串长的用的变量、sTest是储存临时数据用的变量。


//C按钮事件
function clearText() {
    $("screenIn").value = "0";
    nLeft = 0;
    nRight = 0;
    sPoint = 0;
}

function getScreen(id) {
    // 判断第一个数是否有值
    if (nLeft == 0) {
        // 改变value默认值
        if ($("screenIn").value == "0") {
            $("screenIn").value = $(id).value;
        } else {
            $("screenIn").value = $("screenIn").value + $(id).value;
        }
    } else {
        if($("screenIn").value.substr(-1) == "0" && nRight === 0) { // 判断运算符后面第一位的数字是否为0
            $("screenIn").value = $("screenIn").value;
        } else {
            $("screenIn").value = $("screenIn").value + $(id).value;
        }
        sLength = $("screenIn").value;
        sTest = ""; //临时数据。
        // 获取第二次输入的数字
        for (var i = 0; i < sLength.length; i++) {
            // 判断加减乘除
            if (sLength[i] == "+") {
                for (var j = i + 1; j < sLength.length; j++) {
                    sTest += sLength[j];
                }
                nRight = parseFloat(sTest);
            } else if (sLength[i] == "-") {
                for (var j = i + 1; j < sLength.length; j++) {
                    sTest += sLength[j];
                }
                nRight = parseFloat(sTest);
            } else if (sLength[i] == "×") {
                for (var j = i + 1; j < sLength.length; j++) {
                    sTest += sLength[j];
                }
                nRight = parseFloat(sTest);
            } else if (sLength[i] == "÷") {
                for (var j = i + 1; j < sLength.length; j++) {
                    sTest += sLength[j];
                }
                nRight = parseFloat(sTest);
            } else if (sLength[i] == "%") {
                for (var j = i + 1; j < sLength.length; j++) {
                    sTest += sLength[j];
                }
                nRight = parseFloat(sTest);
            }

        }
    }
    if (sPoint === 1){
        sPoint = sPoint - 1;
    }//单击运算符以后再单击数字，就可以重新单击“点”
}

//parseFloat()函数指定字符串中的首个字符是否是数字。
//如果是，则对字符串进行解析，直到到达数字的末端为止，然后以数字返回该数字，而不是作为字符串。
//单击运算符号事件。
function operation(id){
    if( $("screenIn").value !== "0"){
        if(nLeft == 0)
        {
            $("screenIn").value = $("screenIn").value + $(id).value;
            if(parseFloat($("screenIn").value) === 0) {
                nLeft = 0
            } else {
                nLeft = parseFloat($("screenIn").value);
            }
        } /*else if(nRight !== 0 || (nRight === 0 && $("screenIn").value.substr(-1) === "0")) {
            var sResults = $("screenIn").value.replace('÷','/');
            sResults = sResults.replace('×','*');
            $("screenOut").innerHTML = $("screenIn").value + "<br>" + eval(sResults);
            nRight = 0;
            sPoint = 0;
            $("screenIn").value = parseFloat(eval(sResults));
            $("screenIn").value = $("screenIn").value + $(id).value;
            if(parseFloat($("screenIn").value) === 0) {
                nLeft = 0;
            }
        }*/
    }
    //sPoint 转为number类型 让点可以再输入一次
    sPoint = 1;
}

// 判断可否输入“点”
//sPoint = 0 时可以输入“点”
//单击”点“事件。
function fPoint() {
    if(sPoint === 0 ){
        $("screenIn").value = $("screenIn").value + $("sPoint").value;
        sPoint = ($("screenIn").value); //sPoint赋值为字符串
    }
}

function fResults() {
    var sResults = $("screenIn").value.replace('÷','/')
    sResults = sResults.replace('×','*')
    if (sResults.substr(-1) == "+" ||
        sResults.substr(-1) == "-" ||
        sResults.substr(-1) == "*" ||
        sResults.substr(-1) == "/" ||
        sResults.substr(-1) == "%") { //判断最后一个字符是否是运算符
        sResults = sResults.substr(0,sResults.length - 1)
    }
    $("screenOut").innerHTML = $("screenIn").value + "<br>" + eval(sResults); //把结果显示在#screenOut上
    nLeft = 0;
    nRight = 0;
    sPoint = 0;
    $("screenIn").value = "0";//初始化值
}






