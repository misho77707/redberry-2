savedPos=JSON.parse(localStorage.getItem('PT'));
savedDam=JSON.parse(localStorage.getItem('DT'));
savedS=JSON.parse(localStorage.getItem('ST'));
savedE=JSON.parse(localStorage.getItem('ET'));
savedD=JSON.parse(localStorage.getItem('DeT'));

savedEdc=JSON.parse(localStorage.getItem('EdcT'))
savedDeg=JSON.parse(localStorage.getItem('DegT'))
savedDue=JSON.parse(localStorage.getItem('DueT'))
savedDescr=JSON.parse(localStorage.getItem('DescrT'))

for(let i=0;i<savedPos.length;i++){
    document.getElementsByClassName("ClientEdcDiv")[0].innerHTML+=`
   
   <div class="ClientExp">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
   <div class="ClientPosition"></div>
   <div class="ClientDates"></div>
   <div class="ClientDescr"></div>
   <div class='line3'></div>
   
   `;
}
for(let i=0;i<savedPos.length;i++){
    document.getElementsByClassName('ClientPosition')[i].innerHTML=savedPos[i]+", "+savedDam[i];
document.getElementsByClassName('ClientDates')[i].innerHTML=savedS[i]+", "+savedE[i];
document.getElementsByClassName('ClientDescr')[i].innerHTML=savedD[i];
}

for(let i=0;i<savedEdc.length;i++){
    document.getElementsByClassName("ClientEdcDiv")[0].innerHTML+=`
    <div class="ClientExp">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
    <div class="ClientSchool"></div>
    <div class="ClientEDate"></div>
    <div class="ClientEDescr"></div>
    <div class="line3"></div>`
}
for(let i=0;i<savedEdc.length;i++){
    document.getElementsByClassName('ClientSchool')[i].innerHTML=savedEdc[i]+", "+savedDeg[i];
document.getElementsByClassName('ClientEDate')[i].innerHTML=savedDue[i];
document.getElementsByClassName('ClientEDescr')[i].innerHTML=savedDescr[i];
}
document.getElementById('Exp_Edc').innerHTML+=`<img id="star" src="/images/star.png" alt="">`
document.getElementById('ClientRez').style.height=500+document.getElementById('Exp_Edc').offsetHeight+'px';
document.getElementById("ClientAbout").innerHTML+='<div class="line4"></div>';

console.log(document.getElementById('star').offsetTop)