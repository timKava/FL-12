function getMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
}

getMin(13, 0, -93);
