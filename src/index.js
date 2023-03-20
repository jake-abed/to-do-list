'use strict';

import './style/global.css';
import toDoData from './data/todos.json';

import * as DOM from './domController';
import * as toDo from './toDos';

console.log(toDoData);

const allToDos = toDo.importAllToDos(toDoData);
const toDoMap = toDo.generateToDoMap(allToDos, 'uuid');

console.log(toDoMap.get(toDoData[0].uuid));

DOM.createHeader();
DOM.createMainContent();
DOM.createAppBar();
DOM.createToDo(allToDos[0], document.querySelector('section'));
DOM.createToDo(allToDos[1], document.querySelector('section'));
