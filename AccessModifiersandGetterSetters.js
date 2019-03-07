var Car = /** @class */ (function () {
    function Car() {
    }
    Object.defineProperty(Car.prototype, "model", {
        get: function () {
            return "Arabanın modeli : " + this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.selamVer = function (item) {
        return item;
    };
    Car.prototype.Add = function () {
        console.log("Car Added");
    };
    return Car;
}());
var car = new Car();
car.Add();
car.model = "Fiat bis";
console.log(car.model);
