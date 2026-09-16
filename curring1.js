function table(no)
{
    return function(idx)
    {
        return no * idx;
    }
}

idx = 1

while(idx <= 10)
{
    console.log(table(2)(idx))
    idx++;
}