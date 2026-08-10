//Create a BankAccount Class with deposit(), withdraw(), and displayBalance() Methods

class BankAccount{
    accNo:number;
    name:string;
    balance:number;
    constructor(accNo:number,name:string,balance:number){
        this.accNo=accNo;
        this.name=name;
        this.balance=balance;
    }
    deposit(amount:number){
        this.balance+=amount;
        console.log("Deposited:",amount);
    }
    withdraw(amount:number){
        this.balance-=amount;
        console.log("Withdrawn:",amount);
    }
    displayBalance(){
        console.log("Balance:",this.balance);
    }
}
const b1=new BankAccount(101,"Rahul",5000);
b1.deposit(1000);
b1.withdraw(500);
b1.displayBalance();


//Demonstrate public, private and protected Access Modifiers Using an Employee Class

class Employee{
    public id:number;
    public name:string;
    private salary:number;
    protected dept:string;
    constructor(id:number,name:string,salary:number,dept:string){
        this.id=id;
        this.name=name;
        this.salary=salary;
        this.dept=dept;
    }
    display(){
        console.log("ID:",this.id);
        console.log("Name:",this.name);
        console.log("Salary:",this.salary);
        console.log("Department:",this.dept);
    }
}
const e1=new Employee(1,"Ravi",30000,"IT");
console.log(e1.id);
console.log(e1.name);
e1.display();


//Create a Student Class with a readonly Student ID

class Student{
    readonly id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    display(){
        console.log("ID:",this.id);
        console.log("Name:",this.name);
    }
}
const st1=new Student(101,"Anu");
st1.display();


//Create a Class with a static College Name and a static Method

class College{
    static collegeName:string="ABC College";
    static show(){
        console.log("College:",College.collegeName);
    }
}
College.show();


//Create a MathOperations Namespace with add(), subtract(), multiply(), and divide() Functions

namespace MathOperations{
    export function add(a:number,b:number){
        console.log("Add:",a+b);
    }
    export function subtract(a:number,b:number){
        console.log("Subtract:",a-b);
    }
    export function multiply(a:number,b:number){
        console.log("Multiply:",a*b);
    }
    export function divide(a:number,b:number){
        console.log("Divide:",a/b);
    }
}

MathOperations.add(10,5);
MathOperations.subtract(10,5);
MathOperations.multiply(10,5);
MathOperations.divide(10,5);


//Create a math.ts Module, Export Arithmetic Functions, and Import Them into app.ts

// math.ts

// export function add(a:number,b:number){
//     return a+b;
// }

// export function sub(a:number,b:number){
//     return a-b;
// }


// // app.ts

// import {add,sub} from "./math";

// console.log(add(10,5));
// console.log(sub(10,5));


//Create a Generic Box<T> Class to Store and Display Different Types of Data

class Box<T>{
    value:T;
    constructor(value:T){
        this.value=value;
    }
    display(){
        console.log(this.value);
    }
}
const b2=new Box<number>(100);
const b3=new Box<string>("Hello");
b2.display();
b3.display();