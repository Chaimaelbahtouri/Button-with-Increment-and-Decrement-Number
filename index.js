let plus = document.getElementById('btn2');
let moin = document.getElementById('btn1');
let displayInput = document.getElementById('inp');

let counter = 0;

plus.addEventListener("click" , function(){
    counter++;
    displayInput.innerText = counter;
    console.log(counter);
});


moin.addEventListener("click" , function() {
    counter--;
    displayInput.innerText = counter;
    console.log(counter);
});