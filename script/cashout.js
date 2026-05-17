document.getElementById("cashout-btn").addEventListener('click', function(){
    // 1- get the agent number && validate
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid Agent number");
        return;
    }

    // 2- get the amount, validate, convert to number
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);
    
    // 3- get current balance, validate, convert to number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);
    // 4- calculate new balance
    
    const newBalance = Number(balance) -Number(cashoutAmount);
    
    if (newBalance < 0) {
        alert("Invalid amount");
        return;
    }
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;

    // 5- get the pin and verify
    if(pin === '1234'){
        // 5-1 true:: show an alert > set balance
        alert("Cashout Successful");
        console.log(newBalance);
        balanceElement.innerText = newBalance;
        
    }
    else{
        // 5-2 false:: show an error alert > return
        alert("Invalid Pin");
        return;
    }
    console.log(newBalance);
});