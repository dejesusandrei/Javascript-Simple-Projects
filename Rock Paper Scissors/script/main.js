import { score, resetScore, saveScore, updateScore } from "./score.js";


document.body.addEventListener('keydown', (event) =>{
    if(event.key === 'a'){ autoPlaying(); }
    else if(event.key === 'r'){ userMove('Rock'); }
    else if(event.key === 'p'){ userMove('Paper'); }
    else if(event.key === 's'){ userMove('Scissors'); }
    else if(event.key === 'Backspace'){ resetScore(); updateScore(); }
    else{ console.log('No shortcut key'); }
});





document.querySelector('.js-btn-rock')
    .addEventListener('click', () =>{
        userMove('Rock');
    });
document.querySelector('.js-btn-paper')
    .addEventListener('click', () =>{
        userMove('Paper');
    });
document.querySelector('.js-btn-scissor')
    .addEventListener('click', () =>{
        userMove('Scissors');
    });
document.querySelector('.js-btn-reset')
    .addEventListener('click', () =>{
        resetScore();
        updateScore();
    });
document.querySelector('.js-btn-auto-play')
    .addEventListener('click', () =>{
        autoPlaying();
    });


let isPlaying = false;
let intervalId;

function autoPlaying(){
    if(!isPlaying){
        intervalId = setInterval(() =>{
            const playerMove = computerMove();
            userMove(playerMove);
        }, 1000);
        isPlaying = true;
        document.querySelector('.js-btn-auto-play').innerHTML = 'Stop Playing';
    }
    else{
        clearInterval(intervalId);
        isPlaying = false;
        document.querySelector('.js-btn-auto-play').innerHTML = 'Auto Play';
    }
}


function computerMove(){
    const randomNumber2 = Math.random();
    let compMove = '';

    if(randomNumber2 >= 0  && randomNumber2 < 1 /3){
        compMove = 'Rock';
    }else if(randomNumber2 >= 1 / 3 && randomNumber2 < 2 / 3){
        compMove = 'Paper';
    }else if(randomNumber2 >= 2 / 3 && randomNumber2 < 1){
        compMove = 'Scissors';
    }
    return compMove;
}

function userMove(yourMove){
    let result = '';
    let computer = computerMove();

    if(yourMove === 'Rock'){
        if(computer === 'Rock'){ result = 'Tie'; }
        else if(computer === 'Paper'){ result = 'Lose'; }
        else { result = 'Win'; }
    }
    else if (yourMove === 'Paper'){
        if(computer === 'Paper'){ result = 'Tie'; }
        else if(computer === 'Scissors'){ result = 'Lose'; }
        else { result = 'Win'; }
    }
    else if (yourMove === 'Scissors'){
        if(computer === 'Scissors'){ result = 'Tie'; }
        else if(computer === 'Rock'){ result = 'Lose'; }
        else { result = 'Win'; }
    }
    else{
        alert('Invalid Move... Please try again.');
    }

    if(result === 'Win'){ score.win +=1; }
    else if(result === 'Lose'){ score.losses +=1; }
    else{ score.tie +=1; }

    saveScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move')
        .innerHTML = 
        `
        <p class="you">You</p>
            <img src="images/${yourMove}.png" alt="Image" class="move-icon">
            <p class="vs">VS</p>
            <img src="images/${computer}.png" alt="Image" class="move-icon">
        <p class="computer">Computer</p>
        `;

    updateScore();
}