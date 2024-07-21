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

// Code For Navbar
var homeSection = document.querySelector('#home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 150){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}

// Home Section Ends

// Send emails
(function(){
	emailjs.init({
	  publicKey: "4WEZfQJBI5HK7rFsM",
	  blockHeadless: true,
	  blockList: {
		// Block the suspended emails
		list: ['foo@emailjs.com', 'bar@emailjs.com'],
		// The variable contains the email address
		watchVariable: 'userEmail',
	  },
	  limitRate: {
		// Set the limit rate for the application
		id: 'app',
		// Allow 1 request per 10s
		throttle: 10000,
	  },
	});
	var templateParams = {
		name: 'James',
		notes: 'Check this out!',
	  };
    emailjs.send("service_lqsf4bu", "template_6wpj2sd", templateParams).then(
		(response) => {
			console.log('SUCCESS!', response.status, response.text);
		  },
		  (error) => {
			console.log('FAILED...', error);
		  },
	);
	
 })();
 