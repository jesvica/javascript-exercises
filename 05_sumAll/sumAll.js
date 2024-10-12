const sumAll = function(start, end) {
    let finalSum = 0;

    if (start <= 0 || end <= 0 || typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR"
    } else if (start < end) {
        for (let counter = start; counter <= end; counter++) {
            finalSum += counter;
        }
    } else if (end < start) {
        for (let counter = end; counter <= start; counter++) {
            finalSum += counter;
        }
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
