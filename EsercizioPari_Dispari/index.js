/* Esercizio 2: Pari o dispari
Scrivi una funzione che controlli se un numero è pari o dispari.*/

function evenOrOdd(num){
    return num % 2 === 0;

}
// versione arrow function
 const isEvenOrOdd = (num)=>(num % 2 === 0);
//in alternativa const isEvenOrOdd = (num)=>{return num % 2 === 0; };

function main(){
    if(evenOrOdd(9)){
        console.log(`pari`);
    }
    else{
        console.log(`dispari`);
    }

    if(isEvenOrOdd(24)){
        console.log(`pari`);
    }
    else{
        console.log(`dispari`);
    }

}

main();