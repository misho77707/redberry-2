function NameVal(id,num){
    const regx = /[ა-ჰ]/;
    const name = document.getElementById(id).value;
    if( regx.test(name) === false ||  name.length<2){
        document.getElementById(id).style.borderColor='#EF5050';
        document.getElementsByClassName('ErrImg')[num].style.visibility='visible';
        document.getElementById(id).style.background=``;
        
        return false;
        
     }else{
        document.getElementById(id).style.borderColor='#98E37E';
        document.getElementById(id).style.background=`url("images/Green.png") no-repeat`;
        document.getElementById(id).style.backgroundPosition='343px';
        document.getElementById(id).style.backgroundSize='18px';
        document.getElementsByClassName('ErrImg')[num].style.visibility='hidden';
        
        return true;
         
     }
}

function PhoneVal(){
    var regx =  /^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/;
    var phone = document.getElementById("MInpt");
    if( regx.test(phone.value) == false ){
        phone.style.borderColor='#EF5050';
        document.getElementsByClassName('ErrImg')[3].style.visibility='visible';
        phone.style.background=``;
        return false;
     }
     else{
        phone.style.borderColor='#98E37E';
        phone.style.background=`url("images/Green.png") no-repeat`;
        phone.style.backgroundPosition='762px';
        phone.style.backgroundSize='18px';
        document.getElementsByClassName('ErrImg')[3].style.visibility='hidden';
        
        return true;
        }
  
}
function EmailVal(){
    var regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge$/gm;
    var mail = document.getElementById("EInpt");

    if( regx.test(mail.value) == false ){
        mail.style.borderColor='#EF5050';
        document.getElementsByClassName('ErrImg')[2].style.visibility='visible';
        mail.style.background=``;
        
        return false;
     }
     else{
        mail.style.borderColor='#98E37E';
        mail.style.background=`url("images/Green.png") no-repeat`;
        mail.style.backgroundPosition='762px';
        mail.style.backgroundSize='18px';
        document.getElementsByClassName('ErrImg')[2].style.visibility='hidden';
        
        return true;

     }
    
    
}
function AboutVal(){
    if(document.getElementById("AboutInp").value==""){
        document.getElementById('AboutInp').style.borderColor="#BCBCBC"
    }
    else{
        document.getElementById('AboutInp').style.borderColor='#98E37E';
    }
}

function Valall(){
   
    EmailVal();
    NameVal('NInp',0);
    NameVal('SNInp',1);
    PhoneVal();
    if(
    EmailVal()==true&&
    NameVal('NInp',0)==true&&
    NameVal('SNInp',1)==true&&
    PhoneVal()==true){
        console.log('sdas');
        location.href='Experience.html';
    }


}