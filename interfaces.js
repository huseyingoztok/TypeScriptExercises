function writeProduct(product) {
    console.log("ProductName : " + product.name + " Stock : " + product.stock + " Product Price : " + product.price);
}
//Bir nesneye ait tüm özelliklerin doldurulmasını istiyorsak interfaceleri kullanırız...
writeProduct({ name: "Laptop", price: 3.500, stock: 100 });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Add = function () {
        console.log("Employee Added");
    };
    Employee.prototype.Delete = function () {
        console.log("Employee Deleted");
    };
    return Employee;
}());
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.Add = function () {
        console.log("Customer Added");
    };
    Customer.prototype.Delete = function () {
        console.log("Customer Deleted");
    };
    return Customer;
}());
var emp = new Employee();
emp.Add();
emp.Delete();
var customer = new Customer();
customer.Add();
customer.Delete();
