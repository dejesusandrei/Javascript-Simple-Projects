import {User} from '../../data/users.js';

const userSystem = new User('userAccounts');
const backBtn = document.getElementById('back-btn');
const alreadyHaveAccountBtn = document.querySelector('.have-acc-btn');
const emaillnput =  document.getElementById('newEmail');
const createAccountForm = document.getElementById('create-acc-form');

backBtn.addEventListener('click', () =>{
    window.location.href = 'login.html';
});

alreadyHaveAccountBtn.addEventListener('click', () =>{
    window.location.href = 'login.html';
});

createAccountForm.addEventListener('submit', registerAccount);
createAccountForm.addEventListener('keydown', (e) =>{
    if(e.target === 'Enter'){
        registerAccount(e);
    }
});

function registerAccount(e){    
    e.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('newEmail').value.trim();
    const password = document.getElementById('newPassword').value.trim();

    const fullName = `${firstName} ${lastName}`.trim();
    if(!email.includes('@') || !email.includes('.')){
        emaillnput.classList.add('email-error');
        return;
    }

    userSystem.register(fullName, email, password);
    e.target.reset();
}

console.log(userSystem.users);