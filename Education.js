document.getElementById('ClientName').innerHTML=localStorage.getItem("Name") + " "+ localStorage.getItem("SurName");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientPhone').innerHTML=localStorage.getItem("Mobile");
document.getElementById('ClientAbout').innerHTML=`<p>${localStorage.getItem("About")}</p>
<div id='Cline'></div>`;
document.getElementById("ClientPhoto").style.backgroundImage =localStorage.getItem("Photo");

savedPos=JSON.parse(localStorage.getItem('PT'));
savedDam=JSON.parse(localStorage.getItem('DT'));
savedS=JSON.parse(localStorage.getItem('ST'));
savedE=JSON.parse(localStorage.getItem('ET'));
savedD=JSON.parse(localStorage.getItem('DeT'));

savedEdc=JSON.parse(localStorage.getItem('EdcT'))
savedDeg=JSON.parse(localStorage.getItem('DegT'))
savedDue=JSON.parse(localStorage.getItem('DueT'))
savedDescr=JSON.parse(localStorage.getItem('DescrT'))
let k=0;

// for(let i=0;i<savedPos.length-1;i++){
//     document.getElementById("Exp_Edc").innerHTML+=`
//    <div class=ClientExpDivs>
//    <div class="ClientExp">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
//    <div class="ClientPosition"></div>
//    <div class="ClientDates"></div>
//    <div class="ClientDescr"></div>
//    <div class=Cline2></div>
//    </div>
//    `;
// }
// for(let i=0;i<savedPos.length;i++){
//     document.getElementsByClassName('ClientPosition')[i].innerHTML=savedPos[i]+", "+savedDam[i];
// document.getElementsByClassName('ClientDates')[i].innerHTML=savedS[i]+", "+savedE[i];
// document.getElementsByClassName('ClientDescr')[i].innerHTML=savedD[i];
// }

for(let i=0;i<savedEdc.length-1;i++){More1(i+1);k+=1;}



let EdcData=[];
let DegData=[];
let DueData=[];
let EdcDescData=[];


for(let i=0;i<savedEdc.length;i++){
    
document.getElementsByClassName('LInpt1')[i].value=savedEdc[i];
// document.getElementsByClassName('Selector')[i].value=savedDeg[i];
document.getElementsByClassName('DateInp')[i].value=savedDue[i];
document.getElementsByClassName('DescrText')[i].value=savedDescr[i];

EdcData[i]=savedEdc[i];
DegData[i]=savedDeg[i];
DueData[i]=savedDue[i];
EdcDescData[i]=savedDescr[i];


}





function UpdSchool(idx){
    const a=document.getElementsByClassName('LInpt1')[idx].value;
    const b=document.getElementsByClassName('Selector')[idx].value;

    EdcData[idx]=a;
    localStorage.setItem('EdcT',JSON.stringify(EdcData));

    document.getElementsByClassName('ClientSchool')[idx].innerHTML=a+', '+b


}
function UpdSchool1(idx){
    const a=document.getElementsByClassName('LInpt1')[idx].value;
    const b=document.getElementsByClassName('Selector')[idx].value;
    

    DegData[idx]=b;
    localStorage.setItem('DegT',JSON.stringify(DegData));
    
    document.getElementsByClassName('ClientSchool')[idx].innerHTML=a+', '+b;


}

function UpdDate(idx){
    document.getElementsByClassName('ClientEDate')[idx].innerHTML=document.getElementsByClassName('DateInp')[idx].value;
    DueData[idx]=document.getElementsByClassName('DateInp')[idx].value;
    localStorage.setItem('DueT',JSON.stringify(DueData));
}
function UpdDescr(idx){
    document.getElementsByClassName('ClientEDescr')[idx].innerHTML=document.getElementsByClassName('DescrText')[idx].value;
    EdcDescData[idx]=document.getElementsByClassName('DescrText')[idx].value;
    localStorage.setItem('DescrT',JSON.stringify(EdcDescData));
    document.getElementById('ClientRez').style.height=500+document.getElementById('Exp_Edc').offsetHeight+'px';
}


function More(){
    
    k+=1;
    
    document.getElementById("mainDiv").innerHTML+=`
    <div class="Edc">
    <div class="NameN">სასწავლებელი</div>
    <input onkeyup="UpdSchool(${Number(k)})" class="LInpt1">
    <div  class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>
<div class="Degree_EndD">
<div class="Degree">
    <div  class="NameN">ხარისხი</div>
    <select onchange="UpdSchool1(${Number(k)})" class="Selector">
        <option>Please select</option> 

    </select>
    </div>
    <div class="EndD">
        <div class="NameN">დამთავრების რიცხვი</div>
        <input class="DateInp" onchange="UpdDate(${Number(k)})" type="date">
    </div>
</div>
<div class="Descr">
    <div class="NameN">აღწერა</div>
    <textarea onkeyup="UpdDescr(${Number(k)})" class="DescrText"></textarea>
</div>
<div class="line2"></div>
   `;
   document.getElementById("Exp_Edc").innerHTML+=`<div class="ClientEdcDiv">
   <div class="ClientExp">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
   <div class="ClientSchool"></div>
   <div class="ClientEDate"></div>
   <div class="ClientEDescr"></div>
</div>`

document.getElementById('ClientRez').style.height=500+document.getElementById('Exp_Edc').offsetHeight+'px';

}
function More1(i){
    
    document.getElementById("mainDiv").innerHTML+=`
    <div class="Edc">
    <div class="NameN">სასწავლებელი</div>
    <input onkeyup="UpdSchool(${i})" class="LInpt1">
    <div  class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>
<div class="Degree_EndD">
<div class="Degree">
    <div  class="NameN">ხარისხი</div>
    <select onchange="UpdSchool1(${i})" class="Selector">
        <option>Please select</option> 

    </select>
    </div>
    <div class="EndD">
        <div class="NameN">დამთავრების რიცხვი</div>
        <input class="DateInp" onchange="UpdDate(${i})" type="date">
    </div>
</div>
<div class="Descr">
    <div class="NameN">აღწერა</div>
    <textarea onkeyup="UpdDescr(${i})" class="DescrText"></textarea>
</div>
<div class="line2"></div>
   `;
   document.getElementById("Exp_Edc").innerHTML+=`<div class="ClientEdcDiv">
   <div class="ClientExp">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
   <div class="ClientSchool"></div>
   <div class="ClientEDate"></div>
   <div class="ClientEDescr"></div>
</div>`

document.getElementById('ClientRez').style.height=500+document.getElementById('Exp_Edc').offsetHeight+'px';

}
for(let i=0;i<2;i++){
    UpdDate(i);
UpdDescr(i);
}

