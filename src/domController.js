'use strict';

const CONTENT = document.querySelector('#content');

const birdUp = () => {
    return console.log('Bird up!');
}

const createBirdUpButton = () => {
    const BUTTON = document.createElement('button');
    BUTTON.addEventListener('click', birdUp);
    BUTTON.setAttribute('value', 'Bird Up!');
    BUTTON.innerText = 'Bird up!';

    return CONTENT.append(BUTTON);
}

export {
    createBirdUpButton
}