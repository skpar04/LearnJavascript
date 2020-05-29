const aCategory = {
    "dep1": [
        {"dep1": 1, "depth": 1},
        {"dep1": 2, "depth": 1}
    ],
    "dep2": [
        {"dep1": 1, "dep2": 11, "depth": 2},
        {"dep1": 2, "dep2": 21, "depth": 2},
        {"dep1": 2, "dep2": 22, "depth": 2}
    ],
    "dep3": [
        {"dep1": 1, "dep2": 11, "dep3": 111, "depth": 3},
        {"dep1": 2, "dep2": 21, "dep3": 211, "depth": 3}
    ],
};

function getData(iDep) {
    return aCategory['dep' + iDep] === undefined ? [] : aCategory['dep' + iDep];
}

function exec() {
    // todo: 이 자리에 getData 함수를 사용하여 아래 aResult 와 같은 구조의 데이터를 만드시오
}

/** 배열 순서는 바뀌어도 괜찮습니다.  **/
let aResult = [
    {"dep1": 1, "depth": 1, "has_next": "T"},
    {"dep1": 2, "depth": 1, "has_next": "T"},
    {"dep1": 1, "dep2": 11, "depth": 2, "has_next": "T"},
    {"dep1": 2, "dep2": 21, "depth": 2, "has_next": "T"},
    {"dep1": 2, "dep2": 22, "depth": 2, "has_next": "F"},
    {"dep1": 1, "dep2": 11, "dep3": 111, "depth": 3, "has_next": "F"},
    {"dep1": 2, "dep2": 21, "dep3": 211, "depth": 3, "has_next": "F"}
];