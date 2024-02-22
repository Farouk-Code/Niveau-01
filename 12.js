// 24 to 12

let sequence = /^[0-9:]+$/;
let argument = "";
let argumentPart = "";
let heures = 0;
let minutes = 0;

function verifChaine(chaine) {
    return sequence.test(chaine);
}

if (!verifChaine(process.argv[2]) || process.argv.length != 3) {
    console.log("Erreur");
} else {
    argument = process.argv[2];
    argumentPart = argument.split(":");

    heures = parseInt(argumentPart[0], 10);
    minutes = parseInt(argumentPart[1], 10);

    if (heures > 12) {
        heures -= 12;
        if (heures > 9) {
            if (minutes > 9){
                console.log("Il est : " + heures + ":" + minutes + "PM");
            } else {
                console.log("Il est : " + heures + ":0" + minutes + "PM");
            }
        } else {
            if (minutes > 9){
                console.log("Il est : 0" + heures + ":" + minutes + "PM");
            } else {
                console.log("Il est : 0" + heures + ":0" + minutes + "PM");
            }
        }
    } else if (heures < 12){
        if (heures > 9) {
            if (minutes > 9) {
                console.log("Il est : " + heures + ":" + minutes + "AM");
            } else {
                console.log("Il est : " + heures + ":0" + minutes + "AM");
            }
        } else {
            if (minutes > 9) {
                console.log("Il est : 0" + heures + ":" + minutes + "AM");
            } else {
                console.log("Il est : 0" + heures + ":0" + minutes + "AM");
            }
        }
    } else if (heures === 12){
            if (minutes > 9) {
                console.log("Il est : " + heures + ":" + minutes + "PM");
            } else {
                console.log("Il est : " + heures + ":0" + minutes + "PM");
            }
    } else if (heures === 0) {
        heures = 12;
        if (minutes > 9) {
            console.log("Il est : " + heures + ":" + minutes + "AM");
        } else {
            console.log("Il est : " + heures + ":0" + minutes + "AM");
        }
    }
}