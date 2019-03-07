class Car{
    kapiSayisi : number;
    tekerSayisi : number;
    model : string;

    constructor(kapiSayisi : number, tekerSayisi : number, model : string){
        this.kapiSayisi = kapiSayisi;
        this.tekerSayisi = tekerSayisi;
        this.model = model;
    }

    GetInformation() : string{
        return "Model : "+ this.model + " Teker Sayısı : " + this.tekerSayisi + " Kapı Sayısı : " + this.kapiSayisi;
    }
}

let car = new Car(4,4,"500c");

console.log(car.GetInformation());


class Person{
    constructor(){
        console.log("Person constructor...");
    }
    Add(){
        console.log("Added...");
    }
}


class  Customer extends Person{
    SellItem(){
        console.log("item solt");
    }
}

class Employee extends Person{
    PaySalary(){
        console.log("Salary Payed");
    }
}

let customer = new Customer();
customer.Add();
customer.SellItem();


let employee = new Employee();
employee.Add();
employee.PaySalary();