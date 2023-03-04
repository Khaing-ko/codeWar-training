function openOrSenior(data) {
    let output = data.map(x => x
        .reduce((age, handicap) => {
            if (handicap >= -2 && handicap <= 26){
                return age >= 55 && handicap >= 7 ? 'Senior' : 'Open'
            }                
        }));
    return output;
}
data = [[45, 12],[55,21],[19, -2],[104, 20]]
console.log(openOrSenior(data));