// alert("Hello to my Calculator!");
var result=0;


document.getElementById('ac').onclick=function(){
    document.getElementById('resultArea').innerHTML="";
}

document.getElementById('btnPlus').onclick=function(){
    // document.getElementById('resultArea').innerHTML=(result);
    let plus = result;
    document.getElementById('resultArea').innerHTML="";
}

document.getElementById('btnMinus').onclick=function(){


}

document.getElementById('btnMult').onclick=function(){}

document.getElementById('btnDiv').onclick=function(){}


document.getElementById('btnEqual').onclick=function(){
    document.getElementById('resultArea').innerHTML=(result);
}

        
function cal(value){
    result = document.getElementById('resultArea').innerHTML+=(value);
}