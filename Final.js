document.getElementById('ClientName').innerHTML=localStorage.getItem("Name") + " "+ localStorage.getItem("SurName");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientEmail').innerHTML=localStorage.getItem("Email");
document.getElementById('ClientPhone').innerHTML=localStorage.getItem("Mobile");
document.getElementById('ClientAbout').innerHTML=`<p>${localStorage.getItem("About")}</p>
<div class='line4'></div>`;
document.getElementById("ClientPhoto").style.backgroundImage =localStorage.getItem("Photo");

function EraseAll(){
    localStorage.clear();
    location.href="/index.html";
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
    
de=["საშუალო სკოლის დიპლომი","ზოგადსაგანმანათლებლო დიპლომი","ბაკალავრი","მაგისტრი","დოქტორი","ასოცირებული ხარისხი","სტუდენტი",'კოლეჯი(ხარისიხს გარეშე)','სხვა'];
degree_id=[];
institute=JSON.parse(localStorage.getItem('EdcT'))
degree=JSON.parse(localStorage.getItem('DegT'))
j=0;
for(let i=0;i<degree.length;i++){
    while(degree[i]!=de[j]){
        j++;
    }
    degree_id[i]=j;
    j=0;
}

due_date2=JSON.parse(localStorage.getItem('DueT'))
description2=JSON.parse(localStorage.getItem('DescrT'))

for(let i=0;i<institute.length;i++){
    let obj={
        "institute": institute[i],
        "degree_id": degree_id[i],
        "due_date": due_date2[i],
        "description":description2[i]
    }
    educations.push(obj);
}
image=String(localStorage.getItem('Photo'));

image=image.slice()
//27
console.log(image)
image=image.substring(0,image.length-1);
// image=image.blob();
image = image.replace("\\", "/");
imgT='image.jpeg'
// console.log(base64toBlob(image,imgT));
image=`https://resume.redberryinternship.ge/`+image;
about_me=localStorage.getItem('About');


obj={
    "name": Name,
    "surname": surname,
    "email": email,
    "phone_number": phone_number,
    "experiences": experiences,
    "educations": educations,
    "image": a,
    "about_me": about_me
  }


  var form_data = new FormData();

  for ( var key in obj ) {
      form_data.append("rame", "rameshi");
      console.log(key, obj[key])
  }
  form_data=obj;
  console.log(typeof(form_data))
  

    async function Send(){
   await axios.post(`https://resume.redberryinternship.ge/api/cvs`,
    form_data
    )
            .then(function(response){
                console.log(response.data)
            })
            .catch(function(error){
                console.log(error)
            })}
            Send();