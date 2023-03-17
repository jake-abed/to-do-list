'use strict';

//Build To-Do Factory

const toDo = (title, desc, dueDate, priority, uuid = crypto.randomUUID()) => {

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

const testDo = toDo('Wash Dishes', 'Wash all the dishes in the sink.', '03/20/2023', 'high');

//function to map imported data

const importAllToDos = (toDoJsonFile) => {
    const ingestedToDos = JSON.parse(toDoJsonFile);
    return ingestedToDos.map((toDo) => toDo(toDo.title, toDo.desc, toDo.dueDate,toDo.priority, toDo.uuid));
}