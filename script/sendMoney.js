document.getElementById("send-money-btn").addEventListener('click', 
    function(){
        const accNumber = getValueFromInput("recipient-number");
        const amount = getValueFromInput("send-money-amount");
        const pin = getValueFromInput("send-money-pin");
        const currentBalance = getBalance()

        if(accNumber.length != 11){
            alert('Invalid Account Number');
            return;
        }
        if(amount > currentBalance){
            alert("Invalid amount");
            return;
        }
        if(pin == '1234'){
            const newBalance = currentBalance - Number(amount);
            alert(`Send money success! On ${new Date().toDateString()} to Account ${accNumber}`);
            setBalance(newBalance);
            
            const tnxHistory = document.getElementById("history");
            const newTnxHistory = document.createElement('div');
            
            newTnxHistory.className= 'transaction-card p-5 bg-base-100 m-2' ;
            newTnxHistory.textContent = `Send Money to ${accNumber} success on ${new Date().toDateString()}. Amount: ${amount} TK.`;
            
            tnxHistory.appendChild(newTnxHistory);
        }
        else{
            alert('Invalid Pin')
            return;
        }
    }
)