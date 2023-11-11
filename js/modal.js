export const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        this.wrapper.classList.add('open');
    },
    close() {
        this.wrapper.classList.remove('open');
    }
}

window.addEventListener('keydown', handleKeydeown);


function handleKeydeown(event) {

    if (event.key === 'Escape') {
        Modal.close();
    }
}
