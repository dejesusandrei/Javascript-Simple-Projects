export function addedMessage(id) {
    const toastContainer = document.querySelector('.toast-container');

    const toast = document.createElement('div');
    toast.classList.add('toast-add', `js-toast-add-${id}`);

    toast.innerHTML = `
        <img src="images/check.svg" alt="Check icon">
        <p>Task Added</p>
    `;

    toastContainer.appendChild(toast);

    // show toast
    setTimeout(() => {
        toast.classList.add('js-added');
    }, 10);

    // auto hide
    setTimeout(() => {
        toast.classList.remove('js-added');

        setTimeout(() => {
            toast.remove();
        }, 300); // wait for animation
    }, 2000);
}

export function deletedMessage(id) {
    const toastContainer = document.querySelector('.toast-container');

    const toast = document.createElement('div');
    toast.classList.add('toast-delete', `js-toast-delete-${id}`);

    toast.innerHTML = `
        <img src="images/xmark.svg" alt="Xmark icon">
        <p>Task Deleted</p>
    `;

    toastContainer.appendChild(toast);

    // show toast
    setTimeout(() => {
        toast.classList.add('js-deleted');
    }, 10);

    // auto hide
    setTimeout(() => {
        toast.classList.remove('js-deleted');

        setTimeout(() => {
            toast.remove();
        }, 300); // wait for animation
    }, 2000);
}

export function editedMessage(id) {
    const toastContainer = document.querySelector('.toast-container');

    const toast = document.createElement('div');
    toast.classList.add('toast-edit', `js-toast-edit-${id}`);

    toast.innerHTML = `
        <img src="images/edit.svg" alt="Edit icon">
        <p>Task Edited</p>
    `;

    toastContainer.appendChild(toast);

    // show toast
    setTimeout(() => {
        toast.classList.add('js-edited');
    }, 10);

    // auto hide
    setTimeout(() => {
        toast.classList.remove('js-edited');

        setTimeout(() => {
            toast.remove();
        }, 300); // wait for animation
    }, 2000);
}


