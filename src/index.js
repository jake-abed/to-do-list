'use strict';

import './style/global.css';
import toDoData from './data/todos.json';

import * as DOM from './domController';
import * as toDo from './toDos';

console.log(toDoData);

const allToDos = toDo.importAllToDos(toDoData);
const toDoMap = toDo.generateToDoMap(allToDos, 'uuid');

DOM.createHeader();
DOM.createMainContent();
DOM.createAppBar();
for (const [_key, value] of toDoMap){
    DOM.createToDoDiv(value, document.querySelector('.todos-wrapper'));
}
DOM.addToDoButton(document.querySelector('section'));
DOM.createToDoModal();

const toDoSubmit = document.querySelector('#toDoSubmit');
toDoSubmit.addEventListener('click', () => {
    if (DOM.validateToDoFields()) {
        const title = document.querySelector('#title').value;
        const desc = document.querySelector('#description').value;
        const dueDate = document.querySelector('#due-date').value;
        const priority = document.querySelector('#priority').value;
        const uuid = crypto.randomUUID();
        allToDos.push(toDo.createToDo(title, desc, dueDate, priority, uuid));
        DOM.clearAddToDoModal();r
        DOM.createToDoDiv(allToDos[allToDos.length - 1], document.querySelector('.todos-wrapper'));
        DOM.swapToDoModal();
    }
});