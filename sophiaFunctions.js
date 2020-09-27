function convertToFHandler() {
    var celsius = document.getElementById("celsius").value
    var fahrenheit = convertToF(celsius);
    var answer = "Fahrenheit: " + fahrenheit
    document.getElementById("celsius-answer").innerHTML = answer;
}

function convertToF(celsius) {
    console.log(celsius);
    return celsius * 9 / 5 + 32;
}

function factorializeHandler() {
    var integer = document.getElementById("factorial").value
    var factorializedNumber = factorialize(integer);
    var answer = integer + "!: " + factorializedNumber;
    document.getElementById("factorial-answer").innerHTML = answer;
}

function factorialize(integer) {
    var answer = 1;
    for (var i = 1; i <= integer; i++) {
        answer = answer * i;
    }
    return answer;
}
