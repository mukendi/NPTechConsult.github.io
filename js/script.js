// Script File

// Home Section Starts
const hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn');
const navList = document.querySelector('.main-navbar .nav-list');
const navListItems = document.querySelectorAll('.nav-list li a');
const sendMessage = document.querySelector('#send-message');
const form        = document.querySelector('.newsletter');
hamburgerBtn.addEventListener('click', activeClass);


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
 Email.send({
    Host : "smtp.elasticemail.com",
    Username : "maychar1482@gmail.com",
    Password : "58B0B4646D84AE00F55BA084DFF601307355",
    To : 'maychar1482@gmail.com',
    From : "maychar1482@gmail.com",
    Subject : "Test mailling",
    Body : "Message sending!"
}).then(
  message => alert(message)
).catch(error=>{
	alert(error)
});
*/