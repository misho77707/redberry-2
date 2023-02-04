
function UpdName(){
    document.getElementById('ClientName').innerHTML=document.getElementById('NInp').value+" "+document.getElementById('SNInp').value;

}
function UpdSName(){
    document.getElementById('ClientName').innerHTML=document.getElementById('NInp').value+" "+document.getElementById('SNInp').value;
}
const image_input = document.getElementById('image_input');
    var uploaded_image = "";

    image_input.addEventListener("change", function(){
        const reader = new FileReader();
        reader.addEventListener("load", () =>{
            uploaded_image = reader.result;
            document.getElementById("ClientPhoto").style.backgroundImage = `URL(${uploaded_image})`;
        });
        reader.readAsDataURL(this.files[0]);
    })
function locfun(){
    localStorage.setItem("Name",document.getElementById('NInp').value)
    localStorage.setItem("SurName",document.getElementById('SNInp').value)
}
document.getElementById('NInp').value=localStorage.getItem("Name");
document.getElementById('SNInp').value=localStorage.getItem("SurName");
UpdName();
UpdSName();