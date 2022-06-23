function calculate (){
    let x = window.prompt("Enter your first number")
    x = Number(x) 
    while (isNaN(x) == true){
        alert("Please enter a number")
        x = window.prompt("Enter your first number")
    }
    let action = window.prompt("Choose an operator: + - / *")
    while (action !== "+" && action !== "-" && action !== "*" && action !== "/"){
        alert("Please enter a valid operation")
        action = window.prompt("Choose an operator: + - / *")
    }
    if (action == "+"){
        let y = window.prompt("Enter your second number")
        while (isNaN(y) == true){
            alert("Please enter a number")
            y = window.prompt("Enter your second number")
        } 
        y = Number(y)
        z = x + y
        alert("Your answer is: " + z)
    }
    else if (action == "-"){
        let y = window.prompt("Enter your second number")
        while (isNaN(y) == true){
            alert("Please enter a number")
            y = window.prompt("Enter your second number")
        } 
        y = Number(y)
        z = x - y
        alert("Your answer is: " + z)
    }
    else if (action == "*"){
        let y = window.prompt("Enter your second number")
        while (isNaN(y) == true){
            alert("Please enter a number")
            y = window.prompt("Enter your second number")
        } 
        y = Number(y)
        z = x * y
        alert("Your answer is: " + z)
    }
    else if (action == "/"){
        let y = window.prompt("Enter your second number")
        while (isNaN(y) == true){
            alert("Please enter a number")
            y = window.prompt("Enter your second number")
        } 
        y = Number(y)
        z = x / y
        alert("Your answer is: " + z)
    } 
    function again () {
        let answer = window.prompt("Do you want to play again? Y/N").toUpperCase()
        while (answer !== "Y" && answer !== "N"){
            alert("Please enter a valid answer (Y/N)")
            answer = window.prompt("Do you want to play again? Y/N")
        }
        if (answer == "Y"){
            calculate()
        }
        else if (answer == "N"){
            alert("Thank you and good bye")
        }
    }

    again()
}

calculate()