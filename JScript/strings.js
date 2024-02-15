// string methods

// toUpperCase -> returns upper case letters of a string

let myName='rita'
let capMyName=myName.toUpperCase(); //RITA
console.log(capMyName);

// toLowerCase()->returns lower casing of a string
let myClub="CHELSEA";
let lowClub= myClub.toLowerCase();

// charAt -> returns the index number specified of the string


myName.charAt(2)
console.log(myName.charAt());
console.log(myName.charAt(2));

// length -> returns the size or number of characters in a string
// get the size or number of characters in a  myClub


console.log(myClub.length);

// trim -> removes whitespaces at the end and begining of a string
// [endtrim,starttrim]
let hobby="manga"
let trimmedHobby=hobby.trim()
console.log(hobby);
console.log(trimmedHobby);
// getting the lenght after timing
console.log(trimmedHobby.length);

// includes -> checks if a character given is in/existing in a string
let myMail="victor@gmai.com"
let checkMail=myMail.includes('@')
console.assertlog(checkMail);

// slice -> returns a new string from a an already existing string
let OurNames="Chike Precious Mrs Mena Rita Pelumi Victor Obed Joshua Godsgift "
let obed=OurNames.slice(43,47);
console.log(obed);

let obedNum=obed.charAt()
obedNum=obedNum.toUpperCase()
let obedUpp=obed.slice(1,4)
console.log(obedUpp);
console.log(obedNum);
console.log(obedNum + obedUpp)



let chike=OurNames.slice(0,5);
console.log(chike);
let chikeNum=chike.charAt()
chikeNum=chikeNum.toLowerCase()
let chikeLower=chike.slice(1,5)
console.log(chikeLower);
console.log(chikeNum);
console.log(chikeNum + chikeLower)



let Precious=OurNames.slice(6,14);
console.log(Precious);

let MrsMena=OurNames.slice(15,23);
console.log(MrsMena);

let Rita=OurNames.slice(24,28);
console.log(Rita);

let Pelumi=OurNames.slice(29,35);
console.log(Pelumi);

let Victor=OurNames.slice(36,42);
console.log(Victor);

let Joshua=OurNames.slice(48,54);
console.log(Joshua);

let Godsgift=OurNames.slice(55,63);
console.log(Godsgift);

//get everybody names and capitalize the first letter of their names
// e.g obed,chike