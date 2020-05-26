

function newWindowFunction() {
    var bResult = confirm("是否显示");
    if (bResult === true) {
        window.open("../20200524/Calendar.html",'','width=300,height=300');
    }
}

document.getElementById("calendarButton").addEventListener("click", newWindowFunction);

