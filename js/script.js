import { calculateIMC, notANumber } from './utils.js';
import { Modal } from './modal.js';
import { AlertError } from './alert_error.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weitghtOrheightIsNotANumber = notANumber(weight) || notANumber(height);

    if (weitghtOrheightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculateIMC(weight, height);

    displayResultMessage(result);
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

Modal.buttonClose.onclick = () => Modal.close();




