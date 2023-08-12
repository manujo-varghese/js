const obj = { 
    foo: 1, 
    bar: 2, 
    baz: 3 
};
const newObj = {
    ...obj,
    foo: 4,
    
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }