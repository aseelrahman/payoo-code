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

function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const transactions = document.getElementById("history");
    const sendMoney = document.getElementById("sendMoney");
    const getBonus = document.getElementById("getBonus");
    const payBill = document.getElementById("pay-bill");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transactions.classList.add("hidden");
    sendMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden")
 
    document.getElementById(id).classList.remove("hidden")

}