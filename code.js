// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function foo() {
    return 2
}


const sayHello = (name) => {
    // if(name === true) {
    //     return "Hello World!";
    // }
    if (typeof name != "string") {
        return "Hello World!";
    // } else if(!isNaN(name)) {
    //     return "Hello World!";
    } else {
        return "Hello, " + name + "!";
    }
}
console.log(sayHello(true));