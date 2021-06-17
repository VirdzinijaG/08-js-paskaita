"use strict"

// Kitas budas aprasyti funkcija

// function dalyba(sk1, sk2) {
//     let rezultatas;
//     rezultatas = sk1 / sk2;

//     return rezultatas;
// }




// apsirasom kintamaji
// mes jam priskiriam kazka
// galim pakeisti kintamojo reiksme
// ir kintamaji isvedam

// daznu atveju aspimoka funkcija apibrezti priskirtam kintamajame


// kreipimasisi i funkcija per kintamaji
let dalybosRezultatas = function /*dalyba*/(sk1=0, sk2=0) { // funkcijos pavadinimo galima nerasyti, nes kintamajam priskirta funkcija
    let rezultatas;
    rezultatas = sk1 / sk2;

    return rezultatas;
}
// dalybosRezultatas aprasytas kintamasis, funkcija apibrezta kintamajame

    dalybosRezultatas = function patobulintaDalyba(sk1=0, sk2=0) { // funkcija pakeista i kita funkcija, su tuo paciu priskirtu kintamuoju
    let rezultatas;
    rezultatas = sk1 / sk2;

    let masyvas = []; // rezultatas bus pateiktas masyve
    masyvas[0] = sk1;
    masyvas[1] = sk2;
    masyvas[2] = rezultatas;

    return masyvas;
}




console.log("Script veikia");

console.log(dalybosRezultatas(5, 10)); // priskirti skaiciai sk1 ir sk2, nenurodzius skaicius ismes NaN


// ES5 standartas funkcijos aprasymas
let daugybaes5  = function(sk1, sk2) { // kintamojo perasyti negalima, jei const 

    let rezultatas;
    rezultatas = sk1*sk2;
   // console.log(this);
 // this kintamasis grazina informacija apie elementa su kuriuo yra dirbama, siame standarte neisveda
 document.getElementById('reses5').innerHTML += this;

    return rezultatas;
}

//ES6 standartas funkcijos aprasymas nauju formatu, zodi function pakeicia =>
// 
let daugybaes6 = (sk1, sk2) => {
    let rezultatas;
    rezultatas = sk1*sk2;
   // console.log(this);
// this kintamasis grazina informacija apie elementa su kuriuo yra dirbama, naujame standarte isveda
document.getElementById('reses5').innerHTML += this;
    return rezultatas;
}

console.log(daugybaes5(2,4)); // ats 8
console.log(daugybaes6(5,4)); // ats 20


// nesuveike
//ES5
// window.addEventListener("load", daugybaes5(2,4)); // ivykis, kada puslapis uzsikrauna ir funkcijos isvedimas
// document.getElementById("buttones5").addEventListener("click", daugybaes5(2,4) ); // funkcijos isvedimas kai paspaudziamas mygtukas

//ES6
// window.addEventListener("load", daugybaes6(5,4)); // ivykis, kada puslapis uzsikrauna ir funkcijos isvedimas
// document.getElementById("buttones6").addEventListener("click", daugybaes6(5,4) ); // funkcijos isvedimas kai paspaudziamas mygtukas



// tuscia funkcija nieko negrazina
// isveda kintamaji this, kai puslapis uzsikrauna abi funkcijos this kintamaji supranta kaip objekta
let funkcijaes5 = function() {
    document.getElementById('reses5').innerHTML += this; // atsiranda object window
    // savyje this kintamaji pakeicia ir tampa globalus su ES5 standartu
}

let funkcijaes6 = () => {
    document.getElementById('reses6').innerHTML += this;
    // this kintamasis lieka lokalus ir jo nekeicia ES6 standarte
}

window.addEventListener("load", funkcijaes5);
document.getElementById("buttones5").addEventListener("click", funkcijaes5 );


window.addEventListener("load", funkcijaes6);
document.getElementById("buttones6").addEventListener("click", funkcijaes6 );