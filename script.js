keys = document.querySelector('.keys');
buttons = document.querySelectorAll('button');
input = document.querySelector('p');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        console.log(button.value);

        input.appendChild(document.createTextNode(button.value));
    })
})


console.log('hello');