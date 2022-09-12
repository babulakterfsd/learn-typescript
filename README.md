# Some common rules :

1.  jodi kono variable e kono type bole na deya hoy, taile ts auto oi variable er type any dhore ney

    ---> let hello = 'hello world' // any type

2.  jodi declaration er somoy variable er value assign na kora hoy, taile pore dat type change korleo ts ar error dibe na.

    ----> let hello
    hello = 'hello world'
    hello = 34

    -------> let arr:(number|string)[] = [] // evabe type deyakei union type bole
    arr.push(36)
    arr.push('babul')
    console.log(arr);

3.  kono object literal lekhar khetre type ta evabe aage define kore neya hoy. ei jinishtake type alias bole
    ---> type playerType = {
    name: string,
    age: number,
    nationality: string
    }

const player:playerType = {
name: 'Sakib Al Hasan',
age: 36,
nationality: 'Bangladesh'
}
console.log(player);

4.  onnano shob khetre type declartion choto hater hoy jemon string / number. kintu function er khetre type ta boro haater hoy jeta hocche Function. eta muloto javascript er sathe colusion eranor jonnoi kora hoyeche. ekhane c ekta optional parameter jar ekta default value o ache. default value na thakle tokhon type bole deya lagto. ar kono function jodi kichu directly return na kore tkhn se ashole void return kore. void ar undefined kintu same jinish na. void maane kichui na jekhane undefined ekta type

    ------->const myFunc: Function = (a: number, b: number, c = 10): number => {
    return a _ b _ c
    }
    console.log(myFunc(2, 3));

5.  type alias er beparta ashole modular way te korlei valo hoy. maane alada ekta file e shob type define kora thakbe. then okhan theke jekhane jeta dorkra seta import kore use korbe

6.  kono function er parameter gular type ki hobe ar seta ki return korbe egula aage thekei define kore deya jay , jetake fucntion signature bole

    ----> let myFunc: (a:number, b:number) => void
    myFunc = (whateverYouWant:number, whateverYouWant2:number) => whateverYouWant \* whateverYouWant2

7.  class evabe likhte hoy ts e

        ---->
         class Player {
        name: string;
        age: number;
        country: string;

        constructor(n:string, a:number, c: string) {
            this.name = n;
            this.age = a;
            this.country = c;
        }

        play() {
            console.log(this.name + " is playing");
        }

    }

const messi = new Player("Messi", 32, "Argentina");

const playersArray: Player[] = [messi]; // ei array te sudhu player class follow kore banano object gulai thakte parbe

8. access modifire use kore class er property gula private na public hobe seta thik korte pari. jodi kono property private rakhte hoy tar samne private like dilei hobe. ar eta onno vaabe use korte chaile ekta public method define kore setar moddhe oi private property use korlei hoye gelo.

------>

class Player {
private name: string;
age: number;
country: string;

    constructor(n:string, a:number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {
        console.log(this.name + " is playing");
    }

}

const messi = new Player("Messi", 32, "Argentina");

messi.play() // ekhane messi.name kitu access kora jacche na. ekoivabe private er motoi aro 2 ta modifier ache, readonly ar public.

    - private : baire access o nai, modify o kora jabe na
    - readonly: baire access ache, kintu modify kora jabe na
    - public: duitai hobe

9. evabe interface use korte hoy. dekhte onekta type alias mone holeo interface er subidha onk beshi

----> interface RectangleOptions {
width: number;
length: number;
}

const rectangle = ({ width, length }: RectangleOptions) => {
return width \* length;
}

console.log(rectangle({ width: 10, length: 20 }));

//ekhane interface e deya jinishgular baire kichu use korte chaile tahole 110 number line er moto direct value na pathiye alada ekta object decalre kore oitar reference diye call korle ar error dibe na

-----> interface RectangleOptions {
width: number;
length: number;
tags?: string[]; //optional
}

const rectangle = ({ width, length, whateveryouwant }: RectangleOptions) => {
return width _ length _ whateveryouwant;
}

const valueObj = {
width: 30,
length: 20,
whateveryouwant: 10
}

console.log(rectangle(valueObj)); // direct dile jhamela korto

evabe class e interface omplement korte hoy

---> interface Size {
width : string,
height: string,
getWidth(): string;
}

class Shapes implements Size {
width: string;
height: string;
constructor (width:string, height:string) {
this.width = width;
this.height = height;
}
getWidth() {
return this.width;
}
}

interface e private accessor use kora jay na.

https://stackoverflow.com/questions/37791947/how-to-define-a-private-property-when-implementing-an-interface-in-typescript

10. generic ar kichui na, just user j type er data dibe setake dhorar ekta system, ba user kon type data dite parbe ta nirdisto kore bole deya jaay generic er maddhome.

------> interface userInterface {
name: string;
age: number;
id?: number;
}

const addID = <T extends userInterface>(obj: T) => {
let id = Math.floor(Math.random() \* 100);
return { ...obj, id };
}

const user = addID({name: 'John', age: 25});

console.log(user);

ekhn dekhi kivave interface er sathe generic use kora jaay..
kono interface declare er somoy kono ekta property er type ki hobe seta variable er moto kore set kra jay generic er maddhome. jemon, kono api response er jonno interface lekha holo.. ekhn oi api ki response pathabe seta to aage thekei bola jay na. ekhetre jinishta generic e kora jay.

---------> interface apiResponseInterface<T> {
data: T;
}

type dataType = {
status: number;
message: string;
}

const apiResponse: apiResponseInterface<dataType> = {
data: {
status: 200,
message: "success"
}
}
console.log(apiResponse?.data?.status);

11. enum

---> enum RType {
Success,
Failed,
Unauthorized,
NotFound,
BadRequest,
Forbidden
}

interface apiResponse<T> {
status: number;
type: RType;
data: T;
}

const response: apiResponse<string> = {
status: 200,
type: RType.Success,
data: "Hello World"
}

console.log(response.data);




12. tuple hocche kono array er element gula kon type hobe seta nirdishto kore deya

---> const b:[number, string, object] = [4, 'world', {name: 'babul'}]
