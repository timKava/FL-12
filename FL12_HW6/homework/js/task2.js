let a, b, c;

a = parseInt(prompt('Enter first side of triangle: ', ''));
b = parseInt(prompt('Enter first side of triangle: ', ''));
c = parseInt(prompt('Enter first side of triangle: ', ''));

if (isNaN(a) || isNaN(b) || isNaN(c)){
    alert('input values should be ONLY numbers ');
} else if (a === 0 || b === 0 || c === 0){
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b <= c || a + c <= b || b + c <= a){
    alert('Triangle doesn’t exist');
} else if (a === b && a === c){
    console.log('Equilateral triangle');
} else if (a === b && a !== c || a === c && a !== b || b === c && b !== a) {
    console.log('Isosceles triangle');
} else {
    console.log('Scalene triangle');
}
