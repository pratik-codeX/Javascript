function demo(name)
{
    this.name = name;
}

demo.prototype.greet = function()
{
    console.log("Hello, I am "+this.name);
};

const p1 = new demo("Ram");
p1.greet();

