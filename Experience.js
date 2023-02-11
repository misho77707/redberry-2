document.getElementById('ClientName').innerHTML=localStorage.getItem("Name") + " "+ localStorage.getItem("SurName");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientPhone').innerHTML=localStorage.getItem("Mobile");
document.getElementById('ClientAbout').innerHTML=`<p>${localStorage.getItem("About")}</p>
<div class='line3'></div>`;
document.getElementById("ClientPhoto").style.backgroundImage =localStorage.getItem("Photo")


let Posdata=[];
let Damdata=[];
let Sdata=[];
let Edata=[];
let Descrdata=[];
let experiences=[];
var k=0;
let savedPos=[];
let savedDam=[];
let savedS=[];
let savedE=[];
let savedD=[];



savedPos=JSON.parse(localStorage.getItem('PT'));
savedDam=JSON.parse(localStorage.getItem('DT'));
savedS=JSON.parse(localStorage.getItem('ST'));
savedE=JSON.parse(localStorage.getItem('ET'));
savedD=JSON.parse(localStorage.getItem('DeT'));


maxS=Math.max(savedPos.length, savedDam.length, savedS.length, savedE.length, savedD.length);

for(let i = 0; i <maxS; i++){
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
localStorage.setItem('PT',JSON.stringify(savedPos));
localStorage.setItem('DT',JSON.stringify(savedDam));
localStorage.setItem('ST',JSON.stringify(savedS));
localStorage.setItem('ET',JSON.stringify(savedE));
localStorage.setItem('DeT',JSON.stringify(savedD));




for(let i=0;i<maxS-1;i++){More1(i+1);k+=1;}


for(let i=0;i<savedPos.length;i++){


document.getElementsByClassName('LInpt1')[i].value=savedPos[i];
document.getElementsByClassName('LInpt2')[i].value=savedDam[i];
document.getElementsByClassName('DateInp1')[i].value=savedS[i];
document.getElementsByClassName('DateInp2')[i].value=savedE[i];
document.getElementsByClassName('DescrText')[i].value=savedD[i];

document.getElementsByClassName('ClientPosition')[i].innerHTML=document.getElementsByClassName('LInpt1')[i].value+", "+document.getElementsByClassName('LInpt2')[i].value;
document.getElementsByClassName('ClientDates')[i].innerHTML=document.getElementsByClassName('DateInp1')[i].value+' - '+document.getElementsByClassName('DateInp2')[i].value;
document.getElementsByClassName('ClientDescr')[i].innerHTML=document.getElementsByClassName('DescrText')[i].value;

Posdata[i]=savedPos[i];
Damdata[i]=savedDam[i];
Sdata[i]=savedS[i];
Edata[i]=savedE[i];
Descrdata[i]=savedD[i];

}




function UpdPos(idx){
    const a=document.getElementsByClassName('LInpt1')[idx].value;
    const b=document.getElementsByClassName('LInpt2')[idx].value;

    Posdata[idx]=a;
    Damdata[idx]=b;

    localStorage.setItem('PT',JSON.stringify(Posdata));
    localStorage.setItem('DT',JSON.stringify(Damdata));
    document.getElementsByClassName('ClientPosition')[idx].innerHTML=a+", "+b;

    UpdExperience(idx);
    
}

function UpdDate(idx){
    
    const a=document.getElementsByClassName('DateInp1')[idx].value;
    const b=document.getElementsByClassName('DateInp2')[idx].value;
    Sdata[idx]=a;
    Edata[idx]=b;
    localStorage.setItem('ST',JSON.stringify(Sdata));
    localStorage.setItem('ET',JSON.stringify(Edata));
    document.getElementsByClassName('ClientDates')[idx].innerHTML=a+' - '+b;
    UpdExperience(idx)
}

function UpdDescr(idx){
    Descrdata[idx]=document.getElementsByClassName('DescrText')[idx].value;
    document.getElementsByClassName('ClientDescr')[idx].innerHTML=document.getElementsByClassName('DescrText')[idx].value;
    localStorage.setItem('DeT',JSON.stringify(Descrdata));
    document.getElementById('ClientRez').style.height=500+document.getElementById('Exp_Edc').offsetHeight+'px';
    UpdExperience(idx);
}


function More(){
    k+=1;
    
    document.getElementById("mainDiv").innerHTML+=`
    <div id="Position">
    <div class="NameN">თანამდებობა</div>
    <div class="NameGrd">
        <input onkeyup="UpdPos(${k});PosVal(${k})" class="LInpt1">
        <img class="ErrImg1" src="images/Vector.png">
        </div>
    <div class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>

<div id="Damsaq">
    <div class="NameN">დამსაქმებელი</div>
    <div class="NameGrd">
            <input onkeyup="UpdPos(${k});DamVal(${k})" class="LInpt2">
            <img class="ErrImg2" src="images/Vector.png">
        </div>
    <div class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>
<div id="DateDiv">
        <div id="StartD">
            <div class="NameN">დაწყების რიცხვი</div>
            <input onchange="UpdDate(${k});DateVal1(${k})" class="DateInp1" type="date">
        </div>

        <div id="EndD">
            <div class="NameN">დამთავრების რიცხვი</div>
            <input onchange="UpdDate(${k});DateVal2(${k})" class="DateInp2" type="date">
        </div>
</div>


<div id="Descr">
    <div class="NameN">აღწერა</div>
    <textarea onkeyup="UpdDescr(${k})" class="DescrText"></textarea>
</div>
<div id="line2"></div>
   `;

   document.getElementsByClassName("ClientExpDivs")[0].innerHTML+=`
   <div class="ClientExp">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
   <div class="ClientPosition"></div>
   <div class="ClientDates"></div>
   <div class="ClientDescr"></div>
   <div class="line3"></div>
   `;
   console.log(document.getElementsByClassName('LInpt1').length);
   for(let j=0;j<document.getElementsByClassName('LInpt1').length-1;j++){
    
    if(Posdata[j]!=undefined)document.getElementsByClassName('LInpt1')[j].value=Posdata[j];
    if(Damdata[j]!=undefined)document.getElementsByClassName('LInpt2')[j].value=Damdata[j];
    if(Sdata[j]!=undefined)document.getElementsByClassName('DateInp1')[j].value=Sdata[j];
    if(Edata[j]!=undefined)document.getElementsByClassName('DateInp2')[j].value=Edata[j];
    if(Descrdata[j]!=undefined)document.getElementsByClassName('DescrText')[j].value=Descrdata[j];
}

   
   
};
function More1(n){
    
    document.getElementById("mainDiv").innerHTML+=`
    <div id="Position">
    <div class="NameN">თანამდებობა</div>
    <div class="NameGrd">
        <input onkeyup="UpdPos(${Number(n)});PosVal(${Number(n)})" class="LInpt1">
        <img class="ErrImg1" src="images/Vector.png">
        </div>
    
    <div class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>

<div id="Damsaq">
    <div class="NameN">დამსაქმებელი</div>
    <div class="NameGrd">
        <input onkeyup="UpdPos(${Number(n)});DamVal(${Number(n)})" class="LInpt2">
        <img class="ErrImg2" src="images/Vector.png">
        </div>
    <div class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>
<div id="DateDiv">
        <div id="StartD">
            <div class="NameN">დაწყების რიცხვი</div>
            <input onchange="UpdDate(${Number(n)});DateVal1(${Number(n)})" class="DateInp1" type="date">
        </div>

        <div id="EndD">
            <div class="NameN">დამთავრების რიცხვი</div>
            <input onchange="UpdDate(${Number(n)});DateVal2(${Number(n)})" class="DateInp2" type="date">
        </div>
</div>


<div id="Descr">
    <div class="NameN">აღწერა</div>
    <textarea onkeyup="UpdDescr(${Number(n)});DescrVal(${Number(n)})" class="DescrText"></textarea>
</div>
<div id="line2"></div>
   `;

   document.getElementsByClassName("ClientExpDivs")[0].innerHTML+=`
   <div class="ClientExp">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
   <div class="ClientPosition"></div>
   <div class="ClientDates"></div>
   <div class="ClientDescr"></div>
   <div class="line3"></div>
   `;
   
};

function UpdExperience(idx){
    obj={
    "position": Posdata[idx],
    "employer": Damdata[idx],
    "start_date": Sdata[idx],
    "due_date": Edata[idx],
    "description": Descrdata[idx]
};
    experiences[idx]=obj;
    console.log(JSON.parse(localStorage.getItem('experiences'))[idx]);
    localStorage.setItem("experiences",JSON.stringify(experiences));

}

document.getElementById('ClientRez').style.height=500+document.getElementById('Exp_Edc').offsetHeight+'px';
document.getElementById('Exp_Edc').innerHTML+=`<img id="star" src="/images/star.png" alt="">`