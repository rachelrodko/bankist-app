'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. 
Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob', 'Sue'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.rfp = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

// const f = dogs.findIndex(function (x) {
//   return x.owners.includes('Sarah');
// });

const sarah = function (dog) {
  const y = dog.find(function (x) {
    return x.owners.includes('Sarah');
  });
  console.log(
    `Sarah dog is eating ${y.curFood > y.rfp ? 'too much' : 'too little'}`
  );
};
sarah(dogs);
const splStr = function (x) {
  const n = x.join(' and ');
  return n;
};

// dogs[0].owners.splice(1, 0, 'and');
// console.log(dogs);
const calcFood = function (dogs) {
  const tooLittle = dogs
    .filter(dog => dog.curFood < dog.rfp * 0.9)
    .flatMap(x => x.owners);
  console.log(`${splStr(tooLittle)}'s dog eat too little`);

  const tooMuch = dogs
    .filter(dog => dog.curFood > dog.rfp * 1.1)
    .flatMap(x => x.owners);
  console.log(`${splStr(tooMuch)}'s dog eat too much`);
};
//   .map(dog => dog.curFood < dog.rfp * 1.1 && dog.curFood > dog.rfp * 0.9)
//   );
// };

const foodCheck = function (dog) {
  return dog.curFood < dog.rfp * 1.1 && dog.curFood > dog.rfp * 0.9;
};
const okFilter = dogs.filter(foodCheck);
const okCheck = dogs.some(foodCheck);
console.log(okFilter);
console.log(okCheck);
calcFood(dogs);

const exact = dogs.some(dog => dog.curFood === dog.rfp);
// {
console.log(exact);

const dogsCopy = dogs.slice();
console.log(dogsCopy);
const dogsSorted = dogsCopy.sort(function (a, b) {
  if (a.rfp > b.rfp) return a.rfp - b.rfp;
});
console.log(dogs);
console.log(dogsSorted);
// } {
//     console.log(`${x.owners}'s dog is eating too little`);
//   } else if (x.curFood > x.rfp * 1.1) {
//     console.log(`${x.owners}'s dog is eating too much`);
//   } else {
//     console.log(`${x.owners}'s dog is eating ok amount`);
//   }
// };

// calcFood(dogs[f]);

// const calcAcceptableRange = function (rfp, curFood) {
//   if (curFood >= rfp * 0.9 && curFood <= rfp * 1.1) {
//     return 'within normal range';
//   } else if (curFood > rfp * 1.1) {
//     return 'too much';
//   } else {
//     return 'too little';
//   }
// };

// console.log(dogs);
// for (const { weight, owners, rfp, curFood } of Object.values(dogs)) {
//   if (owners.includes('Sarah')) {
//     console.log(
//       ` ${
//         owners.length > 1 ? 'owners are' : 'owner is'
//       } ${owners} and the weight is ${weight} and it is eating ${calcAcceptableRange(
//         rfp,
//         curFood
//       )}`
//     );
//   }
// }

//create object sum of deposits and wirhtdrawls
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//////DISPLAY TRANSACTIONS///////

const displayMovs = function (movs, sort = false) {
  containerMovements.innerHTML = '';

  //display the sorted transactions (high to low)//
  const movements = sort
    ? movs.slice().sort(function (a, b) {
        return a - b;
      })
    : movs;
  //display transactions by date//
  movements.forEach(function (x, i) {
    const type = x < 0 ? 'withdrawal' : 'deposit';
    const movTxt = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${x}€</div>
        </div>`;
    return containerMovements.insertAdjacentHTML('afterbegin', movTxt);
  });
};

//////DISPLAY BALANCE///////
const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

/////DISPLAY TOTAL DEPOSITS///////
const displaySummary = function (acc) {
  const intRate = acc.interestRate;
  const totalDeposits = acc
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${totalDeposits}€`;

  /////DISPLAY TOTAL WITHDRAWALS///////
  const totalWithdrawals = acc
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(totalWithdrawals)}€`;
  ('\u20AC');

  /////DISPLAY INTEREST///////
  const interest = acc
    .filter(mov => mov > 0)
    .map(deposit => (deposit * currentAccount.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

/////CREATE USERNAME///////
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (y) {
        return y[0];
      })
      .join('');
  });
};

createUsername(accounts);

const updateUI = function (acc) {
  displayMovs(acc.movements);
  displayBalance(acc);
  displaySummary(acc.movements);
};

/////LOG IN FUNCTIONALITY///////
let currentAccount;
///FIND THE CURRENT ACCOUNT///
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(function (acc) {
    return inputLoginUsername.value === acc.username;
  });
  console.log(currentAccount);
  if (Number(inputLoginPin.value) === currentAccount?.pin) {
    containerApp.style.opacity = '100';
    console.log('login');
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    ///CLEAR INPUT FIELDS///
    inputLoginPin.value = '';
    inputLoginUsername.value = '';
    inputLoginPin.blur();
  }
  ///DISPLAY TRANSACTIONS///
  updateUI(currentAccount);
});

/// TRANSFER MONEY FUNCTIONALITY///
let tfrAccount;
let tfrAmount;

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  /// FIND TRANSFER ACCOUNT ///
  tfrAmount = Number(inputTransferAmount.value);
  tfrAccount = accounts.find(function (acc) {
    return inputTransferTo.value === acc.username;
  });
  inputTransferTo.value = inputTransferAmount.value = '';
  if (
    tfrAmount > 0 &&
    tfrAccount &&
    tfrAmount <= currentAccount.balance &&
    tfrAccount?.username !== currentAccount.username
  ) {
    /// DOING THE TRANSFER ///
    currentAccount.movements.push(-Math.abs(tfrAmount));
    tfrAccount.movements.push(tfrAmount);

    /// UPDATED TRANSACTIONS AND SUMMARY ///
    updateUI(currentAccount);
    console.log('Transfer valid');
  } else {
    console.log('Not possible. Please try again');
  }
});

/// LOAN FUNCTIONALITY ///
//bank grants loan on condition there is at least 1 deposit with at least 10% of requested loan amount//
//inputLoanAmount

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let x = Number(inputLoanAmount.value);
  if (x > 0 && currentAccount.movements.some(mov => mov >= x * 0.1)) {
    currentAccount.movements.push(x);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

const p = account4.movements.every(function (mov) {
  return mov > 0;
});

/// DELETE ACCOUNT OPTION ///

let closeAcc;
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  closeAcc = accounts.findIndex(function (acc) {
    // return acc.username === currentAccount.username;
    return acc.username === currentAccount.username;
  });
  console.log(closeAcc);
  if (
    accounts[closeAcc] &&
    Number(inputClosePin.value) === accounts[closeAcc]?.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    // delete account //
    accounts.splice(`${closeAcc}`, 1);

    // hide UI //
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovs(currentAccount.movements, !sorted);
  sorted = !sorted;
});
containerApp.addEventListener('click', function () {
  const o = Array.from(
    document.querySelectorAll('.movements__value'),
    function (x) {
      return Number(x.textContent.replace('€', ''));
    }
  );
});
