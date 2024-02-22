// Afficheur d'arguments

let arguments = process.argv;

for (let i = 2; i < arguments.length; i++) {
    console.log(arguments[i]);
}