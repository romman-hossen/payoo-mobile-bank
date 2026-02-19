 document.getElementById("cashout-btn").addEventListener('click',function(){
     //1- get the agent number and validate 
    const cashoutNumber = getValueFormInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("Invalid Number");
        return;
    }
    // 2-get the amount,validate,convert the number
    const cashoutAmount = getValueFormInput("cashout-amount");
     // 3-get the current Ballance,validate,convert the number
    const ballanceElement = document.getElementById("ballence");
    const ballance = ballanceElement.innerText;
    console.log(ballance);

    // 4- calculate new ballance 
    const newBallance = Number(ballance) - Number(cashoutAmount);
    console.log(newBallance);
    if(newBallance < 0){
        alert("Invalid amount");
        return;

    }
     // 5-get the pin and verify
     const cashoutPin = getValueFormInput("cashout-pin");
     if(cashoutPin === "1234"){
        alert("cashout successful");
        console.log("New ballance :",newBallance);
        ballanceElement.innerText = newBallance;
     }
     else{
        alert("Invalid Pin");
        return;
     }

 })

//document.getElementById("cashout-btn").addEventListener('click',function(){
//     //1- get the agent number and validate 
//     const cashoutNumberInput= document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("Invalid Number");
//             return;
//     }
//     // 2-get the amount,validate,convert the number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     // 3-get the current Ballance,validate,convert the number
//     const ballanceElement = document.getElementById("ballence");
//     const ballance = ballanceElement.innerText;
//     console.log(ballance);
    
//     // 4- calculate new ballance 
//     const newBallance = Number(ballance) - Number(cashoutAmount);
//     // const newBallance = ballance - cashoutAmount;
//     if(newBallance < 0)
//         {
//             alert("Invalid amount");
//             return;
//         }
//         console.log(newBallance)

//     // 5-get the pin and verify
//      const cashoutPinInput = document.getElementById("cashout-pin");
//      const cashoutPin = cashoutPinInput.value;
//     //  console.log(typeof cashoutPin)
//     if(cashoutPin === "1234"){
//         // 5.1 true >> show on alert > set ballance
//         alert("cashout successful");
//         console.log("new ballance :",newBallance);
//         ballanceElement.innerText = newBallance;
//     }
//     else{

//         // 5.1 false >> show on error alert > return
//         alert("Invalid Pin");
//         return;
//     }
// })
    