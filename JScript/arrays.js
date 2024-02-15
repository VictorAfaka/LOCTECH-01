// arrays are collection of items and these  items can be of different data types

const people=['mrs mena', 'jah', "God'sgift", 'chioma', 'mr chike']

// you can also reate an arraay like this
//const person= new Array()

//console.log(people)

// arrays methods
// push mehod -> adds a new item at the end of the array
people.push('pelumi');
people.push('rita')
//console.log(people);

// pop-> removes an item from the end of the array
people.pop();
//console.log(`after popping ${people}`);
//console.log("after popping" + people);

// concat-> merges two array together
const peopleMale=['chike', 'victor', 'jah', 'josh']
const peopeFemale=["mrs mena", 'chioma']
//const fullHouse=peopleFemale.concat(peopleMale);
//console.log(fullHouse);

//shift-> removes an item from the start of the array
people.shift()
//console.log(` after shiftting ${people} `);

// unshift-> adds to the start of an array
people.unshift('victor')
//console.log(people);

// includes->check to see if a vaue exist in our array

//console.log(people.includes('jah'));

//the joint() returns an array as a string.

// the joint() method does not change the original array.

// Any seperate can be specified. the default is coma(,).


//console.log(people.joint());

// splice->
// the splice() method adds and/or removes array elements.

// in splce, when the second item is not 0 , we are deleting

-
//const fruit = ["banana","orange", "apple","mango"]
//fruit.splice(3,0, 'lime','pawpaw', 'straw-berry')
//console.log(fruit);


const player = ['messi','ronaldo','hazard','james','thiago','owen','rashford']

// 1
player.push('klopp','pep','ten-hag')
console.log(player);

// 2
const player = ['messi','ronaldo','hazard','james','thiago','owen','rashford']
player.unshift('seun','henry','ugochi')
console.log(player);

// 3
const player = ['messi','ronaldo','hazard','james','thiago','owen','rashford']
player.shift('messi')
console.log(` after shiftting ${player} `);

//4
const player = ['messi','ronaldo','hazard','james','thiago','owen','rashford']