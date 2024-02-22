// Division

if (process.argv.length < 4) {
    console.log("Erreur");
} else {
    if (isNaN(process.argv[2] || isNaN(process.argv[3]))) {
        console.log("Erreur 1");
    } else {
        let firstNumber = parseInt(process.argv[2]);
        let secondNumber = parseInt(process.argv[3]);
        let result = firstNumber/secondNumber;
        let modulo = firstNumber%secondNumber;

        if (Number.isInteger(result)) {
            console.log("Resultat : " + result);
            console.log("Reste : " + modulo);
        } else {
            console.log("Erreur 2");
        }
    }
}