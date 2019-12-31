function makeNumber(str) {
    let arr = str.split('');

    let answerStr = arr.filter(function (item) {
        return !isNaN(item);
    });
    return answerStr.join('');
}

function countNumbers(str){
    let result = {}, num = makeNumber(str);
    for (let value of num){
        if(result[value] === undefined){
            result[value] = 1;
        } else {
            ++result[value];
        }
    }

    return result;
}

countNumbers('fwef25ef8w1ef81wq65');
