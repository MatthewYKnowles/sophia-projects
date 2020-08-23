function convertToFHandler() {
    var celsius = document.getElementById("celsius").value
    var fahrenheit = convertToF(celsius);
    document.getElementById("anwser").innerHTML = fahrenheit
}

function convertToF(celsius) {
    var fahrenheit = celsius * 9 / 5 + 32;
    console.log(fahrenheit);
    return fahrenheit;
}