'use strict';

import { isJson } from './utils';

//Build To-Do Factory

const createToDo = (title, desc, dueDate, priority, uuid = crypto.randomUUID()) => {

    function setPriority(level) {
        switch (level.toLowerCase()) {
            case 'high':
                this.priority = level.toLowerCase();
                break;
            case 'normal':
                this.priority = level.toLowerCase();
                break;
            case 'low':
                this.priority = level.toLowerCase();
                break;
            default:
                console.error('Invalid priority level.');
                break;
        }
        return console.log(`${this.title} priority is now ${this.priority}.`)
    }

    function changeTitle(newTitle) {
        return this.title = newTitle;
    }

    return {
        uuid,
        title,
        desc,
        dueDate,
        priority,
        setPriority,
        changeTitle
    }
}

const importAllToDos = (toDoJsonFile) => {
    const ingestedToDos = isJson(toDoJsonFile) ?
        JSON.parse(toDoJsonFile) : toDoJsonFile;
    return ingestedToDos.map((toDo) => createToDo(toDo.title, toDo.desc, toDo.dueDate,toDo.priority, toDo.uuid));
}

const generateToDoMap = (toDoList, mapKey) => {
    const toDoMap = new Map();
    for (const toDo of toDoList) {
        toDoMap.set(toDo[mapKey], toDo);
    }
    return toDoMap;
}

export {
    importAllToDos,
    generateToDoMap
}
