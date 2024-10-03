function FizzBuzz(num){
    let x = 0
    let y = 3
    let z = 5

    while (x <= num){
        if (x == y && x == z){
            console.log("FizzBuzz")
            y += 3
            z += 5
        }
        else if (x == y){
            console.log("Fizz")
            y += 3
        }
        else if (x == z){
            console.log("Buzz")
            z += 5
        }
        else {
            console.log(x)
        }
        x++
    }
}

FizzBuzz(100)