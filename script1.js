let scrn=document.getElementById('screen');

function input(x){
     scrn.value=scrn.value+x;
}
function allClear(){
scrn.value=' ';
}
function calc(){
     try{
     scrn.value=eval(scrn.value)
}
catch{
     scrn.value='Error';
}
}