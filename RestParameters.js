function RestFunction(name) {
    var otherNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherNames[_i - 1] = arguments[_i];
    }
    return name + " " + otherNames.join(" ");
}
console.log(RestFunction("Ahmet", "Ali", "Veli", "Deli"));
