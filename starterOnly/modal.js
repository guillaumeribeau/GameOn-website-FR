function editNav() {
  let x = document.getElementById("myTopnav");
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
const closeBtn= document.getElementById("close-modal");
const btnSubmit= document.getElementById("submit");
const form = document.getElementById("form");

//selection de tous les inputs

const inputFirst = document.querySelector('input[name=first]');
const inputLast = document.querySelector('input[name=last]');
const inputEmail = document.querySelector('input[name=email]');
const inputDate = document.querySelector('input[name=birthdate]');
const inputQuant = document.querySelector('input[name=quantity]');
const inputLocation = document.querySelector('input[name=location]');
const inputConditions = document.querySelector('input[name=conditions]');

//selection de la id de la div validation 
let resultFirst = document.getElementById("first-validation");
let resultLast = document.getElementById("last-validation");
let resultEmail = document.getElementById("email-validation"); 
let resultBirth = document.getElementById("date-validation");
let resultQuant = document.getElementById("quant-validation");
let resultLocation = document.getElementById("location-validation");
let resultConditions = document.getElementById("conditions-validation");
let resultDate = document.getElementById("date-validation");


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

function displayNone(e) {
  // passer les id 
  e.style.display = "none";
}


// function afficher message d'erreur
function afficherMessage(inputdiv){
  inputdiv.style.display='inline-block';
}




/* mets une bordure rouge sur chaque champs */
const textC = document.querySelectorAll('.text-control');
textC.forEach(items=> {
items.style.border= '2px solid #FF4E60'});

// passe la bordure en vert si le champs est bien rempli
function borderGreen (indexDuChamp){
  indexDuChamp.style.border='2px solid green';
}

//regex
let regFirst = /[a-zA-Z]{2,64}/;
let regLast = /[a-zA-Z]{2,64}/;
let regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

/* ecoute la touche relaché et affiche message en consequence */

inputFirst.addEventListener('keyup', function(e) {
  // écouter touche relaché
    let value = e.target.value;
    if (value.match(regFirst)){
      // correspondance  
      borderGreen(textC[0]);
      displayNone(resultFirst);
    } else {
      afficherMessage(resultFirst);
      resultFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});

inputLast.addEventListener('keyup', function(e) {
     let value = e.target.value;
    if (value.match(regLast)) {
      displayNone(resultLast);
      borderGreen(textC[1]);
    } else {
      afficherMessage(resultLast);
      resultLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});
 
inputEmail.addEventListener('keyup', function(e) {
   let value = e.target.value;
    if (value.match(regEmail)) {
      displayNone(resultEmail);
      borderGreen(textC[2]);
    } else {
      afficherMessage(resultEmail);
      resultEmail.innerHTML = "Vous devez choisir une adresse électronique valide.";
    }
});


inputDate.addEventListener('change', function(e) {
  if (inputDate.value.length > 0) {
    // sup à 0 pas d'alerte
      displayNone(resultBirth);
      borderGreen(textC[3]);
     } else {
      afficherMessage(resultBirth);
      resultBirth.innerHTML = "Vous devez entrer votre date de naissance.";
     }
 });

 inputQuant.addEventListener('change', function(e) {
   // écouter changement d'état
  if (inputQuant.value.length > 0) {
    displayNone(resultQuant);
    borderGreen(textC[4]);
     } else {
      afficherMessage(resultQuant);
      resultQuant.innerHTML = "Merci renseigner le nombre de tournoi";
     }
 });

 inputConditions.addEventListener('change', e => {
  if(e.target.checked){
    displayNone(resultConditions);
  }
});



// acceptation des CGV 
document.getElementById("checkbox1").attributes["required"] = "";


// montrer une notification 
function notification () {
document.getElementById("note").style.display = "block";

}


// function pour verifier si le champ est vide et afficher message d'erreur 

function validation(){

  let inputCount = 0;
// initialisation du compteur
if(inputFirst.value.length == 0 || regFirst.test(inputFirst.value)==false){
afficherMessage(resultFirst);
resultFirst.innerHTML='Le champs prénom doit contenir au moins deux caractères';
inputCount++;
}

if (inputLast.value.length == 0 || regLast.test(inputLast.value)==false){
  afficherMessage(resultLast);
  resultLast.innerHTML='Le champs nom doit contenir au moins deux caractères';
  ;
  inputCount++;
  
}
if (inputEmail.value.length==0 || regEmail.test(inputEmail.value)==false){
  afficherMessage(resultEmail);
  resultEmail.innerHTML='Merci de saisir un email valide';
  inputCount++;
}

if (inputDate.value.length==0) {
    afficherMessage(resultDate);
  resultDate.innerHTML='Veuillez saisir votre date de naissance';
  inputCount++;

  if (inputQuant.value.length == 0) {
    afficherMessage(resultQuant);
    resultQuant.innerHTML = "Vous devez renseigner le nombre de tournoi";
    inputCount++;
    } 
  
}
if (inputConditions.checked==false){
  afficherMessage(resultConditions);
  resultConditions.innerHTML='Vous devez accepter les conditions générales';
  inputCount++;
  
  if (inputLocation.checked== false) {
    // fonction appelante count 
    afficherMessage(resultLocation);
    resultLocation.innerHTML = "Vous devez choisir une option.";
    inputCount++;
  } 
}
else if (inputCount==0) {
  // fermer, envoyer not, clean champs
  modalbg.style.display = "none";
  notification();
  form.reset();
} 

}





// bouton 
form.addEventListener("submit", e => {
  e.preventDefault();
  validation();
});

 





// fermer la notification de reservation bien recue

const croixNotification = document.getElementById("croix-notification");
const btnNotification = document.getElementById('btn-notification');
const notificationClose = document.getElementById('note')

btnNotification.addEventListener('click', function(){
  notificationClose.style.display='none';
  
});

croixNotification.addEventListener('click',function(){
  notificationClose.style.display='none';
})

