import {toggleMode} from './module.js'

document.addEventListener("DOMContentLoaded", e =>{
    console.log("hello")
   // Récupérer l'élément bouton
const toggleButton = document.getElementById('toggle-mode');







// Écouter le clic sur le bouton
toggleButton.addEventListener('click', toggleMode);



})