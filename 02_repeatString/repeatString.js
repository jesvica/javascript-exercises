const repeatString = function(string,num) {
    let sentence = '';
    if (num < 0) {
        return 'ERROR'
    } else {
    for (let i = 0; i < num; i++) {
        sentence += string;
    }
    return sentence;
}
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
