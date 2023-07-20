'use strict';

import { isJson } from './utils';

//Build To-Do Factory

const createToDo = (title, desc, dueDate, priority, completed, uuid = crypto.randomUUID()) => {
    dueDate = new Date(dueDate);

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

    function changeCompletion() {
        return this.completed = !this.completed;
    }

    function changeTitle(newTitle) {
        return this.title = newTitle;
    }

    return {
        uuid,
        title,
        desc,
        completed,
        dueDate,
        priority,
        setPriority,
        changeCompletion,
        changeTitle
    }
}

const importAllToDos = (toDoJsonFile) => {
    const ingestedToDos = isJson(toDoJsonFile) ?
        JSON.parse(toDoJsonFile) : toDoJsonFile;
    return ingestedToDos[0]['all'].map((toDo) => createToDo(toDo.title, toDo.desc, toDo.dueDate,toDo.priority, toDo.completed, toDo.uuid));
}

const generateToDoMap = (toDoList, mapKey) => {
    const toDoMap = new Map();
    for (const toDo of toDoList) {
        toDoMap.set(toDo[mapKey], toDo);
    }
    return toDoMap;
}

export {
    createToDo,
    importAllToDos,
    generateToDoMap
}
