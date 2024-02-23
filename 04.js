// Alphabet à partir de

let tableauAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let argument = process.argv[2];
let resultat = '';

if (argument.length > 1 || !isNaN(argument)) {
    console.log("Erreur !");
}

for (let i = 0; i < tableauAlphabet.length; i++) {
    if (tableauAlphabet[i] === argument) {
        for (let x = i; x < 25; x++) {
            resultat += tableauAlphabet[x];
        }
    }
}

console.log(resultat)