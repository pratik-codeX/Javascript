function fun()
{   
    var name = "India";
    console.log(name);
}

{
    var name = "Ram";   //block scope
}

//console.log(name);

{
    let name = "Sita";
}

console.log(name);


//console.log(name);  //error function scope
//fun();

// the scope of var keyword is of funcations its not accessible outside function but we can access it outside block also.