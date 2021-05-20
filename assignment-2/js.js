// # Problem 2 - Write a JavaScript program to find the most frequent item of an array
const input=['c', 0, 1, 'c', true, false, 2, 1, 'c'];
// output: "c -> 3"


function interview(input) {
   let maxCount=0 ;
   let current="";
   let counter=0;
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        counter=0;
        for (let index = 0; index < input.length; index++) {
            const e = input[index];
            if(element===e){
                counter++;
            };
            if(counter>maxCount){
                maxCount=counter;
                current=element;
            }
        }
    }
console.log(`${current} -> ${counter}`);
}
interview(input);