function Yazdir(item) {
    return item;
}
console.log(Yazdir("Ahmet"));
console.log(Yazdir(3));
var Manager = /** @class */ (function () {
    function Manager() {
        this.list = new Array();
    }
    Manager.prototype.Add = function (item) {
        this.list.push(item);
    };
    return Manager;
}());
var manager = new Manager();
var cus1 = { Name: "Hüseyin", Surname: "GÖZTOK", Age: 23 };
var cus2 = { Name: "Hasan", Surname: "GÖZTOK", Age: 30 };
var cus3 = { Name: "Selim", Surname: "GÖZTOK", Age: 28 };
var cus4 = { Name: "Sevim", Surname: "GÖZTOK", Age: 23 };
manager.Add(cus1);
manager.Add(cus2);
manager.Add(cus3);
manager.Add(cus4);
manager.list.forEach(function (item) {
    console.log("Name :  " + item.Name + " Surname : " + item.Surname + " Age : " + item.Age);
});
