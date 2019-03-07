function Yazdir<T>(item : T)  : T{
    return item;
}

console.log(Yazdir<string>("Ahmet"));
console.log(Yazdir<number>(3));



class Manager <T> {
    public list : Array<T>
    constructor(){
        this.list = new Array();
    }
    Add (item : T){
        this.list.push(item)
    }
}

interface Person{
    Name : string;
    Surname : string;
}

interface Customer extends Person{
    Age : number
}


interface Employee extends Person{   
    Salary : number;
}

    let manager = new Manager<Customer>();
    let cus1 : Customer = {Name : "Hüseyin",Surname : "GÖZTOK", Age : 23}
    let cus2 : Customer = {Name : "Hasan",Surname : "GÖZTOK", Age : 30}
    let cus3 : Customer = {Name : "Selim",Surname : "GÖZTOK", Age : 28}
    let cus4 : Customer = {Name : "Sevim",Surname : "GÖZTOK", Age : 23}
    manager.Add(cus1);
    manager.Add(cus2);
    manager.Add(cus3);
    manager.Add(cus4);

    manager.list.forEach(item => {
        console.log("Name :  " + item.Name + " Surname : " + item.Surname + " Age : " + item.Age);
    })


