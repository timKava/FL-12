function beCool(str) {
    return str + ' is cool';
}
function beSmart(str){
    return str + ' is smart';
}


function pipe(num, ...args) {
    num = arguments[0];
    for (let i = 0; i < args.length; i++){
        num = args[i](num);
    }
    return num;
}

pipe('Tim', beCool);
pipe('Emily', beSmart);
