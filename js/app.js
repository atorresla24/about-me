'use strict'

console.log('hey world hey!');

let identity = prompt('Hello! What is your name?');
alert('Hi ' + identity + '! ' + 'That is such a cool name!');

let responseOne = prompt('Do I have any pets?').toLowerCase();

if(responseOne === 'yes' || responseOne === 'y'){
  alert('Not unless you count my cousins');
} else if(responseOne === 'no' || responseOne === 'n'){
  alert('You are right!');
}

let responseTwo = prompt('Do I like to read books?').toLowerCase();

if(responseTwo === 'yes' || responseTwo === 'y'){
  alert('DING DING DING! You are correct ' + identity + '!');
}else if(responseTwo === 'no' || responseTwo === 'n'){
  alert('Ehhhhhh wrong!');
}

let responseThree = prompt('Do I like to watch movies?').toLowerCase();

if(responseThree === 'yes' || responseThree === 'y'){
  alert('You are correct!');
}else if(responseThree === 'no' || responseThree === 'n'){
  alert('Nice try but wrong');
}

let responseFour = prompt('Do I keep my shoelaces untied?').toLowerCase();

if(responseFour === 'yes' || responseFour === 'y'){
  alert('Yes, it is a choice');
}else if(responseFour === 'no' || responseFour === 'n'){
  alert('Nope, you are not right this time' + identity);
}

let responseFive = prompt('Do I listen to rap music?').toLowerCase();

if(responseFive === 'yes' || responseFive === 'y'){
  alert('Yup I love rap!');
}else if(responseFive === 'no' || responseFive === 'n'){
  alert('Why could I not like rap music');
}

let welcome = alert('Welcome to my About Me page ' + identity + '!');