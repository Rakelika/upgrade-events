'use strict';

//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

document.getElementById('btnToClick').addEventListener('click', clickButton);

function clickButton(event) {
    console.log(event);
 }


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

document.querySelector('.focus').addEventListener('focus', focusInput);

function focusInput(event){
    let focusValue = event.target.value;
    console.log(focusValue);
}


//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let valueInputs = document.querySelectorAll('input[type="text"]');

for (let value of valueInputs){
    value.addEventListener('change', value);
}

function value(event) {
    let inputText = event.target.value;
    console.log(inputText);
}