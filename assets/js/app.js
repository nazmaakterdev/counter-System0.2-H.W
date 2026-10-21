 

 let decrementBtn = document.querySelector('.decrement');
  let incrementBtn = document.querySelector('.increment');
   let inputFiled = document.querySelector('.input');





function increment(){
inputFiled.value = Number(inputFiled.value)+1;
 
 
}
function decrement(){
   if(inputFiled.value > 1){
    inputFiled.value = Number(inputFiled.value)-1;

   }
 
}
function resetInput (){
    if(inputFiled.value <= 0){
inputFiled.value = 1;
    }

}


   incrementBtn.addEventListener('click',increment);
   decrementBtn.addEventListener('click',decrement);
   inputFiled.addEventListener('keyup',resetInput);





 