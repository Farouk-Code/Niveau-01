function estPremier(nombre) {
    if (!parseInt(nombre) || nombre <= 1) {
        return "Le nombre doit être un entier positif.";
    }

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return nombre + " n'est pas un nombre premier.";
        }
    }

    return nombre + " est un nombre premier.";
}

let argument = parseInt(process.argv[2]);

console.log(estPremier(argument));