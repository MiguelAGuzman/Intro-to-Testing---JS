// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function foo() {
    return 2
}


const sayHello = (name) => {
    if(name === true) {
        return "Hello World!";
    }
    if (typeof name != "string") {
        return "Hello World!";
    // } else if(!isNaN(name)) {
    //     return "Hello World!";
    } else {
        return "Hello, " + name + "!";
    }
}
console.log(sayHello([2]));

const isFive = (input) => {
    if(input === 5) {
        return true;
    } else if(input ==="5"){
        return true
    } else {
        return false
    }
}
console.log(isFive("7"));