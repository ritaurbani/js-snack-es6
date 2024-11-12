// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

// 1.Comparare la current bike peso con il peso nel min
// 2.Dopo comparazione update value of min con current bike se ha effettivamente peso minore

const bici = [
    { nome: "Bianchi", peso: 7.4 },
    { nome: "Tarmac", peso: 6.8 },
    { nome: "Cervélo", peso: 6.7 },
    { nome: "Trek", peso: 6.5 },
    { nome: "EVO", peso: 7.1 }
];

let min = bici[0]

for (let i = 0; i < bici.length; i++) {
    const curBici = bici[i]
    console.log(curBici)
    if (curBici.peso < min) {
        min = curBici
        console.log(curBici)
    }
} console.log(min)