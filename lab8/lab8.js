// Lab 8 Scope and Encapsulation
// MUHAMMAD REHAN 
//614653
function myFunctionTest(expected, func) {
    const result = func();
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return `TEST FAILED. Expected ${expected} but got ${result}`;
    }
}

String.prototype.filter = function(bannedWord) {
    return this.split(' ').filter(word => word !== bannedWord).join(' ');
};

console.log("Expected output of 'This house is not nice!'.filter('not') is 'This house is nice!' and " +
    myFunctionTest('This house is nice!', function() { return 'This house is not nice!'.filter('not'); }));
console.assert('This house is not nice!'.filter('not') === 'This house is nice!', "TEST FAILED");

Array.prototype.bubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this;
};

console.log("Expected output of [6,4,0, 3,-2,1].bubbleSort() is [-2, 0, 1, 3, 4, 6] and " +
    myFunctionTest(JSON.stringify([-2, 0, 1, 3, 4, 6]), function() { return JSON.stringify([6,4,0, 3,-2,1].bubbleSort()); }));
console.assert(JSON.stringify([6,4,0, 3,-2,1].bubbleSort()) === JSON.stringify([-2, 0, 1, 3, 4, 6]), "TEST FAILED");

function Person(name) {
    this.name = name;
}

Person.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

let teacher = new Person('John');
teacher.teach('Math');

const personPrototype = {
    teach: function(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
};

function createTeacher(name) {
    let teacher = Object.create(personPrototype);
    teacher.name = name;
    return teacher;
}

let teacher2 = createTeacher('Jane');
teacher2.teach('Science');


// Using prototype approach
function PersonProto(name, age) {
    this.name = name;
    this.age = age;
}

PersonProto.prototype.greet = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

PersonProto.prototype.salute = function() {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

function StudentProto(name, age, major) {
    PersonProto.call(this, name, age);
    this.major = major;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function ProfessorProto(name, age, department) {
    PersonProto.call(this, name, age);
    this.department = department;
}

ProfessorProto.prototype = Object.create(PersonProto.prototype);
ProfessorProto.prototype.constructor = ProfessorProto;
ProfessorProto.prototype.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

let student = new StudentProto('Alice', 20, 'Computer Science');
let professor = new ProfessorProto('Dr. Smith', 50, 'Mathematics');

student.greet();
student.salute();
professor.greet();
professor.salute();

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    }
    salute() {
        console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
    }
}

class StudentClass extends PersonClass {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    greet() {
        console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
    }
}

class ProfessorClass extends PersonClass {
    constructor(name, age, department) {
        super(name, age);
        this.department = department;
    }
    greet() {
        console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
    }
}

let studentClass = new StudentClass('Bob', 22, 'Engineering');
let professorClass = new ProfessorClass('Dr. Brown', 55, 'Physics');

studentClass.greet();
studentClass.salute();
professorClass.greet();
professorClass.salute();
