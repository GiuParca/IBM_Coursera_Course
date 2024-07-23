function performOperation(){
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);

    if(!isNaN(num1) && !isNaN(num2)){
        let result = operations(num1, num2);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function operations(num1,num2){
    debugger;
    let sum = addition(num1,num2);
    let multi = multiplication(num1,num2);
    let divide = division(num1,num2);

    return{
        addition: sum,
        multiplication: multi,
        division: divide
    }
}

function displayResult(result){
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `The addition is: ${result.addition} <br> The multiplication is: ${result.multiplication}<br> The division is: ${result.division}`;
}

function addition(num1, num2){
    return num1 + num2;
}

function multiplication(num1, num2){
    return num1 * num2;
}

function division(num1, num2){
    return num1/num2;
}