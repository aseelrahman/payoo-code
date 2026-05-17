function getValueFromInput(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function getBalance(){
    const balanceEl = document.getElementById("balance");
    return Number(balanceEl.innerText);
}

function setBalance(value){
    const balanceEl = document.getElementById("balance");
    balanceEl.innerText = value;
}