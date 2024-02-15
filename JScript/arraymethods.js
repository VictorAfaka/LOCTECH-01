// foreach-executes a function on every item in the array and does not retun a new array

// functions are hoisted-> you can call/invoke a function before declearing the fuunction

hi();

function hi(){
    alert('hiiiii')
}
// return the squares of the items in the array
const nums=[2,4,6,8,10];

for(let i=0; i<nums.length; i++){
   let result = Math.pow(nums[i],2)
   console.log(result)
//    4
// 8
//  36
}

// using for each baby way
nums.forEach(square)

function square(el){
    let result=Math.pow(el)
    console.log(`for each ${result}`)
}

// normal way
nums.forEach((num)=>{
    let result =Math.pow(num,2)
    console.log(result);
})
const num2=[100,81,64,49,36,25,16,9,4];
// return he square root of the items in the array using 
// the baby way, normal way, and for loop

// return the numbers that passes the test scores>50 and scores<50
const scores=[43,50,70,100,99,56,78,54];
let result = scores.filter((score)=>{
    return score > 50 
})
console.log( result);
 result = scores.filter((score)=>{
    return score < 50
 })
 console.log(result);

//  reduce method returns a single value
const marks=[34,56,70,54,34,67,78];

const avg=marks.reduce((sum,mark)=>{
    return (sum+mark)/marks.length
})
console.log(avg);

let sum =0
for(let i=0;  i<marks.length; i++){
    
  sum=sum+marks[i]
   const avg2= sum
   
}
console.log(sum);
// return the smallet value in our marks array
const minimum=marks.reduce((max,mark)=>{
    if(max < mark){
            return max
    }
    return mark
});
console.log(minimum);

// teneary operator -> the shorter way of writing if else{}

sex="boy"

sex=="boy" ? console.log("will carry two blocks") : console.log("will carry half block");

let isLogged=true


isLogged  ? console.log("user is logged in") : console.log("user  is logged out")
const theArray=[3,4,9,12,,16,15,5,25,24]
const otherArray=[2,4,6,8,10,15]
// 1. create a function to Add two numbers and get the average of those numbers
// 2. Find the square root of a number
// 3. Determine if a number is in an array
// 4. Multiply all the elements of an array by 2 e.g [1,2,3] becomes [2,4,6]
// 5. Extract all the elements that are divisible by 3 from an array
// 6. Join two arrays together e.g [1,2] and [3,4] becomes [1,2,3,4]
// 7. delete an item from an array at a specific index [4]
// 8. Delete an item from an array given the item index [7]