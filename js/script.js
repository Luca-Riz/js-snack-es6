// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// crea array di oggetti
const bici = [
    {
        nome: 'specialized',
        peso: 10
    },
    {
        nome: 'wilier',
        peso: 7
    },
    {
        nome: 'cannondale',
        peso: 3
    }
];

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let biciLeggera;
for (let i=0; i<bici.length; i++){
    let {nome, peso} = bici[i];

    // console.log(nome, peso);
    console.log(peso);

    // biciLeggera = peso[0];
    // console.log(biciLeggera);

    // if(biciLeggera > peso[i]){
    //     biciLeggera = peso[i]
    // }
}
// console.log(biciLeggera);





// Snack2 Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. (Utilizzate le arrow function). Infine usando la destrutturazione creiamo un nuovo array i cui elementi sono sempre degli oggetti che contengono solo nomi e falli subiti. Stampiamo tutto in console.