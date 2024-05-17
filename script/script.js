window.addEventListener("load", function() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var temperatureForm = document.getElementById('temperatureForm');

    // Function to convert Celsius to Fahrenheit
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

    // Function to convert Fahrenheit to Celsius
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    // Function to update Fahrenheit input when Celsius input changes
    function updateFahrenheit() {
        var celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            var fahrenheit = celsiusToFahrenheit(celsius);
            fahrenheitInput.value = fahrenheit.toFixed(2);
        } else {
            fahrenheitInput.value = ''; // Clear Fahrenheit input if Celsius input is invalid
        }
    }

    // Function to update Celsius input when Fahrenheit input changes
    function updateCelsius() {
        var fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            var celsius = fahrenheitToCelsius(fahrenheit);
            celsiusInput.value = celsius.toFixed(2);
        } else {
            celsiusInput.value = ''; // Clear Celsius input if Fahrenheit input is invalid
        }
    }

    // Event listener for Celsius input
    celsiusInput.addEventListener('input', updateFahrenheit);

    // Event listener for Fahrenheit input
    fahrenheitInput.addEventListener('input', updateCelsius);

    // Prevent form submission
    temperatureForm.addEventListener('submit', function(event) {
        event.preventDefault();
    });
});
