// (i/3) % 1 = 0

for (i = 1; i <= 100; i++){
    let msg = ''

    if(i % 3 == 0){
        msg += "fizz"
    }
    if(i % 5 == 0){
        msg += "buzz"
    }
    if(!msg) {
        (msg = i)
    }
    console.log(msg)
}