document.getElementById("cashout-btn").addEventListener('click', function(){
    const cashoutNumber = getValueFromInput("cashout-number");
    const cashAmount = getValueFromInput("cashout-amount");
    const pin = getValueFromInput("cashout-pin");
    const currentBalance = getBalance();

    const newBalance = currentBalance - cashAmount;
    if(cashoutNumber.length != 11){
        alert("Invalid Number");
        return;
    }
    if (newBalance < 0){
        alert("Invalid Amount");
        return;
    }
    if(pin === "1234"){
        alert("Cashout Successful");
        setBalance(newBalance);
    }
    else{
        alert("Invalid Pin");
        return;
    }
})











// document.getElementById("cashout-btn").addEventListener('click',
//     function(){
//         const balanceEl = document.getElementById("balance");
//         const balance = Number(balanceEl.innerText)
//         const agentNumber = document.getElementById("cashout-number").value;
//         const cashOutAmount = Number(document.getElementById("cashout-amount").value);
//         const pin = Number(document.getElementById("cashout-pin").value);

//         if(cashOutAmount > balance){
//             alert("Invalid Amount")
//             return;
//         }
//         else{
//             if (agentNumber.length !== 11) {
//                 console.log(agentNumber);
                
//                 alert("Invalid Agent Number");
//                 return;
//             }
//             else{
//                 if (pin == 1234) {
//                     const newBalance = balance - cashOutAmount;
//                     balanceEl.innerText = newBalance;
//                 }
//                 else{
//                     alert("Invalid Pin");
//                     return;
//                 }
//             }
//         }
//     }
// )