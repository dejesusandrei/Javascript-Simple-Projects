import { list, addToDoList, saveList, checkIfEmpty, removeFromList, updateTaskText, getListId, getListTask } from "../../data/list.js";
import { renderToggleCheckBox } from "../controls/checkBox.js";
import { deletedMessage, editedMessage } from "../controls/toast.js";


export function renderSummaryList(){
    let todoListHTML = '';
    list.forEach((listItem) =>{
        const { id, taskText } = listItem;

        if(!id && !taskText) return;

        todoListHTML += 
        `
        <div class="to-do-list-item js-to-do-list-item-${id}">
            <input class="checkbox js-checkbox" type="checkbox"
            data-list-input-id="${id}"
            ${listItem.completed ? 'checked' : ''}>
            <span class="to-do-list-text js-to-do-list-text js-to-do-list-text-${id}">${taskText}</span>
            <div class="to-do-list-buttons">
                <button class="btn js-edit-btn js-edit-btn-${id}"
                data-list-id="${id}">Edit
                </button>
                <button class="btn js-delete-btn" 
                data-list-id="${id}">Delete
                </button>
            </div>
        </div>
        `;
    });
    document.querySelector('.to-do-list-items').innerHTML = todoListHTML;

    // To be able to click all delete buttons, 
    // we need to use querySelectorAll and loop through each button to add event listener.
    document.querySelectorAll('.js-delete-btn')
        .forEach((deleteBtn) =>{
            deleteBtn.addEventListener('click', () =>{
                const listId = Number(deleteBtn.dataset.listId);
                removeFromList(listId);

                const container = document.querySelector(`.js-to-do-list-item-${listId}`).remove();

                checkIfEmpty();
                deletedMessage(listId);

                renderToggleCheckBox();
                console.log(list);
            });
        });

    const editButton = document.querySelectorAll('.js-edit-btn');
    editButton.forEach(editBtn =>{
        editBtn.addEventListener('click', () =>{
            const listId = Number(editBtn.dataset.listId);

            openEditModal(listId);
            saveTask();
        });
    });
    
    function openEditModal(id){
        const listItem = list.find(item => item.id === id);
        
        const innerModalHTML = `
        <div class="inner-modal">
            <h2>Editing Task...</h2>
                <div class="edit-task">
                <input class="todo-input js-to-do-input-modal" type="text"
                value="${listItem.taskText}">
                <button class="save-btn js-save-btn"
                data-list-id="${id}">Save</button>
            </div>
        </div>
        `;
        document.querySelector('.js-modal').innerHTML = innerModalHTML;

        const mainContainer = document.getElementById('main-container');
        mainContainer.classList.add('js-main-opacity');
    
        const modalContainer = document.getElementById('modal');
        modalContainer.classList.add('js-show-modal');
    }

    function saveTask(){
        document.querySelector('.js-save-btn')
        .addEventListener('click', (e) =>{
            // To select a one button data attribute
            const listId = Number(e.currentTarget.dataset.listId);
            const newtaskText = document.querySelector('.js-to-do-input-modal').value;

            closeModal();
            updateTaskText(listId, newtaskText);
            renderSummaryList();
            editedMessage(listId);
        });
    }

    function closeModal(){
        const mainContainer = document.getElementById('main-container');
        mainContainer.classList.remove('js-main-opacity');
    
        const modalContainer = document.getElementById('modal');
        modalContainer.classList.remove('js-show-modal');
    }


    renderToggleCheckBox();
}