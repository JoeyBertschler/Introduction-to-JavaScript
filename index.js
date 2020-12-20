/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Create a variable called votingAge and assign it a value
   2. Console log true if age is 18 or higher

   HINT: no function required
*/

let votingAge = 18

if (votingAge >= 18) {
  console.log(true)
}


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Console log the new value of the 1st variable

   HINT: no function required
*/

let one = 1
let two = 2

if (one < two) {
  one=one+1
  console.log(one)
}

/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Console log the result

   HINT: look up the Number method
*/

const declare = "1999"
// declare.toInteger() python only?
Number(declare)
console.log(declare)

/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(a,b){
    return a*b
  }
multiply(2,3)


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Doge years

/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in doge years (1 human year is equal to 7 doge years)
   3. Return the newly calculated age
*/

function dogYears(age){
    return age*7
}

dogYears(15)


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Doge feeder - Depending on their weight and age, we need to know how many pounds of food to feed our doge each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. 
    For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the doge/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights.
  
  Feeding Requirements:

  Adult Doges 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puppies less than 1 year ..... most dogs aka. doges are considered puppies until they are 2 tho.. I'm confused. Old dog it is.
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(pounds, age){
  //doges
  if (age >= 1 && pounds <= 5){ //takes either this one or the second one under pups for some reason
    return pounds*0.05
  }
  else if (age >= 1 && pounds <= 10 && pounds > 5){
    return pounds*0.04
  }
  else if (age >= 1 && pounds <= 15 && pounds > 11){ //supposedly this category
    return pounds*0.03
  }
  else if (age >= 1 && pounds > 15){
    return pounds*0.02
  }
  //pups
  else if (age < 4/12){
    return pounds*0.1
  }
  else if (age < 7/12){
    return pounds*0.05
  }
  else {
    return pounds*0.04
  }
}

console.log(hungryDog(15,1))

// below my prior failed attempt. really not sure how to solve this in an elegant fashion. 
// I seem to have solved the problem now, but it's very crude

  // if (age >=1){
  //   if (pounds < 5){
  //       return pounds*0.05;
  //   } else if (pounds <= 10 && pounds >= 6){
  //       return pounds*0.04;
  //   } else if (pounds <= 15 && pounds >= 11){
  //       return pounds*0.03;
  //   } else {
  //       return pounds*0.02;
  //   }
  // else {               code turned weird here, half transparent, threw lots of errors, please explain why
  //   if (age < )
  // }


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)

HINT: While you can complete this with only conditionals based on strings, 
it may help to equate choice to a number when using Math.random()

Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - 
  the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

/* 1. Create a global variable that randomly generates the computer's choice,
   2. Receive 2 parameters the user's choice and the computer's choice
   3. Return whether the user won, lost, or tied
   4. The strings returned need to match "you win!", "you lose!" or "it's a tie" */

// wanted to use switch but well, later I suppose. previous attempt below

// I made multiple solutions. test doesn't like any of them. the first one right below
// this line is my most recent one. I spent over 12 hours on this. I know I can get
// the test file to accept it if I use a lenghty switch version but I overlooked the deadline.

function game(user, computer){
}

// function game(user, computer){
//   let computer = Math.random();
//   if (computer <0.34){
//       computer = "rock";
//   } 
//   else if (computer <=0.67){
//            computer = "paper";
//   }
//   else{
//            computer = "scissors";
//   }

// console.log(computer);
// let user = prompt("rock, paper or scissors?");

// let result = computer+user 

// if (result = "rockscissors"   || 
//              "scissorspaper"  ||
//              "paperrock"){
//   console.log("you lose!");
// }
// else if (result = "rockrock"  ||
//                   "scissorsscissors" ||
//                   "paperpaper"){
//   console.log("it's a draw")
// }
// else {
//   console.log("you win!")
// }
// }



// not it either
// let computer = Math.random();
//   if (computer <0.34){
//       computer = "rock";
//   } 
//   else if (computer <=0.67){
//            computer = "paper";
//   }
//   else{
//            computer = "scissors";
//   }

// let user = prompt("rock, paper or scissors?");

// function game(user, computer){
//   switch (user+computer){
//     case "rockscissors":
//     case "scissorspaper":
//     case "paperrock":
//       console.log("you win!");
//       break;
//     case "scissorsrock":
//     case "paperscissors":
//     case "rockpaper":
//       console.log("you lose!");
//       break;
//     case "rockrock":
//     case "scissorsscissors":
//     case "paperpaper":
//       console.log("it's a tie")
//       break;
//   }
// }

// console.log(game(1,2));


 //  console.log(game(1,2))

/* previous attempt. 

function game(user){
  function computerChoice() {
    const computerChoice = [rock, paper, scissors];
    const randomNumber = Math.floor(Math.random()*3);
    return computerChoice[randomNumber];
  }
  function userChoice(user) {
    const computerChoice = computerChoice();
    switch (user+computerChoice){
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
        console.log("you win!");
        break;
      case "scissorsrock":
      case "paperscissors":
      case "rockpaper":
        console.log("you lose!");
        break;
      case "rockrock":
      case "scissorsscissors":
      case "paperpaper":
        console.log("it's a tie")
        break;
    }
  }
}
console.log(game(2))
*/

  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(numberOfKilometers){
  return numberOfKilometers*0.621371
}

console.log(miles(10))

//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of cm
  2. Convert the number of cm to feet
  3. Return number of feet
*/

function feet(numberOfFeet){
  return numberOfFeet/30.48
}

console.log(feet(10)) 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start the count down from the number received 
  2. At each invocation, it should RETURN this string (note: the tests are expecting the same string as below):
      "{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} 
      bottles of soda on the wall"
*/

function annoyingSong(number){
  for (count = number; count >= 1; count = count -1){
    console.log("{number} bottles of soda on the wall, {number} bottles of soda, take one down pass it around {number left over} bottles of soda on the wall");
    }
  }

let number = annoyingSong(2)

//number lef tover how?
// put in number in sentence how? don't know what to feed google, searched a lot, now asking slack

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 should return 'you got an A' 
   80-89 should return 'you got a B'
   70-79 should return 'you got a C'
   60-69 should return 'you got a D'
   below should return 'you got an F'
*/
  
function grade(points){
  switch (true) {
    case points >= 90:
  console.log('you got an A');
  break;
    case points >= 80 && points <= 89:
  console.log('you got a B');
  break;
    case points >= 70 && points <= 79:
  console.log('you got a C');
  break;
    case points >= 60 && points <= 69:
  console.log('you got a D');
  break;
    case points < 60:
  console.log('you got an F');
  break;
  }
}
let points = grade(59)
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    //console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
