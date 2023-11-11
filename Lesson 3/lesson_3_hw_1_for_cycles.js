//Task 1
  let i = 0;
while (i<8) { 
    console.log( "число - " + i );
    i++;
}
//Task 2
// for cycle
let sum = 0;
for (let x = 0; x <= 50; x++) {
    if (x % 2) continue;
    sum += x;
}
console.log('Сума парних чисел: ' + sum);
// while cycle
let v = 0;
let total = 0;
while (v <= 50) {
    if (v % 2 === 0) {
        total += v;
    }
    v++;
}
console.log('Сума парних чисел: ' + total);
// do...while
let result = 0;
let z = 0;
do {
    if (z % 2 === 0) {
        result = result + z;
    }
    z = z + 1;
} while (z <= 50);
console.log('Сума парних чисел: ' + result);
//Task 3
let summary = 0;
let secondNumber = 250;
for (let firstNumber = -100; firstNumber <= secondNumber; firstNumber++) {
    summary += firstNumber;
}
console.log('Сума всіх проміжних чисел: ' + summary);
//Task 4
let p = 10;
while (p<=10 && p>=0) { 
    console.log(p + " seconds left");
    p--;
}
//Task 5
for (let start = 7; start <200; start +=7) {
    console.log (start);
}
console.log('The end of iteration');
//Task 6
//for cycle
let factorial = 4;//ініціалізуємо змінну з числовим значенням факторіалу
let f = factorial;// ініціалізуємо змінну факторіалу, що буде використовуватися для обрахунків
for (let i = factorial - 1; i >= 1; i--) {/* ініціалізуємо змінну, що буде використовуватися для обрахунку
 зменшеного на 1 числового значення факторіалу під час кожної ітерації*/
  f *= i;
}
console.log('Факторіал - ' + f);
//while cycle
let fact = 4;
let e=1;/*це я підглядала, але так і не зрозуміла, чому в цьому циклі одній змінній присвоюється значення 1 
(інакше результат некоректний),в той час як у циклі for у всіх змінних однакове значення, що дорівнює значенню факторіала */
let u= fact
while (u>=1) { 
   e*=u;
    u--;
}
console.log(e);
//do...while cycle
let fActorial = 4;
let r = 1;/*це я підглядала, але так і не зрозуміла, чому в цьому циклі одній змінній присвоюється значення 1 
(інакше результат некоректний), в той час як у циклі for у всіх змінних однакове значення, що дорівнює значенню факторіала */
let w = fActorial;
do {
    r *=w;
    w--;
    console.log(r);
}
while (w >=1);
// Task 7
let bucket = 5; 
let initialBathState = 0;
let bathCapacity = 60; 
let quantityOfBuckets = 0;
do {
    initialBathState +=bucket; 
    quantityOfBuckets++; 
}
while (initialBathState <bathCapacity);
console.log("Ванна наповнена "+ quantityOfBuckets + " відрами");