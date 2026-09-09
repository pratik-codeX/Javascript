var no = 11;  //global scope

function fun()
{
    let no1 = 21;
    console.log(no)
    console.log(no1)
}
fun();


// console.log(no1)    //blocked scope, not accessible to statement

//Block scope

{
    let n = 1;      //local scope cant accessible outside brackets
    var v = 2;      //accessible outside scope or block
}

console.log(v)  
console.log(n)

