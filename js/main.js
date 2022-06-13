let myName = prompt('Inserisci nome:');
let lastName = prompt('Inserisci cognome:');
let color = prompt('Inserisci colore preferito:');

let password = myName + lastName + color;

document.getElementById('password').innerHTML = password;