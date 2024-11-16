/*
* Esercizio 3: Fattoriale
Scrivi una funzione che calcoli il fattoriale di un numero intero non negativo
* */


function fattoriale (num){
    if(num === 0){
        return 1;
    }
    else{ return num * fattoriale(num-1);}
}

const factorial = (num)=>{
    if(num === 0){
        return 1;
    }
    else{ return num * factorial(num-1);}
}

function main(){
    let num1= 3;
    let num2= 5;

    console.log(`Il fattoriale di ${num1} è ${fattoriale(num1)}`);
    console.log(`Il fattoriale di ${num2} è ${factorial(num2)}`);
}

main();