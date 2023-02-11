"use strict";
const testFunction = (user) => {
    return Object.assign(Object.assign({}, user), { id: Math.floor(Math.random() * 99) });
};
const user = testFunction({ name: 'Babul Akter', age: 30 });
console.log(user);
