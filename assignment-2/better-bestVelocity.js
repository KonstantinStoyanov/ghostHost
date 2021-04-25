function bestVelocity(input) {
let arr;
let copyInput;
let sequence=[];
let output={};
let sum=0;
if(input.length<3){return console.log("error");}
for (let i = 3; i < input.length+1; i++) {
    copyInput=input
    arr=copyInput.slice(i-3,i)
    
    checkSum = arr.reduce(function (acc, curr) {
        checkSum = acc + curr
        return checkSum;
    }, 0);

    if(sum<=checkSum){
        sequence=[...arr]
        sum=checkSum;
    }

};
 output={sequence,sum};
console.log(output);
}
//bestVelocity([11, 14, 10, 12]) // Output: { sequence: [14, 10, 12], sum: 36 };
//bestVelocity([12, 9, 1, 5, 11, 5]) //Output: { sequence: [12, 9, 1], sum: 22 }
//bestVelocity([76, 80]) // Output: error
//bestVelocity([76, 80, 81, 77, 83, 78, 80]) // Output: [83, 78, 80]