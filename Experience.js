document.getElementById('ClientName').innerHTML=localStorage.getItem("Name") + " "+ localStorage.getItem("SurName");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientPhone').innerHTML=localStorage.getItem("Mobile");
document.getElementById('ClientAbout').innerHTML=`<p>${localStorage.getItem("About")}</p>
<div id='Cline'></div>`;
document.getElementById("ClientPhoto").style.backgroundImage =localStorage.getItem("Photo")

function UpdPos(){
    const a=document.getElementsByClassName('LInpt')[0].value;
    const b=document.getElementsByClassName('LInpt')[1].value;
    document.getElementById('ClientPosition').innerHTML=a+", "+b;
    
}
function UpdDate(){
    const a=document.getElementsByClassName('DateInp')[0].value;
    const b=document.getElementsByClassName('DateInp')[1].value;
    localStorage.setItem('StartDate')=a;
    localStorage.setItem('EndDate')=b;
    document.getElementById('ClientDates').innerHTML=a+' - '+b;
}
function UpdDescr(){
    document.getElementById('ClientDescr').innerHTML=document.getElementById('DescrText').value
}
function More(){
    document.getElementById("mainDiv").innerHTML+=`
    <div id="Position">
    <div class="NameN">თანამდებობა</div>
    <input class="LInpt">
    <div class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>

<div id="Damsaq">
    <div class="NameN">დამსაქმებელი</div>
    <input class="LInpt">
    <div class="Vld">მინიმუმ 2 სიმბოლო</div>
</div>
<div id="DateDiv">
        <div id="StartD">
            <div class="NameN">დაწყების რიცხვი</div>
            <input class="DateInp" type="date">
        </div>

        <div id="EndD">
            <div class="NameN">დამთავრების რიცხვი</div>
            <input class="DateInp" type="date">
        </div>
</div>


<div id="Descr">
    <div class="NameN">აღწერა</div>
    <textarea id="DescrText"></textarea>
</div>
<div id="line2"></div>
   `
}
