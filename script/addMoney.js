document.getElementById("add-money-btn").addEventListener('click', function(){
    // 1 get bank info
    const bankAccount = getValueFromInput("add-money-bank");
    console.log(bankAccount);
    if(bankAccount == "Select a Bank"){
        alert("Please select a bank")
        return;
    }

    // 2 get bank account number
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11){
        alert("Invalid account No.");
        return;
    }

    // 3 get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    
    // 4 verify PIN
    const pin = getValueFromInput("add-money-pin");
    if(pin == '1234'){
        alert(`Add Money Success from ${bankAccount} at ${ new Date()}`);
        setBalance(newBalance);
    }
    else{
        alert("Invalid Pin");
        return;
    }

    
})