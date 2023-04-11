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
DOM.createToDoDiv(allToDos[0], document.querySelector('section'));
DOM.createToDoDiv(allToDos[1], document.querySelector('section'));
