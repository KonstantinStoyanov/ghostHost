function bestVelocity(input){
let sum=0;
let checkSum=0;
let checkSequence=[];
let sequence=[]
let Output={sequence,sum};
let number=[]


for (let i = 0; i < input.length; i++) {
    const element = input[i];
    if(checkSequence.length=3){
    sum= checkSequence.reduce(function (acc, curr) {
            checkSum=acc+curr
            return checkSum;
            }, 0)
            checkSequence.shift()
    };
    checkSequence.push(element)
}

    console.log(checkSequence);
    console.log(sum);
}

bestVelocity([11, 14, 10, 12]) // Output: { sequence: [14, 10, 12], sum: 36 };
//bestVelocity([12, 9, 1, 5, 11, 5]) //Output: { sequence: [12, 9, 1], sum: 22 }
//bestVelocity([76, 80]) // Output: error
//bestVelocity([76, 80, 81, 77, 83, 78, 80]) // Output: [83, 78, 80]