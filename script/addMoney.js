// console.log('add money added')
document.getElementById("add-money-btn").addEventListener('click',function(){
    const selectBank = getValueFormInput("add-money-select");
    if(selectBank == "Select bank"){      
        alert("please select bank");
        return;
    }
    const bankAmountNumber = getValueFormInput("add-money-number");
    if(bankAmountNumber.length != 11){
        alert("Invalid Account Number");
        return;
    }
    const addAmount = getValueFormInput("add-money-amount");

    const currentBallance = getBallance();

    const newBallance = currentBallance + Number(addAmount);
    // console.log(newBallance)
    const pin = getValueFormInput("add-money-pin");
    if(pin === "1234"){
       alert(`Add money success from ${selectBank}
         ${new Date()}`);
       document.getElementById("ballance").innerText = newBallance;    
    }
    else{
        alert("Invalid Pin")
    }
    
})