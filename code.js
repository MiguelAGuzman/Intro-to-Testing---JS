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

let isFive = function(input) {
    return 5;
}

function isEven (number) {
    return parseFloat(number) % 2 === 0;
}

function isVowel(x) {
    return "aeiouAEIOU".indexOf(x) !== -1;
}

function add (x, y) {
    return Number(x) + Number(y);
}