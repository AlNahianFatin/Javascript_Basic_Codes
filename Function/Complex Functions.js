function firstLetter (str){
    return str[0]
}
console.log(firstLetter("Raju"))

function checkBy10 (num){
    return (num > 10) ? num / 10 : num * 10
}
console.log(checkBy10(51.12))

function add2Indices (arr){
    return arr[0] + arr[1]
}
console.log(add2Indices([12.0, 11, 57, 'fatin']))
console.log(add2Indices([12.0, 'ff', 11, 57, 'fatin']))

function twoNames(name1, name2){
    return (name1.length > name2.length) ? true : false
}
twoNames('fatin', 'nahian') ? console.log('fatin superior') : console.log('nahian superior')

function twoNumbers (num1, num2){
    return (num1 * num2 > 100) ? num1 * num2 / 2 : num1 * num2
}
console.log(twoNumbers(12, 9))

function addOddNumbers(nums) {
    sum = 0
    for (const num of nums) {
        if (num % 2 === 1)
            sum += num
    }
    return sum
}
console.log(addOddNumbers([5, 15, 8, 7]))

function returnSmall(nums) {
    return (nums[0] < nums[1]) ? nums[0] : nums[1]
}
console.log(returnSmall([20, 45, 78]))

function hideAge(age) {
    if (age < 18)
        return 18
    else if (age > 45)
        return 45
    else
        return age
}
console.log(hideAge(12))
console.log(hideAge(60))
console.log(hideAge(18))

function sumOf4Multiples(nums){
    sum = 0
    for (const num of nums){
        if(num % 4 == 0)
            sum += num
    }
    return sum
}
console.log(sumOf4Multiples([2, 4, 5, 7, 8, 32, 45]))

function divisibleBy20 (num){
    return (num < 20) ? num * 2 : num / 20
}
console.log(divisibleBy20(19))
console.log(divisibleBy20(20))
console.log(divisibleBy20(21))

function addNegNumbers (nums){
    sum = 0
    for (const num of nums){
        if(num < 0)
            sum += num
    }
    return sum
}
console.log(addNegNumbers([-0, -21, 178, -54, +32, 0, 5, -7, 4]))

function multiplicationOf3Multiples(nums){
    result = 1
    for (const num of nums){
        if(num % 3 == 0)
            result *= num
    }
    return result
}
console.log(multiplicationOf3Multiples([2, 4, 5, 3, 8, 32, 45]))