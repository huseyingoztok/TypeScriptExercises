var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(kapiSayisi, tekerSayisi, model) {
        this.kapiSayisi = kapiSayisi;
        this.tekerSayisi = tekerSayisi;
        this.model = model;
    }
    Car.prototype.GetInformation = function () {
        return "Model : " + this.model + " Teker Sayısı : " + this.tekerSayisi + " Kapı Sayısı : " + this.kapiSayisi;
    };
    return Car;
}());
var car = new Car(4, 4, "500c");
console.log(car.GetInformation());
var Person = /** @class */ (function () {
    function Person() {
        console.log("Person constructor...");
    }
    Person.prototype.Add = function () {
        console.log("Added...");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.SellItem = function () {
        console.log("item solt");
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.PaySalary = function () {
        console.log("Salary Payed");
    };
    return Employee;
}(Person));
var customer = new Customer();
customer.Add();
customer.SellItem();
var employee = new Employee();
employee.Add();
employee.PaySalary();
