function hasDuplicate(arr) {
    noDuplicate = [];
    duplicateValues = [];

    for (const ele of arr) {
        if (!noDuplicate.includes(ele))
            noDuplicate.push(ele);
        else
            duplicateValues.push(ele);
    }
    return [duplicateValues.length, duplicateValues, noDuplicate];
}

arr = [23, 45, 'qw', 2132, 23, 45, 'frameElement', 'qw'];
[duplicate, duplicateValues, newArr] = hasDuplicate(arr);

console.log("Given array:", arr);
if (duplicate > 0) {
    if (duplicate === 1) 
        console.log("There exists a duplicate value:", duplicateValues);
    else 
        console.log("There exists", duplicate, "duplicate values:", duplicateValues);
    console.log('Array with no duplicate values:', newArr);
}
else
    console.log("There wasn't any duplicate value");
