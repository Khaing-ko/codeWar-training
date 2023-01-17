function digitalRoot(n) {
    var result = Array.from(n.toString()).map(Number).reduce((pre_num, next_num) => pre_num + next_num);
    if(result >= 10){
        return digitalRoot(result);        
    }else{
        return result;
    }

}
console.log(digitalRoot(132189));