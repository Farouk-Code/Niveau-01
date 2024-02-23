// 24 to 12

let sequence = /^[0-9:]+$/;
let argument = process.argv[2];
let periode = "";

function verifChaine(chaine) {
    return sequence.test(chaine);
}

function afficheHeure (heures, minutes, periode) {
    return `Il est : ${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${periode}`;
}

if (!verifChaine(argument) || process.argv.length != 3) {
    console.log("Erreur");
} else {
    let [heures, minutes] = argument.split(':').map(Number);

    if (heures > 12) {
        heures -= 12;
        periode = "PM";
        console.log(afficheHeure(heures, minutes, periode));
    } else if (heures < 12){
        periode = "AM";
        console.log(afficheHeure(heures, minutes, periode));
    } else if (heures === 0) {
        heures = 12;
        periode = "AM";
        console.log(afficheHeure(heures, minutes, periode));
    } else if (heures === 12) {
        periode = "PM";
        console.log(afficheHeure(heures, minutes, periode));
    }
}