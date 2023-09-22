# Building-an-object-oriented-program
This repository contains JavaScript code for an Object-Oriented Programming lab assignment completed as part of the Front-end Development course on Coursera. The assignment involved creating classes and objects to simulate the behavior of people in different roles.


# Task 1: Person Class
In the Person class, a basic representation of a person is implemented with parameters for name, age, and energy. The default values for these parameters are set as follows:

name = "Tom"
age = 20
energy = 100
The Person class includes two methods:

sleep(): Increases the energy level of the person by 10.

doSomethingFun(): Decreases the energy level of the person by 10.

# Task 2: Worker Class
The Worker class is a sub-class of Person and represents individuals in a work setting. It inherits the parameters and methods of the Person class and adds two more parameters:

xp (experience points)
hourlyWage
The default values for these parameters are set as follows:

xp = 0
hourlyWage = 10
The Worker class also includes a unique method:

goToWork(): Increases the experience points (xp) of the worker by 10.
# Task 3: Creating an Intern Object
In the intern() function, a new Worker object is instantiated to create an intern with the following characteristics:

name: Bob
age: 21
energy: 110
xp: 0
hourlyWage: 10
The goToWork() method is then called on the intern object, increasing their experience points.

# Task 4: Creating a Manager Object
In the manager() function, a new Worker object is instantiated to create a manager with the following characteristics:

name: Alice
age: 30
energy: 120
xp: 100
hourlyWage: 30
The doSomethingFun() method is then called on the manager object, decreasing their energy level.
