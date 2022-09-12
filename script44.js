let obj = {
    name: 'raj',
    age: 22,
    place: 'mumbai',
    college: {
        name: 'maliba',
        place: 'bardoli',
        department: ['eng', 'phy', 'bio', 'bca']
    }
};

for(let i in obj){
    console.log(i);
}

for(let [key, value] of Object.entries(obj.college.department)){
    console.log(`${key}: ${value}`);
}