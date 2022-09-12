let p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('1');
        resolve('first promise');
    }, 2000);
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('2 fail');
        reject('second promise');
    }, 1000);
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('3');
        resolve('third promise');
    }, 3000);
});

Promise.allSettled([p1, p2, p3]).then((result) => {
    console.log(result);
});