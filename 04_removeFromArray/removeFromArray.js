const removeFromArray = function(arr, ...theArgs) {
    for (let i=0; i<theArgs.length; i++) {
        let id = arr.indexOf(theArgs[i]);
        if (id != -1){
            arr.splice(id, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
