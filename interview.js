for (var i = 0; i < 3; i++) {
    setTimeout(function() { alert(i); }, 1000 + i);
}


(function() {
    var a = b = 5;
})();
console.log(b);


//Assume 8-bit unsigned registers. Express the solution in hex: 0xc8 & 0xaa
//Given the bitstream 01001010, which if these hex masks will extract bits 2 through 7 (bolded?)


//dentify the logic error in the following Javascript program, which is meant to check for the existence of a value. 

function checkForExistence(x) {
    if (x)
        return true;
    return false;
}



//what happens when you run the following code in NodeJS
const a = async => Math.random()
await a()


const x = 5;
a = { a: 1, b: 2, c: 3, ...x }
    //whats the value of a?