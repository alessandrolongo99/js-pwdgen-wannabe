const myName = prompt('Inserisci nome:');
const lastName = prompt('Inserisci cognome:');
const color = prompt('Inserisci colore preferito:');
const randNum = 7;

const password = myName + lastName + color + randNum;

document.getElementById('password').innerHTML = password;