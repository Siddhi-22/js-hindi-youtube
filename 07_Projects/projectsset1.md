# Projects related to DOM

## project links

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
## Project 1

```javascript
// Backgorund Changer


const buttons = document.querySelectorAll('.button');
//console.log(buttons);

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;

      /* switch (button) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        body.style.backgroundColor = 'white';
        break; */
    }
  });
});


```

## Project 2

```javascript
//BMI Calculator


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give valid height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give valid weight ${weight}`;
  }else{
    const bmi = (weight/((height * height)/10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
  }
  
});

```




## Project 3

```javascript
// Clock


const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  //console.log(date.toLocaleTimeString());

  clock.innerHTML = date.toLocaleTimeString();

}, 1000);

```





## Project 4

```javascript
// Guess a Number Game


let randomNumber = parseInt(Math.random() * 10 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number higher than 1`);
  } else if (guess > 100) {
    alert(`Please enter a number lesser than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      dislplayGuess(guess);
      displayMessage(`Game Over... Random number was  ${randomNumber}`);
      endGame();
    } else {
      dislplayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('Hurray!! Yout guessed it right...');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low...');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high...');
  }
}

function dislplayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');

  p.classList.add('button');
  p.innerHTML = `<h2 id='newgame'>Start new Game. </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebtn = document.querySelector('#newgame');
  newGamebtn.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```