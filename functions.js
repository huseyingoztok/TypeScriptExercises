function Sum(item, item2) {
    return item + item2;
}
function Sum2(item, item2) {
    return item + item2;
}
function Sum3(item, item2) {
    return item + item2;
}
//Anonym Functions
var Sum4 = function (s1, s2) {
    return s1 + s2;
};
console.log(Sum(2.4, 2.2));
console.log(Sum2(3.5, 7.4));
console.log(Sum3(3.5, "Ankara"));
console.log(Sum4(3.5, 6.4));
console.log("Default and optional parameters");
//Default parameter
function Sum5(item, item2) {
    if (item2 === void 0) { item2 = 4; }
    return item + item2;
}
console.log(Sum5(4, 6.5)); //10.5
console.log(Sum5(4)); //8
//Optional parameter
function Sum6(item, item2) {
    return item + item2;
}
console.log(Sum6(4)); //Nan
function Sum7(item, item2) {
    if (item2) {
        return item + item2;
    }
    return item;
}
console.log(Sum7(4)); //4
console.log(Sum7(4, 7)); //11
