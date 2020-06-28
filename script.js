const keys = document.querySelector('.keys');
const buttons = document.querySelectorAll('button');
const display = document.querySelectorAll('p'); //index 0 = history, index 1 = input
let inputArray = [];
let historyArray = [];
let decimalActive = false;
operatorActive = false;

const updateDisplay =(location, updateText) => {
    if (location.firstChild){
        location.removeChild(location.firstChild)
    }
    location.appendChild(document.createTextNode(updateText))
}

const appendInput = (input) => {
    inputArray.push(input);
    historyArray.push(input);
}

const evaluate = () => {
    total = eval(inputArray.join(''));
    updateDisplay(display[0], historyArray.join(''));
    updateDisplay(display[1], total);
    inputArray = [total];
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        switch (button.value){
            case '+':
            case '-':
            case '*':
            case '/':
                 if(operatorActive){
                    evaluate();
                    appendInput(button.value);
                    updateDisplay(display[1], inputArray.join(''));
                 }
                 else{
                    appendInput(button.value);
                    updateDisplay(display[1], inputArray.join(''));
                    operatorActive = true;
                 }
                 decimalActive = false;
                 break;
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                appendInput(button.value);
                updateDisplay(display[1], inputArray.join(''));
                break;
            case ".":
                if(decimalActive){
                    break;
                }
                else{
                    appendInput(button.value);
                    updateDisplay(display[1], inputArray.join(''));
                    decimalActive = true;
                    break;
                }
            case '=':
                evaluate();
                break;
            case 'C':
                inputArray = []
                historyArray = []
                display[0].innerText = ""
                display[1].innerText = ""
                decimalActive = false;
                operatorActive = false;
                break;
        }
    })
})