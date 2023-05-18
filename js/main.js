/*
let round = Math.round(8.6);
let pow = Math.pow(12,10);
let sqrt = Math.sqrt(16);
let abs = Math.abs(-12.8);
let ceil = Math.ceil(6.5);
let floor = Math.floor(8.9);
let min = Math.min(12,1,18,2004,15,18);
let max = Math.max(12,1,18,2004,15,18);
let truck = Math.trunc(4.5);

document.write(truck);*/

/* local storage (mahaliy hotira)*/

/*localStorage.setItem('ism','Gulhan Olov');
localStorage.setItem('familiya','Sayfullaev');
localStorage.setItem('yoshi','14');

localStorage['ism'] = "Gulhan Olovdon"
localStorage['familiya'] = "Sayfullaeva"*/

/*localStorage.removeItem('ism');
localStorage.removeItem('familiya');*/

/*localStorage.clear();

let uningIsmi = localStorage.getItem('ism');
let uningFamiliyasi = localStorage.getItem('familiya');
let uningYoshi = localStorage.getItem('yoshi')

console.log(uningIsmi,uningFamiliyasi,uningYoshi);*/

/* https requests in JS*/


/*let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}
*/

/* JSON in JS*/
/*let object = {ism: 'Oluv',yoshi: 13};
let json = '{"ism":"Oluv","yoshi":13}'
console.log(JSON.stringify(object));*/

let sorov = new XMLHttpRequest();
sorov.open('get','jsonFile.json')
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}


