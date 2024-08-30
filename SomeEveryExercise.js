function hasOddNumber(arr) {
    // Use the some method to check if there is at least one odd number in the array
    return arr.some(function(num) {
        return num % 2 !== 0;
    });
}

function hasAZero(num) {
    // Convert the number to a string and check if it includes '0'
    return num.toString().includes('0');
}

function hasOnlyOddNumbers(arr) {
    // Use the every method to check if all numbers in the array are odd
    return arr.every(function(num) {
        return num % 2 !== 0;
    });
}

function hasNoDuplicates(arr) {
    // Create a Set from the array
    let uniqueElements = new Set(arr);
    // Compare the size of the Set with the length of the array
    return uniqueElements.size === arr.length;
}

function hasCertainKey(arr, key) {
    // Use the every method to check if all objects in the array contain the key
    return arr.every(function(obj) {
        return obj.hasOwnProperty(key);
    });
}

function hasCertainValue(arr, key, value) {
    // Use the every method to check if all objects in the array contain the key with the specified value
    return arr.every(function(obj) {
        return obj[key] === value;
    });
}
