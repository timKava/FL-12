const FOUR = 4, HUNDRED= 100;

function isLeapYear(value){
    let year = new Date(value).getFullYear();

    if (isNaN(year)) {
        return 'Invalid Date';
    } else {
        if (year % FOUR === 0 && year % HUNDRED !== 0 || year % (FOUR * HUNDRED) === 0) {
            return year + ' is a leap year';
        } else {
            return year + ' is not a leap year';
        }
    }

}

isLeapYear('2020-01-15 13:00:00');
