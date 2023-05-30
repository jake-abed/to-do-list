'use strict';

import Check from './images/check-square.svg';
import Settings from './images/settings.svg';
import Table from './images/table.svg'
import { format } from 'date-fns';

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

const createToDoDiv = (toDo, targetContainer) => {
    const toDoWrapper = document.createElement('div');
    const statusLabel = document.createElement('label');
    const status = document.createElement('input');
    const title = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('div');

    toDoWrapper.classList.add('to-do');
    toDoWrapper.setAttribute('id', toDo.uuid);
    if (toDo.completed) toDoWrapper.classList.add('completed');
    status.classList.add('status');
    status.setAttribute('type', 'checkbox');
    status.setAttribute('id', toDo.uuid + 'status');
    if (toDo.completed) status.setAttribute('checked', true);
    title.classList.add('title');
    title.innerText = toDo.title;
    description.classList.add('description');
    description.innerText = toDo.desc;
    dueDate.classList.add('due-date');
    dueDate.innerText = format(toDo.dueDate, 'MM/dd/yyyy');
    priority.classList.add('priority');
    priority.innerText = toDo.priority;

    toDoWrapper.appendChild(status);
    toDoWrapper.appendChild(title);
    toDoWrapper.appendChild(description);
    toDoWrapper.appendChild(dueDate);
    toDoWrapper.appendChild(priority);

    return targetContainer.appendChild(toDoWrapper);
}

const createInput = (type, id) => {
    const INPUT = document.createElement('input');
    INPUT.setAttribute('id', id);
    INPUT.setAttribute('type', type);
    INPUT.setAttribute('name', id);
    return INPUT;
}

const createTextArea = (id) => {
    const TEXTAREA = document.createElement('textarea');
    TEXTAREA.setAttribute('id', id);
    TEXTAREA.setAttribute('name', id);
    return TEXTAREA;
}

const createSelect = (id, values) => {
    const SELECT = document.createElement('select');
    SELECT.setAttribute('id', id);
    SELECT.setAttribute('name', id);
    for (const value of values) {
        const OPTION = document.createElement('option');
        OPTION.setAttribute('name', value);
        OPTION.innerText = value.replace(value[0], value[0].toUpperCase());
        SELECT.appendChild(OPTION);
    };
    return SELECT;
}

const createLabel = (id, text) => {
    const LABEL = document.createElement('label');
    LABEL.setAttribute('for', id);
    LABEL.innerText = text;
    return LABEL;
}

const toDoForm = (toDoData = null) => {
    const FORM = document.createElement('form');
    const titleLabel = createLabel('title', 'Task Name');
    const title = createInput('text', 'title');
    const descLabel = createLabel('description', 'Description');
    const desc = createTextArea('description');
    const dueDateLabel = createLabel('due-date', 'Due Date');
    const dueDate = createInput('date', 'due-date');
    const priorityLabel = createLabel('priority', 'Priority?');
    const priority = createSelect('priority', ['low', 'normal', 'high']);
    const submit = document.createElement('div');
    submit.classList.add('submit', 'button');
    submit.setAttribute('id', 'toDoSubmit');
    submit.innerText = 'Create To-Do';

    FORM.appendChild(titleLabel);
    FORM.appendChild(title);
    FORM.appendChild(descLabel);
    FORM.appendChild(desc);
    FORM.appendChild(dueDateLabel);
    FORM.appendChild(dueDate);
    FORM.appendChild(priorityLabel);
    FORM.appendChild(priority);
    FORM.appendChild(submit);

    return FORM;
}

const swapToDoModal = () => {
    const modal = document.querySelector('.form-background');
    (modal.style.display === 'none') ? modal.style.display = 'block' : modal.style.display = 'none';
    return
}

const createToDoModal = () => {
    const SCREEN = document.createElement('div');
    const MODAL = document.createElement('div');
    const H2 = document.createElement('h2');
    const FORM = toDoForm();

    SCREEN.classList.add('form-background');
    MODAL.classList.add('modal');
    H2.innerText = 'Create To-Do';

    MODAL.appendChild(H2);
    MODAL.appendChild(FORM);
    SCREEN.appendChild(MODAL);
    SCREEN.style.display = 'none';
    SCREEN.addEventListener('click', swapToDoModal);
    MODAL.addEventListener('click', (e) => {
        e.stopPropagation();
    })
    return document.querySelector('body').appendChild(SCREEN);
}
    
/* in progress
const editToDoModal = (toDo) => {

}
*/

const addToDoButton = (targetContainer) => {
    const BUTTON = document.createElement('div');
    BUTTON.classList.add('create-to-do');
    BUTTON.classList.add('button');
    BUTTON.innerText = 'Add To-Do'

    BUTTON.addEventListener('click', () => swapToDoModal());

    return targetContainer.appendChild(BUTTON);
}

const validateToDoFields = () => {
    let title = document.querySelector('#title');
    let desc = document.querySelector('#description');
    let dueDate = document.querySelector('#due-date');
    let priority = document.querySelector('#priority');

    if (!title || !desc || !dueDate || !priority) return false;
    if (title.value === '') return false;
    if (!dueDate.value) return false;
    else return true;
}

const clearAddToDoModal = () => {
    let title = document.querySelector('#title');
    let desc = document.querySelector('#description');
    let dueDate = document.querySelector('#due-date');
    let priority = document.querySelector('#priority');

    title.value = '';
    desc.value = '';
    dueDate.value = null;
    priority.value = 'Low';

    console.log(title);
    return console.log('Modal reset');
}

export {
    createHeader,
    createMainContent,
    createAppBar,
    createToDoDiv,
    createToDoModal,
    addToDoButton,
    swapToDoModal,
    validateToDoFields,
    clearAddToDoModal
}
