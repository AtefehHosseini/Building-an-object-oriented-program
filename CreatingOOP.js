// Task 1: Code a Person class
class Person{
    constructor(name = 'Tom', age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        
        this.energy += 10;
        console.log('Current Energy is increasing: ',this.energy)
    }
    doSomthinFun() {
        this.energy -= 10
        console.log('Current Energy is decreasing: ',this.energy)
     }
    
}
// Task 2: Code a Worker class

class Worker extends Person{
    constructor(xp=0, hourlyWage=10,name, age, energy,) {
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log('The experiance point is: ',this.xp)
    }
}

// Task 3: Code an intern object, run methods
function intern() {

    const intern1 = new Worker(0,10,'Bob',21,110);
    intern1.goToWork();
    return intern1;
}

// Task 4: Code a manager object, methods
function manager() {

    const manager1= new Worker('Alice',30,120,100,30)
    manager1.doSomthinFun();
    return manager1;
}
