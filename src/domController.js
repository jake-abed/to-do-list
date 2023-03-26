'use strict';

import Check from './images/check-square.svg';
import Settings from './images/settings.svg';
import Table from './images/table.svg'

const CONTENT = document.querySelector('#content');

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
    const projectsIcon = new Image();
    projectsIcon.src = Table;
    const allTasksIcon = new Image();
    allTasksIcon.src = Check;
    const settingsIcon = new Image();
    settingsIcon.src = Settings;


    APP_BAR.classList.add('app-bar');
    PROJECTS.classList.add('projects');
    PROJECTS.appendChild(projectsIcon);
    ALL_TASKS.classList.add('all-tasks');
    ALL_TASKS.appendChild(allTasksIcon);
    SETTINGS.classList.add('settings');
    SETTINGS.appendChild(settingsIcon);

    APP_BAR.appendChild(PROJECTS);
    APP_BAR.appendChild(ALL_TASKS);
    APP_BAR.appendChild(SETTINGS);

    return CONTENT.appendChild(APP_BAR);
}

const createMainContent = () => {
    const SECTION = document.createElement('section');
    
    SECTION.classList.add('main-content');

    return CONTENT.appendChild(SECTION);``
}

const createToDo = (toDo, targetContainer) => {
    const toDoWrapper = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('div');

    toDoWrapper.classList.add('to-do');
    toDoWrapper.setAttribute('id', toDo.uuid);
    title.classList.add('title');
    title.innerText = toDo.title;
    description.classList.add('description');
    description.innerText = toDo.desc;
    dueDate.classList.add('due-date');
    dueDate.innerText = toDo.dueDate;
    priority.classList.add('priority');
    priority.innerText = toDo.priority;

    toDoWrapper.appendChild(title);
    toDoWrapper.appendChild(description);
    toDoWrapper.appendChild(dueDate);
    toDoWrapper.appendChild(priority);

    return targetContainer.appendChild(toDoWrapper);
}

export {
    createHeader,
    createMainContent,
    createAppBar,
    createToDo
}
