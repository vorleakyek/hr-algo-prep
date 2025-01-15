//There is a collection of input strings and a collection of query strings. 
//For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];

function matchingStrings(strings, queries) {
    // Write your code here
    
    const map = new Map();
    
    for(let i=0; i<strings.length; i++) {
        
        if(map.has(strings[i])) {
            map.set(strings[i], map.get(strings[i])+1);
        } else {
            map.set(strings[i],1)
        }
    }
    
    const result = [];
    
    for(let i=0; i<queries.length; i++) {
        if(map.get(queries[i])) {
            result.push(map.get(queries[i])) 
        } else {
            result.push(0) 
        }
           
    }
    
    return result;

}


// Call the function
matchingStrings(strings, queries);
