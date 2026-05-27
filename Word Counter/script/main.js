const textArea = document.querySelector('.js-text-area');
const wordCount = document.querySelector('.js-word');
const characterCount = document.querySelector('.js-char');
const numberCount = document.querySelector('.js-num');
const symbolCount = document.querySelector('.js-sym');

textArea.addEventListener('input', () =>{
    const text = textArea.value;

    // Split ex: ["Hello", "world", "JavaScript"]
    // lenght is 3
    let words = text.trim() === '' ? 0 : text.split(/\s+/).length;

    // Count the characters
    let characters = text.length;

    // Count the numbers
    let textNumbers = text.match(/[0-9]/g);
    let numbers = textNumbers ? textNumbers.length : 0;

    // Count the symbols
    let textSymbols = text.match(/[^a-zA-Z0-9\s]/g);
    let symbols = textSymbols ? textSymbols.length : 0;


    wordCount.textContent = words;
    characterCount.textContent = characters;
    numberCount.innerHTML = numbers;
    symbolCount.textContent = symbols;
})