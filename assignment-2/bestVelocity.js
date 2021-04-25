function bestVelocity(input) {
    let sum=0 ;
    let checkSum = 0;
    let checkSequence = [];
    let sequence = []
    let Output = { sequence, sum };
    let number = input
    let p;
if(input.length<3){
    return console.log("error")
}
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        checkSequence.push(element)
      
        if(checkSequence.length>3){
            checkSequence.shift()
        }
        if (checkSequence.length == 3) {
            checkSum = checkSequence.reduce(function (acc, curr) {
                checkSum = acc + curr
                return checkSum;
            }, 0)
           if(checkSum>=Output.sum){
               Output.sum=checkSum;
            p=i;
           }
        };
    }
    for (let i = 0; i < 3; i++) {
        const element = number[p-i];
        sequence.unshift(element)
    }
    

    console.log(Output);
}

bestVelocity([11, 14, 10, 12]) // Output: { sequence: [14, 10, 12], sum: 36 };
//bestVelocity([12, 9, 1, 5, 11, 5]) //Output: { sequence: [12, 9, 1], sum: 22 }
//bestVelocity([76, 80]) // Output: error
//bestVelocity([76, 80, 81, 77, 83, 78, 80]) // Output: [83, 78, 80]