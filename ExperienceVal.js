function PosVal(num){
    inp=document.getElementsByClassName('LInpt1')[num];
    if(inp.value.length<2){
        inp.style.borderColor='#EF5050';
        document.getElementsByClassName('ErrImg1')[num].style.visibility='visible';
        document.getElementsByClassName('NameN1')[num].style.color="#E52F2F";
        inp.style.background=``;
        return false;
    }
    else{
        inp.style.borderColor='#98E37E';
        inp.style.background=`url("images/Green.png") no-repeat`;
        inp.style.backgroundPosition='762px';
        inp.style.backgroundSize='18px';
        document.getElementsByClassName('ErrImg1')[num].style.visibility='hidden';
        document.getElementsByClassName('NameN1')[num].style.color="#000000";
    }
}
function DamVal(num){
    inp=document.getElementsByClassName('LInpt2')[num];
    if(inp.value.length<2){
        inp.style.borderColor='#EF5050';
        document.getElementsByClassName('ErrImg2')[num].style.visibility='visible';
        inp.style.background=``;
        document.getElementsByClassName('NameN2')[num].style.color="#E52F2F";
        return false;
    }
    else{
        inp.style.borderColor='#98E37E';
        inp.style.background=`url("images/Green.png") no-repeat`;
        inp.style.backgroundPosition='762px';
        inp.style.backgroundSize='18px';
        document.getElementsByClassName('ErrImg2')[num].style.visibility='hidden';
        document.getElementsByClassName('NameN2')[num].style.color="#000000";
    }
}
function DateVal1(num){
    date=document.getElementsByClassName('DateInp1')[num];
    if(date.value){
        date.style.borderColor='#98E37E';
        document.getElementsByClassName('NameN3')[num].style.color="#000000";
    }
    else{
        
        date.style.borderColor='#EF5050';
        document.getElementsByClassName('NameN3')[num].style.color="#E52F2F";
        return false;
    }


}
function DateVal2(num){
    date=document.getElementsByClassName('DateInp2')[num];
    if(date.value){
        date.style.borderColor='#98E37E';
        document.getElementsByClassName('NameN4')[num].style.color="#000000";
    }
    else{
        date.style.borderColor='#EF5050';
        document.getElementsByClassName('NameN4')[num].style.color="#E52F2F";
        return false;
    }
    
}
function DescrVal(num){
    console.log('ae')
    descr=document.getElementsByClassName('DescrText')[num];
    if(descr.value){
        descr.style.borderColor='#98E37E';
        document.getElementsByClassName('NameN5')[num].style.color="#000000";
    }
    else{
        descr.style.borderColor='#EF5050';
        document.getElementsByClassName('NameN5')[num].style.color="#E52F2F";
        return false;
    }

}
function ValAll(){
    a= document.getElementsByClassName('LInpt1').length;
    console.log(a);
    corr=true;
    for(let i=0;i<a;i++){
        PosVal(i);
        DamVal(i);
        DateVal1(i);
        DateVal2(i);
        DescrVal(i);
        if(
        PosVal(i)==false||
        DamVal(i)==false||
        DateVal1(i)==false||
        DateVal2(i)==false||
        DescrVal(i)==false
        ) {corr=false;
        
        }

    }
    if(corr==true){location.href='/Education.html'}
}