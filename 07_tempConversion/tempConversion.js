const convertToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    let rounded;

    if (celsius % 1 === 0) {
      rounded = Math.ceil(celsius);
    } else {
      rounded = Number(celsius.toFixed(1));
    }
    
    return rounded;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  let rounded;

  if (fahrenheit % 1 === 0) {
    rounded = Math.ceil(fahrenheit)
  } else {
    rounded = Number(fahrenheit.toFixed(1))
  }

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
