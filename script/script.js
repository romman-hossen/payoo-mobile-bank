// console.log('connected')
document.getElementById('login-btn').addEventListener('click',function(){
    // 1.get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber)
    // 2.get the pin input 
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    console.log(pin)
    //3. match pin and mobile number 
    if(contactNumber == "01760320585" && pin == "1234"){
        // 3.1 :: true >> alert homepage
        alert('login success');
        // window.location.replace("/home.html")
        window.location.assign("../home.html")
    }
    else{
        // 3.1 :: false >> alert return
        alert('login failed')
        return;
    }
})