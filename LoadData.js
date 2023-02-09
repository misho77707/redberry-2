savedPos=JSON.parse(localStorage.getItem('PT'));
savedDam=JSON.parse(localStorage.getItem('DT'));
savedS=JSON.parse(localStorage.getItem('ST'));
savedE=JSON.parse(localStorage.getItem('ET'));
savedD=JSON.parse(localStorage.getItem('DeT'));

for(let i=0;i<savedPos.length-1;i++){
    document.getElementById("Exp_Edc").innerHTML+=`
   <div class=ClientExpDivs>
   <div class="ClientExp">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
   <div class="ClientPosition"></div>
   <div class="ClientDates"></div>
   <div class="ClientDescr"></div>
   <div class=Cline2></div>
   </div>
   `;
}
for(let i=0;i<savedPos.length;i++){
    document.getElementsByClassName('ClientPosition')[i].innerHTML=savedPos[i]+", "+savedDam[i];
document.getElementsByClassName('ClientDates')[i].innerHTML=savedS[i]+", "+savedE[i];
document.getElementsByClassName('ClientDescr')[i].innerHTML=savedD[i];
}