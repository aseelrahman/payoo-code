document.getElementById("cashout-btn").addEventListener('click',
    function(){
        const balanceEl = document.getElementById("balance");
        const balance = Number(balanceEl.innerText)
        const agentNumber = document.getElementById("cashout-number").value;
        const cashOutAmount = Number(document.getElementById("cashout-amount").value);
        const pin = Number(document.getElementById("cashout-pin").value);

        if(cashOutAmount > balance){
            alert("Invalid Amount")
            return;
        }
        else{
            if (agentNumber.length !== 11) {
                console.log(agentNumber);
                
                alert("Invalid Agent Number");
                return;
            }
            else{
                if (pin == 1234) {
                    const newBalance = balance - cashOutAmount;
                    balanceEl.innerText = newBalance;
                }
                else{
                    alert("Invalid Pin");
                    return;
                }
            }
        }
    }
)