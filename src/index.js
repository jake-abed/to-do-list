'use strict';

import './style/global.css';
import toDoData from './data/todos.json';

import * as DOM from './domController';
import * as toDo from './toDos';

console.log(toDoData);

const allToDos = toDo.importAllToDos(toDoData);
const toDoMap = toDo.generateToDoMap(allToDos, 'uuid');

console.log(toDoMap.get(allToDos[0].uuid));

allToDos[0].changeCompletion();

console.log(allToDos[0]);

DOM.createHeader();
DOM.createMainContent();
DOM.createAppBar();
for (const toDo of allToDos){
    DOM.createToDoDiv(toDo, document.querySelector('.todos-wrapper'));
}
DOM.addToDoButton(document.querySelector('section'));
DOM.createToDoModal();

const toDoSubmit = document.querySelector('#toDoSubmit');
toDoSubmit.addEventListener('click', () => {
    if (DOM.validateToDoFields()) {
        let title = document.querySelector('#title').value;
        let desc = document.querySelector('#description').value;
        let dueDate = document.querySelector('#due-date').value;
        let priority = document.querySelector('#priority').value;
        allToDos.push(toDo.createToDo(title, desc, dueDate, priority));
        DOM.clearAddToDoModal();
        DOM.createToDoDiv(allToDos[allToDos.length - 1], document.querySelector('.todos-wrapper'));
        DOM.swapToDoModal();
    }
})
