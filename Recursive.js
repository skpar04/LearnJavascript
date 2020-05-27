var aData = {
    "0" : [
        {"code": 1},
        {"code": 2}
    ],
    "1" : [
        {"code": 11},
        {"code": 12}
    ],
    "2" : [
        {"code": 21},
        {"code": 22}
    ],
    "11" : [
        {"code": 111},
        {"code": 112}
    ],
    "22" : [
        {"code": 221},
        {"code": 222}
    ]
}


function getData(sCode) {
    var aReturn = aData[sCode];
    return aReturn === undefined ? [] : aReturn;
}

function exec() {
    return getTree(0);
}


function getTree(sCode) {
    var oReturn = {};
    var aTest = getData(sCode);
    for (var i in aTest) {
        oReturn.code = aTest[i].code;
        oReturn.next = getData(aTest[i].code);
        oReturn.next.push(getTree(aTest[i].code));
    }
return oReturn;
}


exec();



/*
function getTree(sCode) {
    // todo
    var oReturn = {};
    var aTest = getData(sCode);
    if (sCode === 0) {
        oReturn.code = 0;
        oReturn.next = aTest[i];
        return
    } else {
        for (var i in aTest) {
            oReturn.code = sCode;
            oReturn.next = aTest[i];
        }
        oReturn.next.push(getTree(sCode));
    }
    return oReturn;
}

*/

var aData = {
    "0" : [
        {"code": 1},
        {"code": 2}
    ],
    "1" : [
        {"code": 11},
        {"code": 12}
    ],
    "2" : [
        {"code": 21},
        {"code": 22}
    ],
    "11" : [
        {"code": 111},
        {"code": 112}
    ],
    "22" : [
        {"code": 221},
        {"code": 222}
    ]
}


function getData(sCode) {
    var aReturn = aData[sCode];
    return aReturn === undefined ? [] : aReturn;
}


function exec() {
    return getTree(0);
}


function getTree(sCode) {
    // todo
}

exec();



{
    "code":0,
    "next":[
    {
        "code":1,
        "next":[
            {
                "code":11,
                "next":[
                    {
                        "code":111,
                        "next":[

                        ]
                    },
                    {
                        "code":112,
                        "next":[

                        ]
                    }
                ]
            },
            {
                "code":12,
                "next":[

                ]
            }
        ]
    },
    {
        "code":2,
        "next":[
            {
                "code":21,
                "next":[

                ]
            },
            {
                "code":22,
                "next":[
                    {
                        "code":221,
                        "next":[

                        ]
                    },
                    {
                        "code":222,
                        "next":[

                        ]
                    }
                ]
            }
        ]
    }
]
}