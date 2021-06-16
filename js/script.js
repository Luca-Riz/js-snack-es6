// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// crea array di oggetti
// const bici = [
//     {
//         nome: 'specialized',
//         peso: 10
//     },
//     {
//         nome: 'wilier',
//         peso: 7
//     },
//     {
//         nome: 'cannondale',
//         peso: 3
//     }
// ];

// // Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// let biciLeggera = bici[0];

// for (let i=1; i<bici.length; i++){
//     if (biciLeggera.peso > bici[i].peso){
//         biciLeggera = bici[i]
//     }
// }
// // console.log(biciLeggera);

// const {nome, peso} = biciLeggera; //destructuring
// console.log( /*literal*/
//     `
//     La bici che pesa meno è la ${nome} che pesa ${peso} kg.
//     `
// );


// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.

const squadre = [
    {
        nomeS: 'milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeS: 'juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nomeS: 'inter',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

const randomNum = () => Math.floor(Math.random()*10); /* arrow function */

const nomeFalli = [];

for (let k in squadre){
    squadre[k].puntiFatti = randomNum();
    squadre[k].falliSubiti = randomNum();
    // console.log(squadre); 

    const {nomeS, falliSubiti} = squadre[k]; /*destructuring */

    nomeFalli.push({nomeS, falliSubiti});
}

console.log(nomeFalli);