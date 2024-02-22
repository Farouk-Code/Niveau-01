// Taille d'une chaîne

let arguments = "";
let number = 0;

if (process.argv.length < 3) {
    console.log("Erreur !");
} else {
    // Stocker la chaîne de caractère
    for (let i = 2; i < process.argv.length; i++) {
        arguments += (process.argv[i] + " ");
    }

    for (caracters of arguments) {
        number++;
    }

    console.log(number - 1);
}