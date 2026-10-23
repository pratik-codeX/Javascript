function display(number) {

    number = Math.abs(number)

    const digits = {
        0:"Zero",
        1:"One",
        2:"Two",
        3:"Three",
        4:"Four",
        5:"Five",
        6:"Six",
        7:"Seven",
        8:"Eight",
        9:"Nine"
    }

    //console.log(digits[1])
    

    if((digits[number]) === undefined)
    {
        console.log("Error");
        return
    }

    return console.log(digits[number])
}

display(-5)