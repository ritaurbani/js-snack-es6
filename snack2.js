// Snack2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const teams = [
    { nome: "Juventus", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
    { nome: "Inter", punti: 0, falliSubiti: 0 },
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 }
];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


for (let i = 0; i < teams.length; i++) {
    const curTeams = teams[i];
    console.log(curTeams)
    curTeams.punti = randomInt(1, 30)
    curTeams.falliSubiti = randomInt(1, 30)

}

console.table(teams)

// New Array

let newArray = []

for (let i = 0; i < teams.length; i++) {

    const curTeams = teams[i];

    const newTeam = {
        nome: curTeams.nome,
        falliSubiti: curTeams.falliSubiti
    };

    newArray.push(newTeam)

}

console.table(newArray)

