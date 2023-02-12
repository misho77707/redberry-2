function EdcVal(num){
    inp=document.getElementsByClassName('LInpt1')[num];
    if(inp.value.length<2){
        inp.style.borderColor='#EF5050';
        document.getElementsByClassName('ErrImg1')[num].style.visibility='visible';
        inp.style.background=``;
        document.getElementsByClassName('NameN1')[num].style.color='#E52F2F';
        return false;
    }
    else{
        inp.style.borderColor='#98E37E';
        inp.style.background=`url("images/Green.png") no-repeat`;
        inp.style.backgroundPosition='762px';
        inp.style.backgroundSize='18px';
        document.getElementsByClassName('ErrImg1')[num].style.visibility='hidden';
        document.getElementsByClassName('NameN1')[num].style.color='#000000';
    }
}

function SelVal(num){
    sel=document.getElementsByClassName('Selector')[num];
    if(sel.value=='აირჩიეთ ხარისხი'){
        sel.style.borderColor='#EF5050';
        document.getElementsByClassName('NameN2')[num].style.color='#E52F2F';
        return false
    }
    else{
        document.getElementsByClassName('NameN2')[num].style.color='#000000';
        sel.style.borderColor='#98E37E';
    }
    //if(document.getElementsByClassName('Selector'))
}
function DescrVal(num){
    inp=document.getElementsByClassName('DescrText')[num];
    if(inp.value){
                inp.style.borderColor='#98E37E';
                document.getElementsByClassName('NameN4')[num].style.color='#000000';
    }
    else{        inp.style.borderColor='#EF5050';
                document.getElementsByClassName('NameN4')[num].style.color='#E52F2F';
                return false;
        
    }
}
function DateVal(num){
    date=document.getElementsByClassName('DateInp')[num];
    if(date.value){
        date.style.borderColor='#98E37E';
        document.getElementsByClassName('NameN3')[num].style.color='#000000';
    }
    else{
        date.style.borderColor='#EF5050';
        document.getElementsByClassName('NameN3')[num].style.color='#E52F2F';
        
        return false;
    }


}
function ValAll(){
    a=document.getElementsByClassName('LInpt1').length;
    cor=true;
    console.log(a);
    for(let i=0;i<a;i++){
        DateVal(i);
        DescrVal(i);
        SelVal(i);
        EdcVal(i);
        if(DateVal(i)==false||
        DescrVal(i)==false||
        SelVal(i)==false||
        EdcVal(i)==false
        )cor=false;
    }
    if(cor==true){
        location.href="Final.html";
    }
}