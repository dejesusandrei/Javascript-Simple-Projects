import { saveList, list } from "../../data/list.js";

export function renderToggleCheckBox(){
    // Toggle checkbox
    const checkboxes = document.querySelectorAll(`.js-checkbox`);
    checkboxes.forEach((checkbox) =>{
        checkbox.addEventListener('change', () =>{
            const { listInputId } = checkbox.dataset;

            const text = document.querySelector(`.js-to-do-list-text-${listInputId}`);
            text.classList.toggle('js-completed', checkbox.checked);

            const editBtn = document.querySelector(`.js-edit-btn-${listInputId}`);
            editBtn.disabled = checkbox.checked;
            editBtn.classList.toggle('js-completed-btn', checkbox.checked);
        });
    });
}