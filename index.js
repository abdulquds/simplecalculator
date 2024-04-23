const buttonsE1 = document.querySelectorAll('button');
const inputFieldEl=document.getElementById('result');
for(let i=0;i<buttonsE1.length;i++){
    buttonsE1[i].addEventListener('click',()=>{
        const buttonValue=buttonsE1[i].textContent;
        if(buttonValue==='C'){
            clearResult();
        }else if(buttonValue==='='){
            calculateResult();
        }else{
            appendValue(buttonValue)
        }
    })
}
// functions
function clearResult(){
    inputFieldEl.value='';
}
function calculateResult(){
    inputFieldEl.value=eval(inputFieldEl.value);
}
function appendValue(buttonValue){
    inputFieldEl.value+=buttonValue ;
}