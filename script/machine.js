// console.log('machine bby')
// machine id --> input value
function getValueFormInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value)
    return value;
}
// machine -> ballance
function getBallance(){
   const ballanceElement = document.getElementById("ballance");
   const ballance = ballanceElement.innerText;
   console.log("current ballance",Number(ballance));
   return Number(ballance);
}
// machine value -> set ballance
function setBallance(value){
   const ballanceElement = document.getElementById("ballance");
   ballanceElement.innerText = value;
}