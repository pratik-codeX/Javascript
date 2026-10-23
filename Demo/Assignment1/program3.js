function factorial(number) {
    let Fact = 1;

    if(number < 0)
    {
        console.log("Negative number")
        return;
    }

    for(let i = number; i > 1;i--)
    {
        Fact = Fact * number;
        
        number--;
    }
    return Fact
}

console.log(factorial(-5));
console.log(factorial(4));