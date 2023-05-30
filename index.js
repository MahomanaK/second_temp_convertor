// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahren = (celsius * 9) / 5 + 32;
    return fahren +"F";
  }

  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    let cel = ((fahrenheit - 32) * 5) / 9;
    return cel + "C";
  }

  // Prompt the user for input
  let temperature = parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (CelsiustoFahrenheit or FahrenheittoCelsius)");


  if (conversionType === "CelsiustoFahrenheit") {
   alert(celsiusToFahrenheit(temperature))

  } else if (conversionType === "FahrenheittoCelsius") {
    alert(fahrenheitToCelsius(temperature))

  } else {
    alert("Invalid conversion type.");
  }