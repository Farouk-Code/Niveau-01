// Valeur du milieur (trouver la Suisse)

let nbOne = 0;
let nbTwo = 0;
let nbThree = 0;

if (process.argv.length < 3 || process.argv.length > 5) {
    console.log("Erreur !");
} else {
    if (isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])) {
        console.log("Il faut 3 nombres");
    } else {
        nbOne = parseInt(process.argv[2]);
        nbTwo = parseInt(process.argv[3]);
        nbThree = parseInt(process.argv[4]);

        if ((nbOne < nbTwo && nbOne > nbThree) || (nbOne > nbTwo && nbOne < nbThree)) {
            console.log(nbOne);
        } else if ((nbTwo < nbOne && nbTwo > nbThree) || (nbTwo > nbOne && nbTwo < nbThree)) {
            console.log(nbTwo);
        } else if (nbOne == nbTwo || nbOne == nbThree || nbTwo == nbThree) {
            console.log("Erreur !")
        } else {
            console.log(nbThree)
        }
    }
}