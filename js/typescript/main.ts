interface myprops {
    name: string;
    age: number
}

const testFunction = <T extends myprops>(user: T) => {
    return {...user, id: Math.floor(Math.random() * 99)}
}

const user = testFunction({name: 'Babul Akter', age: 30})

console.log(user);