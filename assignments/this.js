/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this - window/undefined object binding
        here this is accessing the window object and as such it is global and had access to all the methods of the Window object.It is usually not confined in the body of any object, it can be found in what we may refer to as TOPLEVELVARIABLES; Variables which have a global scope

* 2. this - implicit binding
        In this case, "this" refers to the object that it is in. 

* 3. this - new keyword binding
        Here, this refers to the object that is being created

* 4. this - explicit binding
    Here the value of this is set to a particular value when the function is called or applied.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var superVar = this;

var superCar = "Ferrari"

// Principle 2

// code example for Implicit Binding
let student = {
    name:"Ifiok Udoidiok",
    cohort: "WEBEU3",
    intro: function () {
        return `My name is ${this.name} in the ${this.cohort} cohort`;
    },
};

// Principle 3

// code example for New Binding
function Car (data) {
    this.make = data.make;
    this.model = data.model;
    this.color = data.color;
};

const newCar = new Car ('Honda', 'Accord', 'white');

// Principle 4

// code example for Explicit Binding
function phone(company, model, os) {
    return `You are using ${company} ${model} with the ${os} Operating System`
}

phone.call(this, 'Samsung','Galaxy S9', 'MashMellow');
phone.apply(this, ['iPhone','8 plus', 'MashMellow']);

const refurbishedPhone = phone.bind('China');
