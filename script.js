console.log("JS OK");

//! -------------------------------ESERCIZIO 1-------------------------------------
// -------------TRACCIA-----------

// ESERCIZIO 1 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato
// -----------------------------------------------------------------


// ELEMENTI DAL DOM
const player = document.getElementById ("player");
console.log (player);

const cpu = document.getElementById ("cpu");
console.log(cpu);

const resultPrint = document.getElementById ("result-print");
console.log(resultPrint);


// MINI GAME DICE
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


const userWins = "User Wins!";
const cpuWins = "CPU Wins!";
const draw = "DRAW !";

player.innerHTML += userNumber;
cpu.innerHTML += cpuNumber;


if (userNumber > cpuNumber){
    resultPrint.innerHTML += userWins;
    // alert ("Player wins !");
}
else if(userNumber === cpuNumber) {
    resultPrint.innerHTML += draw;

    // alert (" Draw !");
}
else {
    resultPrint.innerHTML += cpuWins;
    // alert (" CPU wins !");
}



//! -------------------------------ESERCIZIO 2-------------------------------------

// ESERCIZIO 2 - Finta Login
// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Cosa devo controllare esattamente?

