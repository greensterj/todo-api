/**
 * Created by faridjafaroff on 5/12/17.
 */
var person = {
    name: 'Andrew',
    age: 21
};

function updatePerson (obj) {
    // obj = {
    //     name: 'Andrew',
    //     age: 24
    // };

    obj.age = 24;
}

updatePerson(person);
console.log(person);

var grades = [15, 37];

function addGrades (grades) {
    grades.push(55);
    debugger;

    // grades = [12, 33, 99]; // you can return it and then use smthn like grades = addGrades(grades);
}

addGrades(grades);
console.log(grades);