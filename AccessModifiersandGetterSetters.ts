class Car{
    private _model : string;
    get model() : string{
        return "Arabanın modeli : " + this._model;
    }

    set model(model : string){
        this._model = model;
    }

    private selamVer(item : string) : string {
        return item ;
    }

    public Add(){
        console.log("Car Added");
    }
}


let car = new Car()
car.Add();
car.model = "Fiat bis";

console.log(car.model);


