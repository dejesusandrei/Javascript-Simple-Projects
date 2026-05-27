export let score = JSON.parse(localStorage.getItem('Score')) || {
    win: 0,
    losses: 0,
    tie: 0
};

export function saveScore(){
    localStorage.setItem('Score', JSON.stringify(score));
}

export function resetScore(){
    score.win = 0;
    score.losses = 0;
    score.tie = 0;
    localStorage.removeItem('Score');
    saveScore();
}

export function updateScore(){
    document.querySelector('.js-score')
    .innerHTML = `Win: ${score.win}  | Losses: ${score.losses}  | Tie: ${score.tie}`;
}