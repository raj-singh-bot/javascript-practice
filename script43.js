let obj1 = {
    name: 'foo',
    age: 34
};

let obj2 = {
    name: 'bar',
    age: 32
}

let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

let obj4 = {...obj1, ...obj2};
console.log(obj4);