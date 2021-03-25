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
const closeBtn= document.querySelector(".close");
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



inputFirst.addEventListener('keyup', function(e) {
  // écouter touche relaché
    let regFirst = /[a-zA-Z]{2,64}/;
    let value = e.target.value;
    if (value.match(regFirst)){
      // correspondance  
      displayNone(resultFirst);
    } else {
      resultFirst.style.display = "inline-block";
      resultFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});


inputLast.addEventListener('keyup', function(e) {
    let regLast = /[a-zA-Z]{2,64}/;
    let value = e.target.value;
    if (value.match(regLast)) {
      displayNone(resultLast);
    } else {
      resultLast.style.display = "inline-block";
      resultLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
});
 
inputEmail.addEventListener('keyup', function(e) {
    let regEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    let value = e.target.value;
    if (value.match(regEmail)) {
      displayNone(resultEmail);
    } else {
      resultEmail.style.display = "inline-block";
      resultEmail.innerHTML = "Vous devez choisir une adresse électronique est valide.";
    }
});


inputDate.addEventListener('change', function(e) {
  if (inputDate.value.length > 0) {
    // sup à 0 pas d'alerte
      displayNone(resultBirth);
     } else {
      resultBirth.style.display = "inline-block";
      resultBirth.innerHTML = "Vous devez entrer votre date de naissance.";
     }
 });

 inputQuant.addEventListener('change', function(e) {
   // écouter changement d'état
  if (inputQuant.value.length > 0) {
    displayNone(resultQuant);
     } else {
      resultQuant.style.display = "inline-block";
      resultQuant.innerHTML = "Merci de compléter ce champ";
     }
 });

 inputConditions.addEventListener('change', e => {
  if(e.target.checked){
    displayNone(resultConditions);
  }
});

function countLocations(){
  let theLocation = document.getElementsByClassName("location"),
      i,
      count = 0;
  for (i = 0; i < theLocation.length; i++){
    // vérifier chacune des villes
      if (theLocation[i].checked){
          count++;
      } 
  }
  return count;
  // fin de l'exécution, valeur à renvoyer à la fonction appelante
};

document.querySelectorAll('.location').forEach(item => {
  // tableau location -> écoute item -> état de e 
  item.addEventListener('change', e => {
    if(e.target.checked){
      displayNone(resultLocation);
    }
  })
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
if(inputFirst.value.length == 0){
resultFirst.style.display='inline-block'
inputFirst.style.backgroundColor='red';
resultFirst.innerHTML='veuillez remplir le champ prénom';
inputCount++;
}

if (inputLast.value.length == 0) {
  resultLast.style.display = "inline-block";
  inputLast.style.backgroundColor='red';
  resultLast.innerHTML='veuillez remplir le champ nom';
  inputCount++;
  
}
if (inputEmail.value.length==0){
  resultEmail.style.display='inline-block';
  inputEmail.style.border='2px red solid';
  resultEmail.innerHTML='Merci de saisir un email valide';
  inputCount++;
}

if (inputDate.value.length==0) {
  resultDate.style.display='inline-block';
  inputDate.style.backgroundColor='red';
  resultDate.innerHTML='Veuillez saisir votre date de naissance';
  inputCount++;

  if (inputQuant.value.length == 0) {
    resultQuant.style.display = "inline-block";
    resultQuant.innerHTML = "Vous devez renseigner le nombre de tournoi";
    inputCount++;
    } 
  
}
if (inputConditions.checked==false){
  resultConditions.style.display='inline-block';
  inputConditions.style.backgroundColor='red';
  resultConditions.innerHTML='Vous devez accepter les conditions générales';
  inputCount++;
  
  if (countLocations() == 0) {
    // fonction appelante count 
    resultLocation.style.display = "inline-block";
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

 

