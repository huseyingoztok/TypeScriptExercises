let sayi : number = 10;

sayi = 10.4;

console.log(sayi);

let isDeleted : boolean = true;
console.log(isDeleted);

//let dizi : Array<number> = [1,3,4];
let anyArray : Array<any> = [1,3,4,"Ahmet"];

anyArray.forEach(element => {
    console.log(element);
});

console.log("***************************");

let mixedArray = ["Hüseyin",1,2,3.5,false]

mixedArray.forEach(element => {
    console.log(element);
});


console.log("Tuplesss");


let tupleItems : [string,number] = ["Selam",1]

tupleItems.push("a",2);



tupleItems.forEach(item =>{
    console.log(item);
});

console.log(tupleItems[0]);
console.log(tupleItems[1]);

enum Renk  {
    "Ankara" = 1,
    "Istanbul",
    "Denizli"
}


var sehir : Renk = Renk.Ankara;
var sehir2 : Renk = Renk.Denizli;
console.log(sehir);
console.log(sehir2);