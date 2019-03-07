var sayi = 10;
sayi = 10.4;
console.log(sayi);
var isDeleted = true;
console.log(isDeleted);
//let dizi : Array<number> = [1,3,4];
var anyArray = [1, 3, 4, "Ahmet"];
anyArray.forEach(function (element) {
    console.log(element);
});
console.log("***************************");
var mixedArray = ["Hüseyin", 1, 2, 3.5, false];
mixedArray.forEach(function (element) {
    console.log(element);
});
console.log("Tuplesss");
var tupleItems = ["Selam", 1];
tupleItems.push("a", 2);
tupleItems.forEach(function (item) {
    console.log(item);
});
console.log(tupleItems[0]);
console.log(tupleItems[1]);
var Renk;
(function (Renk) {
    Renk[Renk["Ankara"] = 1] = "Ankara";
    Renk[Renk["Istanbul"] = 2] = "Istanbul";
    Renk[Renk["Denizli"] = 3] = "Denizli";
})(Renk || (Renk = {}));
var sehir = Renk.Ankara;
var sehir2 = Renk.Denizli;
console.log(sehir);
console.log(sehir2);
