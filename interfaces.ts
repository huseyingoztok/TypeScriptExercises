interface Product{
    name : string;
    stock : number;
    price : number;
}


function writeProduct(product : Product){
    console.log("ProductName : "+ product.name+ " Stock : "+ product.stock+ " Product Price : "+ product.price);
}

//Bir nesneye ait tüm özelliklerin doldurulmasını istiyorsak interfaceleri kullanırız...
writeProduct({name : "Laptop", price : 3.500, stock : 100});


interface Person{
    Add();
    Delete();
}

class Employee implements Person {
    Add() {
        console.log("Employee Added");
    } 
    
    Delete() {
        console.log("Employee Deleted");
    }

    
}


class Customer implements Person  {
    Add() {
         console.log("Customer Added");
    } 
    
    Delete() {
        console.log("Customer Deleted");
    }

    
}


let emp = new Employee();
emp.Add();
emp.Delete();

let customer = new Customer();
customer.Add();
customer.Delete();