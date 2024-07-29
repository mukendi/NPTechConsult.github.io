// Script File

// Home Section Starts
const hamburgerBtn  = document.querySelector('.main-navbar .hamburger-btn');
const navList       = document.querySelector('.main-navbar .nav-list');
const navListItems  = document.querySelectorAll('.nav-list li a');
const sendMessage   = document.querySelector('#send-message');
const myForm        = document.querySelector('#myForm');
const errorMessage  = document.querySelector("#errorMessage");
const successMsg    = document.querySelector("#successMessage");
const btnSend       = document.querySelector("#send")
const  btnViewCourse = document.querySelector("#btn-view-courses");




hamburgerBtn.addEventListener('click', activeClass);

btnSend.addEventListener('click', function(e){
  e.preventDefault();

  if ( document.querySelector("#message").value !== "" ||
        document.querySelector("#nom").value !== "" ||
        document.querySelector("#email").value !== "" ||
        document.querySelector("#numero").value !== "" ||
        document.querySelector("#obj").value !== "") 
    {

          Email.send({
            Host : "smtp.elasticemail.com",
            Username : "maychar1482@gmail.com",
            Password : "58B0B4646D84AE00F55BA084DFF601307355",
            To : 'maychar1482@gmail.com',
            From : "maychar1482@gmail.com",
            Subject : "Nom : " + 
                      document.querySelector("#nom").value + " | Object : " +
                      document.querySelector("#obj").value + " | Number : " + 
                      document.querySelector("#numero").value + " | Email : " + 
                      document.querySelector("#email").value,
            Body : document.querySelector("#message").value
        }).then(
          message =>{
            successMsg.innerHTML = "Message envoyé";
            setTimeout(() =>{
               successMsg.innerHTML = "";
               document.querySelector("#nom").value = "";
               document.querySelector("#obj").value = "";
               document.querySelector("#numero").value = "";
               document.querySelector("#email").value = "";
               document.querySelector("#message").value = "";
            }, 500)
          }
          
        ).catch(error=>{
          errorMessage.innerHTML = error
        });

    }
    else{
      errorMessage.innerHTML = "Veuillez remplir tous les champs !"
      setTimeout(()=>{
       errorMessage.innerHTML = ""
      }, 1000)
      
    }
    
}, false);



function activeClass(){
	hamburgerBtn.classList.toggle('active');
	navList.classList.toggle('active');
}

for(var i = 0; i < navListItems.length; i++){
	navListItems[i].addEventListener('click', listItemClicked);
}

function listItemClicked(){
	hamburgerBtn.classList.remove('active');
	navList.classList.remove('active');
}

/*
btnViewCourse.addEventListener('click', function(e){
  document.location.href = "../../pages/formations/left-list-formations.html";
})


*/