// Pair ou Impair

let number = process.argv[2];

if (process.argv.length !== 3) {
    console.log("Rentrez un nombre !");
} else {
    if (isNaN(number)) {
        console.log("Rentrez un nombre valide !")
    } else {
        number = parseInt(number);
        if (number % 2 === 0) {
            console.log("Pair");
        } else {
            console.log("Impair");
        }
    }

}
