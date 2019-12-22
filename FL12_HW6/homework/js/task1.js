let a, b, c, D, x1, x2;

a = +prompt('Write your first value: ', '');
b = +prompt('Write your second value: ', '');
c = +prompt('Write your third value: ', '');

D = Math.pow(b, 2) - 4 * a * c;

if (isNaN(a) || isNaN(b) || isNaN(c)){
    console.log('Invalid input data');
} else if (D < 0){
    console.log('no solution');
} else {
    x1 = Math.round((-b+Math.sqrt(D))/(2*a));
    x2 = Math.round((-b-Math.sqrt(D))/(2*a));

    if (D === 0) {
        console.log(`x = ${x1}`);
    } else {
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    }
}
