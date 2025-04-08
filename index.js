//function to reverse all the elements in a string in ascending order and the specific elements in descending order
function reverse(array){
    let sortedArray = array.map(string => string.toLowerCase()).sort();
    let reversedArray = sortedArray.map(word => word.split("").sort().reverse().join(""));
    return reversedArray;
}
    
//function to return positive || negative || zero
function integer(numArray) {
    return numArray.map(num => num > 0 ? "positive" : num < 0 ? "negative" : "zero");
}

//array of employee objects sorted by their salary in ascending order
function salarySorted(salaryArray) {
    return employees.sort((a, b) => a.salary - b.salary);
}

//function that logs elements in an array multiplied by 2
function double(array){
    array.forEach(item => console.log(item*2))
}


//consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

function numbers(numArray) {
    let newArray = numArray.map((num, i) => i < 4 ? num * 8 : i >= numArray.length - 2 ? num + 5 : num);
    console.log(newArray);
    return newArray;
}
let x=[3,-7,-9,-5,7,8,9];
console.log(numbers(x));