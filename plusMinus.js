// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    // Write your code here
    const length = arr.length; 
    let positiveNum = 0;
    let zeroNum = 0;
    let negativeNum = 0; 
    
    for(let i=0; i<length; i++) {
        if(arr[i]<0) {
            negativeNum++;
        } else if(arr[i] === 0) {
            zeroNum++;
        } else {
            positiveNum++;
        }
    }
    
    const PosRat = (positiveNum/length).toFixed(6);
    const NegRat = (negativeNum/length).toFixed(6);
    const zeroRat = (zeroNum/length).toFixed(6);
    
    console.log(PosRat);
    console.log(NegRat);
    console.log(zeroRat);
}
