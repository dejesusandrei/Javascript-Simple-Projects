let calculation = '0';

document.querySelectorAll('.btn')
    .forEach(btn =>{
        btn.addEventListener('click', () =>{
            if(btn.classList.contains('result')){
                calculateResult();
            } 
            else if(btn.classList.contains('AC')){
                clearAll();
            }
            else if(btn.classList.contains('C')){
                removeLast();
            }
            else if(calculation === '0'){
                calculation = btn.dataset.value;
                updateCalculation();
            }
            else {
                addToCalculation(btn.dataset.value);
                updateCalculation();
            }
        });
    });

function updateCalculation(){
    document.querySelector('.display').value = calculation;
}

function addToCalculation(value){
    calculation += value;
    updateCalculation();
}

function removeLast(){    
    calculation = String(calculation);

    if (calculation.endsWith('.')) {
        calculation = calculation.slice(0, -1);
    }
    else if (calculation === '') {
        calculation = '0';
    }
    else {
        calculation = calculation.slice(0, -1);
    }

    updateCalculation();

}

function calculateResult(){
    calculation = eval(calculation);
    updateCalculation();
}

function clearAll(){
    calculation = '0';
    updateCalculation();
}
