'use strict'

console.log('hey world hey!');

let identity = prompt('Hello! What is your name?');
alert('Hi ' + identity + '! ' + 'That is such a cool name!');
console.log(identity);

let score = 0;

let responseOne = prompt('Do I have any pets?').toLowerCase();

if(responseOne === 'yes' || responseOne === 'y'){
  alert('Not unless you count my cousins');
} else if(responseOne === 'no' || responseOne === 'n'){
  alert('You are right!');
  score++;
  console.log('Correct');
}

let responseTwo = prompt('Do I like to read books?').toLowerCase();

if(responseTwo === 'yes' || responseTwo === 'y'){
  alert('DING DING DING! You are correct ' + identity + '!');
  score++;
  console.log('Correct');
}else if(responseTwo === 'no' || responseTwo === 'n'){
  alert('Ehhhhhh wrong!');
}

let responseThree = prompt('Do I like to watch movies?').toLowerCase();

if(responseThree === 'yes' || responseThree === 'y'){
  alert('You are correct!');
  score++;
  console.log('Correct');
}else if(responseThree === 'no' || responseThree === 'n'){
  alert('Nice try but wrong');
}

let responseFour = prompt('Do I keep my shoelaces untied?').toLowerCase();

if(responseFour === 'yes' || responseFour === 'y'){
  alert('Yes, it is a choice');
  score++;
  console.log('Correct');
}else if(responseFour === 'no' || responseFour === 'n'){
  alert('Nope, you are not right this time' + identity);
}

let responseFive = prompt('Do I listen to rap music?').toLowerCase();

if(responseFive === 'yes' || responseFive === 'y'){
  alert('Yup I love rap!');
  score++;
  console.log('Correct');
}else if(responseFive === 'no' || responseFive === 'n'){
  alert('Why could I not like rap music');
}

let welcome = alert('Welcome to my About Me page ' + identity + '!');

function numGuess(){
  let number;
  let guesses = 4;
  for(let i=0; i < guesses; i++){
    let number = prompt('Guess a number 1-10 to enter!');
      if(number == 6){
        alert('Correct you may enter!');
        score++;
        console.log('Correct');
        break;
      }else if(number >= 6){
        alert('Too high try again');
      }else if(number <= 6){
        alert('Too low try again!');
    }
  }
  if(guesses = 4 && number != 6){
    alert('Answer was 6');
  }
}

function responseSeven(){
  let attempts = 6;
  let myArr = ['horror', 'action', 'suspense', 'fantasy', 'comedy']
  for(let i = 0; i < attempts; i++){
    let answer = prompt('What is my favorite movie genre?').toLowerCase();
  for(let j = 0; j < myArr.length; j++){
    if(answer == myArr[j]){
      alert('Yup! You got it right!');
      score++;
      console.log('Correct');
      i = 6
      break;
    }
  }
}
  alert('Answers are: Horror, Action, Suspense, Fantasy, Comedy');
}

numGuess();
responseSeven();

alert('You got ' + score + ' right!');