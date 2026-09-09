const name = "fixed";
const obj = {
            name : "Ram",
            rollno : 11
};



function fun()
{
    // name = "India"; //error TypeError: Assignment to constant variable.
    obj.name = "Sita";  //non-premitive like object can be changed its assigment as they referes to the object but binding cant not changed
    obj = { name : "Jay"};  //Error

    console.log(obj.name);
    console.log(name);
}
fun();

console.log(obj.name);

//const prevents reassignment of the binding. It does not make an object immutable.