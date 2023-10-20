
//filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (item) => item > 4)
// console.log(newNums)

// map

const newNums = myNums.map( (nums) => nums )
// console.log(newNums)

const newArr = myNums
                    .map( (nums) => nums * 10)
                    .map( (nums) => nums + 1 )
                    .filter( (nums) => nums >=40 )
console.log(newArr)

// reduce

