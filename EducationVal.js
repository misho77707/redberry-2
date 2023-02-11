function EdcVal(num){
    inp=document.getElementsByClassName('LInpt1')[num];
    if(inp.value.length<2){
        inp.style.borderColor='#EF5050';
        document.getElementsByClassName('ErrImg1')[num].style.visibility='visible';
        inp.style.background=``;
        return false;
    }
    else{
        inp.style.borderColor='#98E37E';
        inp.style.background=`url("images/Green.png") no-repeat`;
        inp.style.backgroundPosition='762px';
        inp.style.backgroundSize='18px';
        document.getElementsByClassName('ErrImg1')[num].style.visibility='hidden';
    }
}

function SelVal(num){
    sel=document.getElementsByClassName('Selector')[num];
    if(sel.value=='აირჩიეთ ხარისხი'){
        sel.style.borderColor='#EF5050';

    }
    else{
        sel.style.borderColor='#98E37E';
    }
    //if(document.getElementsByClassName('Selector'))
}
function DescrVal(num){
    inp=document.getElementsByClassName('DescrText')[num];
    if(inp.value){
        sel.style.borderColor='#EF5050';

    }
    else{
        sel.style.borderColor='#98E37E';
    }
}
function DateVal(num){
    date=document.getElementsByClassName('DateInp')[num];
    if(date.value){
        date.style.borderColor='#98E37E';
    }
    else{
        date.style.borderColor='#EF5050';
        return false;
    }


}