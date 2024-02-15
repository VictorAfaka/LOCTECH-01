
// conditions are requirement to be met, to be passed before a black of code
// can be excited, before something wil happen
// e.g pelumi will ony come to class if we are larning javascript
// prompt is used to get user info
let age =prompt('enter your age');
// we can change from one datatype to another
// here, we are changing our age variable which is string to a number variablle
age=Number(age)
// checking if the user is imputing anything that is not a number
if(typeof(age)!==Number)
if(age!==18){
    // show a pop up to the browser
    alert('you can vote')
}
else{
    alert('you can not vote')
}
console.log(typeof(age));

// typeof
// Number
// string

// grade conditions
let score=prompt('enter your score')
score= Number(Score)
if(typeof(score)!==Number){
    alert('rich kid, put number')
}
if(score<=70 && score<=100){
    alert('you have an A, Congratulations')
}
else if(score>=60 && score<=69){
    alert('B')
}
else if(sore>=50 && score<=59){
    alert('C')
}
else if(sore>=40 && score<=49){
    alert('D')
}
else if(sore>=35 && score<=39){
    alert('E')
}
else if(sore>=0 && score<=34){
    alert('F')
}
console.log(typeof(score));


// login prompts 2

  // Get the username using the prompt dialog
    let Username = prompt('Enter your username:');

    if (Username === null) {
        // User clicked 'Cancel'
        alert('Login canceled.');
    } else if (Username === 'awesome') {
        // If the username matches, ask for the password
        let Password = prompt('Enter your password:');

        if (Password === null) {
            // User clicked 'Cancel'
            alert('Login canceled.');
        } else if (Password === 'javascript') {
            alert('Welcome, Login successful!');
        } else {
            alert('Incorrect password. Please try again.');
        }
    } 


    //trafic color
   

    