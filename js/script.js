/*
-costruiamo un ciclo che conta da 1 a 100
-dobbiamo verificare che il numero sia un multiplo di 3 o 5
-SE abbiamo un numero divisibile per 3 e per 5 
    -visualizza FizzBuzz
ALTRIMENTI SE divisibile per 3
    -display fizz al posto di 3 
ALTRIMENTI SE divisibile per 5
    -display buzz al posto di 5
ALTRIMENTI
    -display numero

tools
-dichiarazione variabili
    -variabile per il contatore
    -variabile per contenere fizz o buzz
-ciclo for con contatore condizione e ++
-condizione IF/ELSE per verificare la divisibilità
-modulo che riporta il resto della divisibilità per le verifiche
-operatore logico && per la divisibilità comune 3 e 5
-console.log per far visualizzare il messaggio del numero contato o di fizz buzz
*/

//inizializzazione, senza assegnazione della variabile, 
//variabile che potrei anche rendere di tipo blocco inserendola come prima riga nel ciclo
let FizzOrBuzzOrN;

//inizio ciclo for, da 1 a 100 compreso(<=)
for (let i = 1; i <= 100; i++) {
    //prima condizione che può essere anche solo %15 senza l'operatore logico come seconda soluzione possibile
    if (i % 3 === 0 && i % 5 === 0) {
        //assegnazione valore alla variabile globale, in base alla prima verifica
        FizzOrBuzzOrN = 'FizzBuzz';
        //altrimenti, seconda condizione verifichiamo la divisibilità per 3
    } else if (i % 3 === 0) {
        //assegnazione valore alla variabile globale, in base alla seconda verifica 
        FizzOrBuzzOrN = 'Fizz';
        //altrimenti, terza condizione verifichiamo la divisibilità per 5
    } else if (i % 5 === 0) {
        //assegnazione valore alla variabile globale, in base alla terza verifica
        FizzOrBuzzOrN = 'Buzz';
        //altrimenti, nessuna delle condizioni precedenti è veritiera
    } else {
        /*assegniamo il valore del contatore alla variabile globale da visualizzare, 
        in modo da non toccare il contatore, e ciò ci permette di fare un solo log finale */
        FizzOrBuzzOrN = i;
    }
    //log finale della conta da 1 a 100
    console.log(FizzOrBuzzOrN)
}





