console.log("JS OK");

// -------------TRACCIA-----------

// ESERCIZIO 1 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato
// -----------------------------------------------------------------
// ESERCIZIO 2 - Finta Login
// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Cosa devo controllare esattamente?


//! -------------------------------ESERCIZIO 1-------------------------------------


const randomUser = Math.random();
console.log(randomUser + "random")

const randomCpu = Math.random();
console.log(randomCpu + "random")

const max = 6;
const min = 1;

let userNumber =  Math.floor( randomUser * ( max + 1 - min)) + min;
console.log(userNumber + "userNumber");

let cpuNumber = Math.floor( randomCpu * ( max + 1 - min)) + min;
console.log(cpuNumber + "cpuNumber");

if (userNumber > cpuNumber){
    alert ("Player wins !");
}
else if(userNumber === cpuNumber) {
    alert (" Draw !");
}
else {
    alert (" CPU wins !");
}