/* Mail */

/* Chiedi all’utente la sua email, */
const insertMail = prompt("Inserisci la tua email");
console.log(insertMail);




/* Creo una lista di mail valide */

const validMail = [
    "sr.lele13@libero.it" ,
    "macchia_gabriele13@gmail.com",
    "gabrielemacchia@libero.it",
    "ziopino@gmail.com",
    "provaprova@gmail.com",
]

let message = false;


for (let i = 0; i < validMail.length; i++) {
    const validMailElement = validMail[i];
    console.log(validMailElement);
    
    if (insertMail == validMailElement) {
        message = true ;
    }

}


let userMessage = document.querySelector("h1");

if (message = true) {

    userMessage.innerHTML = "Benvenuto"
    
} else {
userMessage.innerHTML = "Ops, qualcosa è andato storto"
}



/* controlla che sia nella lista di chi può accedere, */ 

/* stampa un messaggio appropriato sull’esito del controllo. */










/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. */

const generaButton = document.getElementById('btn_genera');

generaButton.addEventListener("click", function () {

    let userResult = Math.floor(Math.random() * 6 )
    document.getElementById('user').innerHTML = userResult
    console.log(userResult)

    let cpuResult = Math.floor(Math.random() * 6 )
    document.getElementById('cpu').innerHTML = cpuResult
    console.log(cpuResult)

    let pair = (userResult === cpuResult);
    let winner;

    if (userResult > cpuResult) {
        winner = "player"
    } else if (userResult > cpuResult) {
        winner = "cpu"
    } else {
        let userResult = Math.floor(Math.random() * 6 )
    document.getElementById('user').innerHTML = userResult
    console.log(userResult)

    let cpuResult = Math.floor(Math.random() * 6 )
    document.getElementById('cpu').innerHTML = cpuResult
    console.log(cpuResult)
    }

})
    




/* Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */



/* Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare

si ma noi cosa vogliamo fare?

torniamo a scrivere in italiano

proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" */