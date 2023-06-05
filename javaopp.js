class Employee{
    constructor(name,age,salary,employeesyearofservice){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.employeesyearofservice = employeesyearofservice;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, employeesyearofservice: ${this.employeesyearofservice}`);
      }
}

class Employeemanagementsystem{
    constructor(){
        this.employeeArray = [];
    }
    
    addEmployee(employee){

        this.employeeArray.push(employee);
    }
    
    findEmployeeByName(name){
        let found = false
        for(let employee of this.employeeArray){
            if(employee.name === name){
                console.log('Employee Found')
                employee.displayInfo();
                found = true;
                break;
            }
        }
        if(!found){
            console.log('Employee Not Found')
        }
    }
    totalEmployeeSalary(){
        let totalsalary = 0
        for(let employee of this.employeeArray){
            totalsalary += employee.salary;
        }
        return totalsalary
    }
    addIncrementSalary(incriment){
        for(let employee of this.employeeArray){
        employee.salary += (employee.salary * incriment / 100)
    }

    }

    


}

let employee1 = new Employee('Abubakar', 20, 30000, 3);
let employee2 = new Employee('Waleed', 25, 50000, 6);
let employee3 = new Employee('Usman', 28, 70000, 8);

let ems = new Employeemanagementsystem;

ems.addEmployee(employee1);
ems.addEmployee(employee2);
ems.addEmployee(employee3);

console.log(`name:${ems.employeeArray[1].name}`)

let value = ems.employeeArray[1].name;
ems.findEmployeeByName(value);

let totalSalary = ems.totalEmployeeSalary();
console.log("Total Salary:", totalSalary);

ems.addIncrementSalary(10);
for (let employee of ems.employeeArray) {
  employee.displayInfo();
}











