const searchFilter = document.getElementById('search');

searchFilter.addEventListener('keyup', filterName);

function filterName(e){
    let keyword = searchFilter.value.toLowerCase();
    
    let ul = document.getElementById('names');
    let li = document.querySelectorAll('.collection-item');

    li.forEach(listItem =>{
        const text = listItem.textContent;
        if(text.toLowerCase().includes(keyword)){
            // Mas safe compared sa block
            // Binabalik lang sa orig css
            listItem.style.display = '';
        } else {
            listItem.style.display = "none";
        }
    });
}