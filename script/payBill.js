document.getElementById("bill-pay-btn").addEventListener('click', 
    function(){
        const bankName = getValueFromInput("bank");
        const accNumber = getValueFromInput("bank-account-number");
        const amount = getValueFromInput("add-pay-amount");
        const pin = getValueFromInput("bill-pay-pin");
        const currentBalance = getBalance();

        if(bankName == "Select Bank"){
            alert("Choose a bank");
            return;
        }

        if(accNumber.length != 10){
            alert("Invalid account number");
            return;
        }
        if(amount > currentBalance || amount == 0){
            alert("Invalid amount");
            return;
        }
        if(pin == '1234'){
            const newBalance = currentBalance - Number(amount);
            alert(`Bill Pay Success on ${new Date().toDateString()} to Account #${accNumber} from ${bankName}.`);
            setBalance(newBalance);

            const tnxHistory = document.getElementById("history");
            const newTnxHistory = document.createElement("div");
            newTnxHistory.className = `transaction-card p-5 bg-base-100 m-2`

            newTnxHistory.textContent = `Bill Pay Tk ${amount} to Account #${accNumber} on ${new Date().toDateString()}  from ${bankName}.`

            tnxHistory.appendChild(newTnxHistory);
        }
        else{
            alert("Invalid Pin");
        }
        
    }
)