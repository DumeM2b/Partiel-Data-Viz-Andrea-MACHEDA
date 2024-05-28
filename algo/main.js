
function twoSum(array, target) {
    var map = new Map();
    
    for (let i = 0; i < array.length; i++) {
        var complement = target - array[i];
        if (map.has(complement)) {
            return "Output: [" + map.get(complement) + ", " + i + "]";
        }
        map.set(array[i], i);
    }
    
    return "Target pas atteint"; 
}

console.log(twoSum([0, 4, 2], 6));
