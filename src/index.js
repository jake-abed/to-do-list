'use strict';

import './style/global.css';
import toDoData from './data/todos.json';

import * as DOM from './domController';
import * as toDo from './toDos';

console.log(toDoData);

const allToDos = toDo.importAllToDos(toDoData);

DOM.createHeader();
DOM.createMainContent();
DOM.createAppBar();
