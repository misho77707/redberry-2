
function UpdName(){
    document.getElementById('ClientName').innerHTML=document.getElementById('NInp').value+" "+document.getElementById('SNInp').value;
    localStorage.setItem("Name",document.getElementById('NInp').value)
}
function EraseAll(){
    localStorage.clear();
    location.href="/index.html";
}
function UpdSName(){
    document.getElementById('ClientName').innerHTML=document.getElementById('NInp').value+" "+document.getElementById('SNInp').value;
    localStorage.setItem("SurName",document.getElementById('SNInp').value)
}
function UpdAbout(){
     document.getElementById('ClientAbout').innerHTML=`<p>${document.getElementById('AboutInp').value}</p>
    <div id='Cline'></div>`;
    if(document.getElementById('AboutInp').value==""){
        document.getElementById("ClientAbt").style.visibility="hidden";
        document.getElementById("Cline").style.opacity=0;
    }
    else{
        document.getElementById("ClientAbt").style.visibility="visible";
        document.getElementById("Cline").style.opacity=1;
    }
   
    
    localStorage.setItem("About",document.getElementById('AboutInp').value)
}
function UpdEmail(){
    const a=document.getElementById('EInpt').value;
    if(a==""){
        document.getElementById('At_img').style.visibility="hidden";
    }
    else{
        document.getElementById('At_img').style.visibility="visible";
    }
    document.getElementById('ClientEmail').innerHTML=a;
    localStorage.setItem("Email",a);
}
function UpdPhone(){
    const a=document.getElementById('MInpt').value;
    if(a==""){
        document.getElementById('Phone_img').style.visibility="hidden";
    }
    else{
        document.getElementById('Phone_img').style.visibility="visible";
    }
    document.getElementById('ClientPhone').innerHTML=a;
    localStorage.setItem("Mobile",a);
}

const image_input = document.getElementById('image_input');
    var uploaded_image = "";

    image_input.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", () =>{
            uploaded_image = reader.result;
            document.getElementById("ClientPhoto").style.backgroundImage = `URL(${uploaded_image})`;
            localStorage.setItem('Photo', `URL(${uploaded_image})`)
        });
        reader.readAsDataURL(this.files[0]);
    })

document.getElementById('NInp').value=localStorage.getItem("Name");
document.getElementById('SNInp').value=localStorage.getItem("SurName");
document.getElementById('AboutInp').value=localStorage.getItem("About");
document.getElementById('EInpt').value=localStorage.getItem("Email");
document.getElementById('MInpt').value=localStorage.getItem("Mobile");

document.getElementById("ClientPhoto").style.backgroundImage=localStorage.getItem("Photo")
UpdEmail();
UpdName();
UpdSName();
UpdAbout();
UpdPhone();