document.getElementById('ClientName').innerHTML=localStorage.getItem("Name") + " "+ localStorage.getItem("SurName");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientPhone').innerHTML=localStorage.getItem("Mobile");
document.getElementById('ClientAbout').innerHTML=`<p>${localStorage.getItem("About")}</p>
<div class='line4'></div>`;
document.getElementById("ClientPhoto").style.backgroundImage =localStorage.getItem("Photo");

function EraseAll(){
    localStorage.clear();
    location.href="index.html";
}
Name=localStorage.getItem('Name');
surname=localStorage.getItem('SurName');
email=localStorage.getItem('Email');
phone_number=localStorage.getItem('Mobile');
phone_number = phone_number.replace(/\s/g, '');

position=JSON.parse(localStorage.getItem('PT'));
employer=JSON.parse(localStorage.getItem('DT'))
start_date=JSON.parse(localStorage.getItem('ST'))
due_date=JSON.parse(localStorage.getItem('ET'))
description1=JSON.parse(localStorage.getItem('DeT'));

experiences=[];
educations=[];

for(let i=0;i<position.length;i++){
    let obj={
        "position": position[i],
        "employer": employer[i],
        "start_date": start_date[i],
        "due_date": due_date[i],
        "description": description1[i]
    }
    experiences.push(obj);
}
    

institute=JSON.parse(localStorage.getItem('EdcT'))
degree=JSON.parse(localStorage.getItem('DegT'))
due_date2=JSON.parse(localStorage.getItem('DueT'))
description2=JSON.parse(localStorage.getItem('DescrT'))

for(let i=0;i<institute.length;i++){
    let obj={
        "institute": institute[i],
        "degree": degree[i],
        "due_date": due_date2[i],
        "description":description2[i]
    }
    educations.push(obj);
}
image=localStorage.getItem('Photo');
about_me=localStorage.getItem('About')

console.log(experiences);
obj={
    "name": Name,
    "surname": surname,
    "email": email,
    "phone_number": phone_number,
    "experiences": experiences,
    "educations": educations,
    "image": image,
    "about_me": about_me
  }
  console.log(obj);
  fetch('https://resume.redberryinternship.ge/api/cvs', {
    method: 'POST',
    body: JSON.stringify({obj})
})
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.error('Error:', error);
    });