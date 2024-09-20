// add money to the account

// step-1: add the event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
   
    // step-2 : get money to be add to thr account
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoneyInput)
    const pinNumberInput = document.getElementById('input-pin-number').value;
    

    // step-3 : validation pin number
    if(pinNumberInput === '1234'){
        // step -4 : get the current balance
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber= parseFloat(balance);

        // step-5: add money input with balance
        const newBalance = addMoneyNumber + balanceNumber;
        
        // step-6: update the balance in the DOM
        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('Failed to add money')
    }
})