// Trié ou pas

let number = 0;
let nextNumber = 0;
let estTriee = true;

if (process.argv.length <= 3) {
    console.log("Rentrez une séquence valide !");
} else {
    for (let i = 2; i < process.argv.length; i++) {
        if (isNaN(process.argv[i])) {
            console.log('Il ne faut que des nombres !');
            break;
        } else {
            number = parseInt(process.argv[i]);
            if (i === process.argv.length) {
                nextNumber = number;
            } else {
                nextNumber = parseInt(process.argv[i + 1]);
            }

            if (number > nextNumber) {
                estTriee = false;
                break;
            }
        }
    }

    if (estTriee === true) {
        console.log("La liste est triéée !");
    } else {
        console.log("La liste n'est pas triéée...");
    }

}
