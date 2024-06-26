// singleton object --> constructor se banega object toh singleton object
// Object.create() --> object banega
// const js=new Object(); // this is singleton object


//object literal

const js={
    name: 'Raheel',
    age: 21,
    location: 'Karachi'
} // this is how to declare object

console.log(js.name); //Raheel
console.log(js.age); //21

js.age=22;
console.log(js.age); //22


// function in object
js.greeting=function(){
    console.log('Hello'); //    Hello
}

js.greeting2=function(){
    console.log(`Hello ,${this.name}`); //Hello ,Raheel --> "this" is used to access the object properties
}

console.log(js.greeting())
console.log(js.greeting2())