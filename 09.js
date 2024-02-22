// Puissance d'un nombre

let nbOne = 0;
let nbTwo = 0;
let result = 1;

if (process.argv.length < 3 || process.argv.length > 4) {
    console.log("Erreur !");
} else {
    if (isNaN(process.argv[2]) || isNaN(process.argv[3])) {
        console.log("Il faut 2 nombres !");
    } else {
        nbOne = parseInt(process.argv[2]);
        nbTwo = parseInt(process.argv[3]);

        if (nbTwo <= 0) {
            console.log("Erreur 2 !");
        } else {
            // console.log(nbTwo);
            for (let i = 0; i < nbTwo; i++) {
                result = result * nbOne;
            }
            console.log(result);
        }
    }
}