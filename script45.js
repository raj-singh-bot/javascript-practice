let obj1 = {
    name: 'foo',
    age: 22
}

let obj2 = {
    place: 'surat'
}

let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);