document.getElementById("get-bonus-btn").addEventListener('click',
    function(){
        const currentBalance = getBalance();
        const coupon = getValueFromInput("coupon-number");

        if(coupon == 'GET50'){
            const newBalance = currentBalance + 50;
            setBalance(newBalance);
            alert('Success! 50 Tk added to your Account.')

            const tnxHistory = document.getElementById("history");
            const newTnxHistory = document.createElement('div');
            newTnxHistory.className = `transaction-card p-5 bg-base-100 m-2`;
            newTnxHistory.textContent =`50 TK coupon added to balance on ${new Date().toDateString()}.`;

            tnxHistory.appendChild(newTnxHistory);
        }
        else{
            alert("Invalid Coupon");
            return;
        }
    }
)