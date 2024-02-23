// 12 to 24

let sequence = /^[0-9:]+(AM|PM)$/i;
let argument = process.argv[2];

function verifChaine(chaine) {
    return sequence.test(chaine);
}


if (!verifChaine(argument) || process.argv.length !== 3) {
    console.log("Erreur");
} else {
    argument = process.argv[2];
    let [temps, suffixe] = argument.match(/(\d+:\d+)([APMapm]{2})/).slice(1);

    let [heures, minutes] = temps.split(":").map(Number);

    if (suffixe.toUpperCase() === 'PM' && heures !== 12) {
        heures += 12;
    } else if (suffixe.toUpperCase() === 'AM' && heures === 12) {
        heures = 0;
    }

    console.log(`Il est : ${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
}
