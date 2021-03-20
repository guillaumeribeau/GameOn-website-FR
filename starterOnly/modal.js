function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn= document.querySelector(".close");
const inscriptionValid=document.getElementById("inscription_valid");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click",closeModal);
  
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal(){
  modalbg.style.display='none';
}


// message de validation du formulaire

inscriptionValid.addEventListener('submit',function(e){
  e.preventDefault();
  alert('Bravo le formulaire à bien été envoyé !')
  
})



//creation de span pour les div class=dataform
const createSpan = document.createElement ('span');
const divDataForm = document.querySelector(".formData");
divDataForm.appendChild(createSpan);


//regex prenom 
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêëçîôï] + ([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêëçîôï]+)/;

// verification du champ prenom

const prenom = document.getElementById ('first'); 
let btnSubmit = document.getElementById('submit_valid');



btnSubmit.addEventListener('click',prenom_v);

function prenom_v(e) {
  if (prenom.validity.valueMissing) {
    e.preventDefault();
    let contentSpanVide= document.createTextNode ('Le champ prénom est requis');
    createSpan.appendChild(contentSpanVide);
    createSpan.style.color='red';
    createSpan.style.fontSize='14px'; 
    
  }
  else if (prenomValid.test(prenom.value)==false){
    e.preventDefault();
    let contentSpanError = document.createTextNode ('le prénom doit contenir au moins deux caractères');
    createSpan.appendChild(contentSpanError);

  }
}



