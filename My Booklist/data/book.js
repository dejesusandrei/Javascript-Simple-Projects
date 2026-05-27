export let book = JSON.parse(localStorage.getItem('Book')) || [];

export function saveBookLocalStorage(){
    localStorage.setItem('Book', JSON.stringify(book));
}

export function removeFromBookList(id){
    let newArr = [];
    book.forEach((bookItem) =>{
        if(bookItem.id !== Number(id)){
            newArr.push(bookItem);            
        }
    });
    book = newArr;
    saveBookLocalStorage();
}

export function isBookEmpty(){  
    if(book.length === 0){
        const emptyContainer = document.querySelector('.empty-container');
        emptyContainer.classList.add('is-empty');
    }
    else{
        const emptyContainer = document.querySelector('.empty-container');
        emptyContainer.classList.remove('is-empty');
    }
}

export function updateBookList(id, title, author, isbn){
    let matchingItem;
    book.forEach((bookItem) =>{
        if(bookItem.id === Number(id)){
            matchingItem = bookItem;
        }
    });
    matchingItem.title = title;
    matchingItem.author = author;
    matchingItem.isbn = isbn;
    saveBookLocalStorage();
}