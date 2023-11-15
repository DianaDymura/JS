//Task 1
function verifyisNaN (){
    let a = "24";
    console.log(Number.isNaN("20"));
    let b = false;
    console.log(isNaN(false));
    let c;
    console.log(Number.isNaN());
    let d = "@";
    console.log(isNaN( "@"));
    let e = /square/;
    console.log(isNaN( /square/));
    }
    verifyisNaN () 
// Task 2 (longer version, this task was really hard for me)
function checkProbabilityTheory (startNum, endNum, count) {
    let numbers = [];
    
    while (numbers.length < count) {
      let randomNum = Math.floor(Math.random() * (endNum - startNum + 1) + startNum);
      
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    
    return numbers;
  }
  
  let startNum = 100;
  let endNum = 1000;
  let count = 20; // Number of non-repetitive numbers to generate
  
  let result = checkProbabilityTheory(startNum, endNum, count);
  console.log(result);
  function checkEvenOddNumber (result) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let num of result) {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      } else {
        oddNumbers.push(num);
      }
    }
    
    console.log('Counted '+ evenNumbers.length +' Even Numbers:', evenNumbers);
    console.log('Counted '+ oddNumbers.length +' Odd Numbers:', oddNumbers);

    countEvenOddPercentage(evenNumbers, oddNumbers);
}
function countEvenOddPercentage(evenNumbers, oddNumbers) {
    let totalCount = evenNumbers.length + oddNumbers.length;
    let evenPercentage = (evenNumbers.length / totalCount) * 100;
    let oddPercentage = (oddNumbers.length / totalCount) * 100;
    console.log('Even numbers Percentage:', evenPercentage.toFixed(2) + '%');
    console.log('Odd numbers Percentage:', oddPercentage.toFixed(2) + '%');
  }
  checkEvenOddNumber(result);

// realization with "callback" function (I think this looks better)
function checkProbabilityTheory(startNum, endNum, count, callback) {
    let numbers = [];

    while (numbers.length < count) {
        let randomNum = Math.floor(Math.random() * (endNum - startNum + 1) + startNum);

        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    callback(numbers);
}

let startNum = 100;
let endNum = 1000;
let count = 20; // Number of non-repetitive numbers to generate

function checkEvenOddNumber(numbers) {
    let evenNumbers = [];
    let oddNumbers = [];

    for (let num of numbers) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num);
        }
    }

    console.log('Counted ' + evenNumbers.length + ' Even Numbers:', evenNumbers);
    console.log('Counted ' + oddNumbers.length + ' Odd Numbers:', oddNumbers);

    countEvenOddPercentage(evenNumbers, oddNumbers);
}

function countEvenOddPercentage(evenNumbers, oddNumbers) {
    let totalCount = evenNumbers.length + oddNumbers.length;
    let evenPercentage = (evenNumbers.length / totalCount) * 100;
    let oddPercentage = (oddNumbers.length / totalCount) * 100;
    console.log('Even numbers Percentage:', evenPercentage.toFixed(2) + '%');
    console.log('Odd numbers Percentage:', oddPercentage.toFixed(2) + '%');
}

checkProbabilityTheory(startNum, endNum, count, checkEvenOddNumber);
//Task 3
// let text = "Sunflower";
// let symbol = "#";
// let quantityOfSymbols = 3;
// function useBeginningEnd() {
//     if (quantityOfSymbols < 5) {
//         console.log(function (padStart)};
//     } else (quantityOfSymbols >= 5) 
//         console.log( function (padEnd));
//     }
//     let pad = () => {
//         switch (useBeginningEnd()) {
//             case padStart (quantityOfSymbols, symbol):
//                 console.log(symbol + quantityOfSymbols + text);
//                 break;     
//             case padEnd (quantityOfSymbols, symbol):
//                 console.log( text + symbol + quantityOfSymbols);
//                 break;
//     }
// }
//    pad();

let text = "Sunflower";
let symbol = "#";
let quantityOfSymbols = 10;

function useBeginningEnd() {
  if (quantityOfSymbols < 5) {
    return "padStart";
  } else {
    return "padEnd";
  }
}

let pad = () => {
  switch (useBeginningEnd()) {
    case "padStart":
      console.log(symbol.repeat(quantityOfSymbols) + text);
      break;
    case "padEnd":
      console.log(text + symbol.repeat(quantityOfSymbols));
      break;
  }
};

pad();