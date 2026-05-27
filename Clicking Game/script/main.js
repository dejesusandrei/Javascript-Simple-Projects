const timerCount = document.querySelector('.js-timer');

const tenButton = document.querySelector('.ten');
const twentyButton = document.querySelector('.twenty');
const thirtyButton = document.querySelector('.thirty');

const clickMeButton = document.querySelector('.js-click-me');
const clickCount = document.querySelector('.js-click-count');

const closeButton = document.querySelector('.js-close-btn');
const closeValidationButton = document.querySelector('.js-close-valid-btn');

const scoreText = document.querySelector('.js-score');
const finalResult = document.querySelector('.result');
const container = document.querySelector('.container');

const validationForm = document.querySelector('.validation');

let time;
let score = 0;
let intervalId;
let gameStarted = false;



// Click Me Btn
clickMeButton.addEventListener('click', () =>{
    if(!gameStarted){
        container.classList.add('opacity-container');
        validationForm.classList.add('show-validation');
        return;
    }
    score++;
    clickCount.textContent = `${score}`;
    scoreText.textContent = score;
});

// Close Btn
closeButton.addEventListener('click', () =>{
    container.classList.remove('opacity-container');
    finalResult.classList.remove('show-result');

    clickMeButton.disabled = false;

    // reset count 
    score = 0;
    clickCount.textContent = `${score}`;

    gameStarted = false;
});

// Validation Close btn
closeValidationButton.addEventListener('click', () =>{
    container.classList.remove('opacity-container'); 
    validationForm.classList.remove('show-validation');

    clickMeButton.disabled = false;
    gameStarted = false;
});

// 10s Btn
tenButton.addEventListener('click', () =>{
    clearInterval(intervalId);

    gameStarted = true;

    score = 0;
    clickCount.textContent = `${score}`;

    // disabled the other timer button
    tenButton.disabled = true;
    twentyButton.disabled = true;
    thirtyButton.disabled = true;

    // on the click me
    clickMeButton.disabled = false;

    time = 11;
    
    intervalId = setInterval(() =>{
        time--;
        timerCount.textContent = `${time}`;

        if(time === 0){
            clearInterval(intervalId);

            clickMeButton.disabled = true;

            tenButton.disabled = false;
            twentyButton.disabled = false;
            thirtyButton.disabled = false;

            container.classList.add('opacity-container');
            finalResult.classList.add('show-result');
        }
    }, 1000);
});

// 20s Btn
twentyButton.addEventListener('click', () =>{
    clearInterval(intervalId);

    gameStarted = true;

    score = 0;
    clickCount.textContent = `${score}`;

    // disabled the other timer button
    tenButton.disabled = true;
    twentyButton.disabled = true;
    thirtyButton.disabled = true;

    // on the click me
    clickMeButton.disabled = false;

    time = 21;
    
    intervalId = setInterval(() =>{
        time--;
        timerCount.textContent = `${time}`;

        if(time === 0){
            clearInterval(intervalId);
            
            clickMeButton.disabled = true;

            tenButton.disabled = false;
            twentyButton.disabled = false;
            thirtyButton.disabled = false;

            container.classList.add('opacity-container');
            finalResult.classList.add('show-result');
        }
    }, 1000);
});

// 30s Btn
thirtyButton.addEventListener('click', () =>{
    clearInterval(intervalId);

    gameStarted = true;

    score = 0;
    clickCount.textContent = `${score}`;

    // disabled the other timer button
    tenButton.disabled = true;
    twentyButton.disabled = true;
    thirtyButton.disabled = true;

    // on the click me
    clickMeButton.disabled = false;

    time = 31;
    
    intervalId = setInterval(() =>{
        time--;
        timerCount.textContent = `${time}`;

        if(time === 0){
            clearInterval(intervalId);
            
            clickMeButton.disabled = true;

            tenButton.disabled = false;
            twentyButton.disabled = false;
            thirtyButton.disabled = false;

            container.classList.add('opacity-container');
            finalResult.classList.add('show-result');
        }
    }, 1000);
});