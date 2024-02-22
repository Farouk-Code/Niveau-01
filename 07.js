// Inverser une chaîne

let arguments = "";
let inverse = "";

if (process.argv.length < 3) {
    console.log("Erreur !");
} else {
    // Stocker la chaîne de caractère
    for (let i = 2; i < process.argv.length; i++) {
        if (i < process.argv.length - 1){
            arguments += (process.argv[i] + " ");
        } else {
            arguments += process.argv[i];
        }
    }

    for (let i = arguments.length - 1; i >= 0; i--) {
        inverse += arguments[i];
    }

    console.log(inverse);
}