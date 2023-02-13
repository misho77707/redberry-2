document.getElementById('ClientName').innerHTML=localStorage.getItem("Name") + " "+ localStorage.getItem("SurName");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientPhone').innerHTML=localStorage.getItem("Mobile");
document.getElementById('ClientAbout').innerHTML=`<p>${localStorage.getItem("About")}</p>
<div class='line3'></div>`;
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
function EraseAll(){
    localStorage.clear();
    location.href="/index.html";
}
maxS=Math.max(savedPos.length, savedDam.length, savedS.length, savedE.length, savedD.length);

for(let i = 0; i < maxS; i++){
    console.log(savedPos.length,maxS);
    maxS=Math.max(savedPos.length, savedDam.length, savedS.length, savedE.length, savedD.length);
    if((savedPos[i] == "" || savedPos[i] == null||savedPos[i] == undefined)
    && (savedDam[i] == "" || savedDam[i] == null||savedDam[i] == undefined)
    &&   (savedS[i] == "" || savedS[i] == null||savedS[i] == undefined)
    &&   (savedE[i] == "" || savedE[i] == null||savedE[i] == undefined)
    &&   (savedD[i] == "" || savedD[i] == null||savedD[i] == undefined)){
        savedPos.splice(i,1);
        savedDam.splice(i,1);
        savedS.splice(i,1);
        savedE.splice(i,1);
        savedD.splice(i,1);
        i--;
    }
     

}


maxS=0;

if(savedEdc&&savedDeg&&savedDue&&savedDescr)maxS=Math.max(savedEdc.length, savedDeg.length, savedDue.length, savedDescr.length);
if(maxS>0)for(let i = 0; i < maxS; i++){
    console.log(maxS);
    maxS=Math.max(savedEdc.length, savedDeg.length, savedDue.length, savedDescr.length);
    if((savedEdc[i] == ""   ||    savedEdc[i] == null||savedEdc[i] == undefined)
    && (savedDeg[i] == ""   ||    savedDeg[i] == null||savedDeg[i] == undefined)
    && (savedDue[i] == ""   ||    savedDue[i] == null||savedDue[i] == undefined)
    &&(savedDescr[i] == ""  ||    savedDescr[i] == null||savedDescr[i] == undefined)){
        savedEdc.splice(i,1);
        savedDeg.splice(i,1);
        savedDue.splice(i,1);
        savedDescr.splice(i,1);
        i--;
    }
}
localStorage.setItem('EdcT',JSON.stringify(savedEdc));
localStorage.setItem('DegT',JSON.stringify(savedDeg));
localStorage.setItem('DueT',JSON.stringify(savedDue));
localStorage.setItem('DescrT',JSON.stringify(savedDescr));
if(savedEdc&&savedDeg&&savedDue&&savedDescr)for(let i=0;i<savedEdc.length-1;i++){More1(i+1);k+=1;}



let EdcData=[];
let DegData=[];
let DueData=[];
let EdcDescData=[];

console.log("AAAAAAAAAAAAAAAAAAAA",savedDescr)
if(savedEdc&&savedDeg&&savedDue&&savedDescr)for(let i=0;i<savedEdc.length;i++){
    
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
    <div class="NameN1">სასწავლებელი</div>
    <div class='NameGrd'>
    <input placeholder="სასწავლებელი" onkeyup="UpdSchool(${Number(k)});EdcVal(${Number(k)})" class="LInpt1">
    <img class="ErrImg1" src="images/Vector.png">
    </div>
    <div  class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>
<div class="Degree_EndD">
<div class="Degree">
    <div  class="NameN2">ხარისხი</div>
    <select onchange="UpdSchool1(${Number(k)});SelVal(${Number(k)})" class="Selector">
        <option>აირჩიეთ ხარისხი</option> 

    </select>
    </div>
    <div class="EndD">
        <div class="NameN3">დამთავრების რიცხვი</div>
        <input class="DateInp" onchange="UpdDate(${Number(k)});DateVal(${Number(k)})" type="date">
    </div>
</div>
<div class="Descr">
    <div class="NameN4">აღწერა</div>
    <textarea placeholder="განათლების აღწერა" onkeyup="UpdDescr(${Number(k)});DescrVal(${Number(k)})" class="DescrText"></textarea>
</div>
<div class="line2"></div>
   `;
   document.getElementsByClassName("ClientEdcDiv")[0].innerHTML+=`
   <div class="ClientExp">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
   <div class="ClientSchool"></div>
   <div class="ClientEDate"></div>
   <div class="ClientEDescr"></div>
   <div class="line3"></div>`
for(let j=0;j<document.getElementsByClassName('LInpt1').length-1;j++){
    
    if(EdcData[j]!=undefined)document.getElementsByClassName('LInpt1')[j].value=EdcData[j];
    if(DueData[j]!=undefined)document.getElementsByClassName('DateInp')[j].value=DueData[j];
    if(EdcDescData[j]!=undefined)document.getElementsByClassName('DescrText')[j].value=EdcDescData[j];
    
}

document.getElementById('ClientRez').style.height=500+document.getElementById('Exp_Edc').offsetHeight+'px';

}
function More1(i){
    
    document.getElementById("mainDiv").innerHTML+=`
    <div class="Edc">
    <div class="NameN1">სასწავლებელი</div>
    <div class='NameGrd'>
    <input placeholder="სასწავლებელი" onkeyup="UpdSchool(${i});EdcVal(${i})" class="LInpt1">
    <img class="ErrImg1" src="images/Vector.png">
    </div>
    <div  class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>
<div class="Degree_EndD">
<div class="Degree">
    <div  class="NameN2">ხარისხი</div>
    <select onchange="UpdSchool1(${i});SelVal(${i})" class="Selector">
        <option>აირჩიეთ ხარისხი</option> 

    </select>
    </div>
    <div class="EndD">
        <div class="NameN3">დამთავრების რიცხვი</div>
        <input class="DateInp" onchange="UpdDate(${i});DateVal(${i})" type="date">
    </div>
</div>
<div class="Descr">
    <div class="NameN4">აღწერა</div>
    <textarea placeholder="განათლების აღწერა" onkeyup="UpdDescr(${i});DescrVal(${i})" class="DescrText"></textarea>
</div>
<div class="line2"></div>
   `;
   document.getElementsByClassName("ClientEdcDiv")[0].innerHTML+=`
   <div class="ClientExp">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
   <div class="ClientSchool"></div>
   <div class="ClientEDate"></div>
   <div class="ClientEDescr"></div>
   <div class="line3"></div>`


document.getElementById('ClientRez').style.height=500+document.getElementById('Exp_Edc').offsetHeight+'px';

}
if(savedDue&&savedDescr)for(let i=0;i<savedDue.length;i++){
    UpdDate(i);
UpdDescr(i);
}

