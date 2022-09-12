let student = {
    age: 18,
    name: 'Raj',
    enroll: 123
}
console.log(student);

let employee = {};
employee.name = 'raj';
employee.salary = [1, 2, 3, 4, 5];
employee.jobTitle = {
    name: 'developer'
}
employee.detail = (function (){
    console.log("object method");
}
)();

console.log(employee);