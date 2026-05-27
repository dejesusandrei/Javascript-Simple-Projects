import { renderSummaryList } from "./ToDoList/summaryList.js"; 
import { addToDoList, list, saveList, checkIfEmpty } from "../data/list.js";
import { addedMessage } from "./controls/toast.js";
import { renderToggleCheckBox } from "./controls/checkBox.js";

renderSummaryList();
checkIfEmpty();

document.body.addEventListener('keydown', (event) =>{
    if(event.key === 'Enter'){
        addBtn();
    }
});

const addButton = document.querySelector('.js-add-btn');
addButton.addEventListener('click', () =>{
    addBtn();
});

function addBtn(){
    const inputElement = document.querySelector('.js-to-do-input');

    const newItem = addToDoList(inputElement);
    renderSummaryList();
    checkIfEmpty();
    addedMessage(newItem.id);
}
