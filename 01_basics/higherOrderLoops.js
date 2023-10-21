// const arr = [1, 2, 3, 4, 5]
// // forof loop
// for(i of arr) {
//     console.log(i)
// }

// // map is a datatype which remembers order and has unique values

// // object is not iterable on forof loop

// // forin loop

// const lang = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by Apple"
// }

// for (const key in lang) {
//     console.log(key)   
//     console.log(`${key} is shortcut for ${lang[key]}`)    
// }

//for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => console.log(item))
// coding.forEach( (item, index, arr) => console.log(item, index, arr))

const myCoding = [
    {
        langName: "javascript",
        ext: "js"
    },
    {
        langName: "java",
        ext: "java"
    },
    {
        langName: "python",
        ext: "py"
    }
]

myCoding.forEach( (item, i) => {
    // console.log(item.langName, i)
})

//filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (item) => item > 4)
// console.log(newNums)

// map

// const newNums = myNums.map( (nums) => nums+ 10 )
// console.log(newNums)