document.getElementById('login-btn').addEventListener('click',
    function(event){
        // 1- get the mobile number
        const numberInput = document.getElementById('input-number');
        const contactNumber = numberInput.value;

        // 2- get the pin
        const inputPin = document.getElementById('input-pin');
        const pin = inputPin.value;

        // 3- match the pin and number
        if(contactNumber == '01234567890' && pin == '1234'){
            // 3-1 true ----> alert > homepage
            alert("Login Success");

            // window.location.replace("/home.html")
            window.location.assign("/home.html");
        }
        else{
            // 3-2 false ---> alert > return
            alert("Login Failed");
            return;
        }
        
    }
)