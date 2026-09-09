let x = "Global";

function outer()
{   
    var y = "out";
    console.log("Outer X : ",x);
    function inner()
    {   
        console.log("Inner X : ",x);
        console.log("y value is : ",y)
        y = "in";
    }
    inner();
}

outer()

