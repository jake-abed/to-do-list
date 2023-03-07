'use strict';

//Build To-Do Factory

const toDo = (uuid = crypto.randomUUID(), title, desc, dueDate, priority) => {

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
        title,
        desc,
        dueDate,
        priority,
        setPriority,
        setUUID,
        changeTitle
    }
}

//function to map imported data