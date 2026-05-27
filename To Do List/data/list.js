import { renderSummaryList } from "../js/ToDoList/summaryList.js";

export let list = JSON.parse(localStorage.getItem('List')) || [];

export function saveList(){
    localStorage.setItem('List', JSON.stringify(list));
}

export function addToDoList(inputElement){
    const taskText = inputElement.value.trim();
    
    if(!taskText){
        alert('Please add a new task.');
        inputElement.focus();
        return;
    }

    // Check for duplicate tasks: true or false
    const isDuplicate = list.some(
        task => (task.taskText || '').toLowerCase() === taskText.toLowerCase()
    )

    if(isDuplicate){
        alert('Task already exists.');
        inputElement.focus();
        return;
    }

    const todoObject = list.push({
        // Date.now() ginagamit para gumawa 
        // ng unique ID gamit ang current time in milliseconds.
        id: Date.now(),
        taskText,
        completed: false
    });

    saveList();
    inputElement.focus();
    inputElement.value = '';

    return todoObject;
}

export function saveTask(inputElement){
    const tasktext = inputElement.value.trim();

    if(!taskText){
        alert('Please add a new task.');
        inputElement.focus();
        return;
    }

    // Check for duplicate tasks: true or false
    const isDuplicate = list.some(
        task => task.taskText.toLowerCase() === taskText.toLowerCase()
    )

    

}

export function getListId(listId){
    let matchingItem;;
    list.forEach((listItem) =>{
        if(listId === listItem.id){
            matchingItem = listItem;
        }
    });
    return matchingItem;
}

export function getListTask(listId){
    let matchingItem;;
    list.forEach((listItem) =>{
        if(listId === listItem.id){
            matchingItem = listItem;
        }
    });
    return matchingItem.taskText;
}

export function checkIfEmpty(){
    if(list.length === 0){
        const isEmpty = document.querySelector('.js-to-do-list-items-empty');
        isEmpty.classList.add('js-isEmpty');
    }
    else{
        const isEmpty = document.querySelector('.js-to-do-list-items-empty');
        isEmpty.classList.remove('js-isEmpty');
    }
}

export function removeFromList(id){
    const newList = [];

    list.forEach((listItem) =>{
        if(listItem.id !== Number(id)){
            newList.push(listItem);
        }
    });
    list = newList;
    saveList();
}


export function updateTaskText(id, newTaskText){
    let matchingItem;

    list.forEach(listItem =>{
        if(Number(id) === Number(listItem.id)){
            matchingItem = listItem;
        }
    });
    matchingItem.taskText = newTaskText;
    saveList();
}