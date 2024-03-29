console.log('number' + 3 + 3)
//результат: "number33"/ Це конкатинація, оскільки є змінна типу 'string', тому всі решта змінних також об'єднуються (склеюються).
console.log(null + 3)
//результат: "3". null перетворюється на змінну типу "number", тобто 0, а далі відбувається доавання: 0+3=3
console.log(5 && "qwerty")
//результат: "qwerty". При використанні логічного оператора "&&" виводитьсяя останнє значення "true", за умови, що всі значення "true".
console.log(+'40' + +'2' + "hillel")
/*
результат: "42hillel". Унарний + перед змінними типу 'string'-> "40" і "2" перетворює їх на на змінні типу "number". 
Потім відбувається дія  додавання 40+2=42.
Остання операція - конкатинація, оскільки є змінна "hillel" типу 'string', тому всі змінні також об'єднуються (склеюються) -> 42hillel
*/
console.log('10' - 5 === 6)
/*результат "false": В даному випадку маємо строгу рівність і першочергово порівнюються типи змінних.
Не враховуючи автоматичного перетворення типу змінної, '10' в даному випадку є змінною типу 'string',
тому вже на цьому етапі рівність не виконується і ми отримуємо "false".
*/
console.log(true + false)
// результат "1": JS всі змінні намагається привести до чисел, true це 1, а false це 0. В результаті 1+0=1.
console.log('4px' - 3)
/* результат "NaN": виконання віднімання неможливе, тому що використовуються різні типи змінних. 
'4px' - 'string', яку неможливо конвертувати в число, а 3 - "number".
*/
console.log('4' - 3)
//результат: "1". '4' перетворюється на змінну типу "number", тобто 4, а далі відбувається віднімання: 4-3=1
console.log('6' + 3 ** 0)
/*результат: "61". У математичної дії піднесення в степінь (**) пріорітет вищий, ніж у додавання.
Тому спочатку виконуємо піднесення у степінь 3 ** 0=1, а потім конкатинація, оскільки '6' - це 'string'. Отримуємо "61" типу 'string'.
*/
console.log(12 / '6')
//результат: "2". 'string' "6" перетворюється на змінну типу "number", тобто 12, а далі відбувається ділення: 12/6=2
console.log('10' + (5 === 6))
/*результат: "10false". По аналогії з  математичними діями спочатку виконується дія у дужках - строге порівняння (===).
5 і 6 обидві змінні типу "number", але значення у них не рівні, тому отримуємо "false". 
Далі конкатинація "10 + false" -> 10false.
*/
console.log(null == '')
/*результат: "false". Порожня строка " " прирівнюється до false, null також прирівнюється до false.
Оскільки == - нестроге порівняння, то типи змінних не беруться до уваги при порівнянні, 
а значення змінних в даному випадку збігаються -> "false".
*/
console.log(3 ** (9 / 3))
/*результат: "27". По аналогії з  математичними діями спочатку виконується дія у дужках - ділення,
а потім результат ділення підноситься у степінь -> 3 **3=27
*/
console.log(!!'false' == !!'true')
/*результат: "true": !!  - це подвійне заперечення. Перше заперечення використовується для того,
щоб інтерпретувати змінну типу 'string' у булевому контексті, але присвоює при цьому протилежне логічне значення(true->false). 
Оскільки строка не порожня, то має бути "true", але виходячи з вищеописаного буде "false".
Друге заперечення повертає істиннє значення і присвоює його уже змінній  типу "boolean" (false ->true (that is originally true)).
додаємо друге заперечення до "false" і воно стає "true"ю
Таким чином можна цей вираз спрощено записати як "true"=="true". 
Метою використання цього оператора є гарантування того, що в результаті виконання цієї операці явно буде отримана саме змінна типу "boolean".
*/
console.log(0 || '0' && 1)
/*результат: "1". У оператора І (&&) пріорітет вищий за оператора АБО (||), тому його дія виконується першою.
Оператор (&&) виводить останнє значення "true" (1), якщо усі порівнювані значення "true": в цьому випадку '0' -  змінна типу 'string'з 
не порожнім значенням, тобто "true". Другий оператор || знаходить перший операнд зі значенням "true" (short-circuit behavior of the logical operators), 
і це значення виводиться як результат.
*/
console.log((+null == false) < 1)
/*
результат: "false". Спочатку вконується операція в дужках. Унарний + перед змінною конвертує null в number, а 0 є false.
Оскільки == - нестроге порівняння, то типи змінних не беруться до уваги при порівнянні, 
а значення змінних в даному випадку збігаються -> "false"= "false", ця рівність є валідною, тобто "true".
"true" прирівнюється до 1 і в результаті отримуємо 1 < 1, що є false.
*/
console.log(false && true || true)
/*результат: "true ". У оператора І (&&) пріорітет вищий за оператора АБО (||), тому його дія виконується першою.
Оператор (&&) виводить останнє значення "true" (1), якщо усі порівнювані значення "true"або перше значення "false" як у цьому випадку.
Другий оператор || знаходить перший операнд зі значенням "true": на цьому етапі вираз вже можна представити як (false|| true) 
і це значення виводиться як результат.
*/
console.log(false && (false || true))
/*результат: "false ". Спочатку вконується операція в дужках. Оператор || знаходить перший операнд зі значенням "true".
Оператор (&&) виводить останнє значення "true" (1), якщо усі порівнювані значення "true"або перше значення "false" як у цьому випадку.
*/
console.log((+null == false) < 1 ** 5)
/*результат: "false ". Спочатку вконується операція в дужках. Унарний + перед змінною конвертує null в number, а 0 є false.
Оскільки == - нестроге порівняння, то типи змінних не беруться до уваги при порівнянні, 
а значення змінних в даному випадку збігаються -> "false"= "false", ця рівність є валідною, тобто "true".
"true" прирівнюється до 1.
В правій частині число 1 підноситься до 5 степені в результаті ми отримуємло 1.
Фінальне порівняння 1 < 1, що є false.
*/