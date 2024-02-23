// Racine carrée

function calculRacine (nombre) {
    if (nombre < 0) {
        return "Pas de chiffre négatif...";
    } else {
        let estimation = nombre / 2;
        let precision = 0.0001;

        while ((estimation * estimation - nombre) > precision) {
            estimation = 0.5 * (estimation + nombre / estimation)
        }
        return estimation;
    }
}

let nombre = 0;

if (process.argv.length != 3 || isNaN(process.argv[2])) {
    console.log("Il faut un chiffre...");
} else {
    nombre = process.argv[2];
    console.log(parseInt(calculRacine(nombre)));
}