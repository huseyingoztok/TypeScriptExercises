let num :number
console.log(num); //undefined



let anyThing : any;
anyThing = 5;
anyThing = "Ahmet";


function topla (sayi1 : number , sayi2 : number) : number {
    
    return sayi1+sayi2;
}

function topla2 (sayi1 : number , sayi2 : number) {
    
    return sayi1+sayi2;
}

console.log(topla(5,4));
console.log(topla2(3.4,2.9));
console.log("Selam knk");

