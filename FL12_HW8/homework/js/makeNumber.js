function makeNumber(str) {
    let arr = str.split('');

    let answerStr = arr.filter(function (item) {
         return !isNaN(item);
    });

    return answerStr.join('');
}

makeNumber('ijifjgdj');
