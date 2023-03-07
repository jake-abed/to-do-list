'use strict';

const CONTENT = document.querySelector('#content');

const birdUp = () => {
    return console.log('Bird up!');
}

const createHeader = () => {
    const HEADER = document.createElement('header');
    const H1 = document.createElement('h1');

    H1.innerText = 'Basilisk To-Do';
    HEADER.appendChild(H1);
    return CONTENT.appendChild(HEADER);
}

const createAppBar = () => {
    const APP_BAR = document.createElement('nav');
    const PROJECTS = document.createElement('div');
    const ALL_TASKS = document.createElement('div');
    const SETTINGS = document.createElement('div');

    APP_BAR.classList.add('app-bar');
    PROJECTS.classList.add('projects');
    PROJECTS.innerText = 'Projects';
    ALL_TASKS.classList.add('all-tasks');
    ALL_TASKS.innerText = 'All Tasks';
    SETTINGS.classList.add('settings');
    SETTINGS.innerText = 'Settings';

    APP_BAR.appendChild(PROJECTS);
    APP_BAR.appendChild(ALL_TASKS);
    APP_BAR.appendChild(SETTINGS);

    return CONTENT.appendChild(APP_BAR);
}

export {
    createHeader,
    createAppBar
}