// var a =document.getElementById('1').innerHTML;
// var b =document.getElementById('2').innerHTML;
// var c =document.getElementById('3').innerHTML;
// var d =document.getElementById('4').innerHTML;
// var e =document.getElementById('5').innerHTML;
// var f =document.getElementById('6').innerHTML;
// var g =document.getElementById('7').innerHTML;
// var h =document.getElementById('8').innerHTML;
// var i =document.getElementById('9').innerHTML;
// var j =document.getElementById('0').innerHTML;

var sum=0;
var num=0;
pro=1;
var sign = '+'
var Enter = document.getElementById('output-Values');
var input = document.getElementById('input-values');
function Values1(event){

        num += event.target.value;
        num=Number(num);
        input.innerText = num;
    
}

function calculate(event){
    if(String(event.target.value) == '+'){
        sign=event.target.value;
    }
    else if(String(event.target.value) == '-'){
        sign=event.target.value;
    }
    else if(String(event.target.value) == '*'){
        sign=event.target.value;
    }
    else if(String(event.target.value) == '/'){
        sign=event.target.value;
       
    }
    else{
        alert('invalid')
    }
    Entered();
}


function Clear(){
    sum=0;
    num=0;
    Enter.innerText = sum;
    input.innerText = num;
    alert('cleared');
}


function Entered(){
    if(sum == NaN || num == NaN){
        sum=0;
        num=0;
    }
    if(sum== Infinity || sum == -Infinity){
        sum=0;
        num=0;
    }
    
   
    if(String(sign) == '+' ){
        sum += num;
        Enter.innerText =sum;
    }

    else if(String(sign) == '-' ){
        sum -= num;
        Enter.innerText =sum;
    }

    else if(String(sign) == '/' ){
        sum = sum/num;
        Enter.innerText =sum;

    }
    
    else if(String(sign) == '*' ){
        if(sum==0){
            sum=1;
        }
        sum *= num;
        Enter.innerText =sum;

    }

    else{
        alert('invalid');
    }
    num=0;
    
    Enter.innerText = sum ;
}



