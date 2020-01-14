// task 1
const convert = (...args) => {
    const arr = [...args], convertedValues = [];

    for (let i = 0; i < arr.length; ++i){
        if (typeof arr[i] === 'string'){
            convertedValues[i] = +arr[i];
        } else {
            convertedValues[i] = arr[i].toString();
        }
    }
    return convertedValues;
};

convert(4, '5');

// task 2
const executeforEach = (arr, fun) => {
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; ++i) {
        fun(arr[i]);
    }
};

executeforEach([4, 5, 9], function(el) {console.log(el)});

// task 3
function mapArray(arr, func) {
    const res = [];

    executeforEach(arr, function(el) {
        res.push(func(parseInt(el)));
    });

    return res;
}

mapArray([2, '5', 9], function(el) {return el + 3});

// task 4
function filterArray(arr, func) {
    const res = [];

    executeforEach(arr, function(el) {
        if (func(el)) {
            res.push(el);
        }
    });

    return res;
}

filterArray([7, 5, 8], function(el) { return el % 2 === 0 });

// task 5
function flipOver(str){
    let reversedStr = '';
    for (let i = str.length-1; i >= 0; --i){
        reversedStr += str[i];
    }
    return reversedStr;
}

flipOver('hello world');

// task 6
function makeListFromRange(range){
    let arr = [];
    const START = range[0], END = range[1];

    for (let i = START, j = 0; i <= END; ++i, ++j){
        arr[j] = i;
    }
    return arr;
}

makeListFromRange([2, 7]);

// task 7
const actors = [
    {name: 'tommy', age: 36 },
    {name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, key) {
    const res = [];

    executeforEach(arr, function(el) {
        res.push(el[key]);
    });

    return res;
}


getArrayOfKeys(actors, 'name');

// task 8
function substitute(arr) {
    return mapArray(arr, function(item) {
        const THIRTY = 30;
        return item < THIRTY ? '*' : item;
    });
}

substitute([59, 14, 48, 42, 31, 29]);

// task 9
function getPastDay(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days).getDate();
}

const date = new Date(2019, 0, 2);

getPastDay(date, 2);

// task 10
function formatDate(date){
    const HOUR = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const MIN = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${HOUR}:${MIN}`;
}

formatDate(new Date('6/15/2018 09:15:00'));
