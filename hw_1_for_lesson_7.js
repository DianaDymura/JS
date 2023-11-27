//Task 1
var str = 'A family of 9 small rabbits lives in the forest near our house.';
var re = /[b-zB-Z0-9]/g;
var res = str.match(re);
console.log(res);

//Task 2
var text = 'cat car can';
var re = /\b(ca[t,n]+)\b/g;
var res = text.match(re);
console.log(res);

//Task 3
var text = 'I would like 8 cups of coffee, please.';
var re = /(?:\d+) cups of coffee/;
var match = text.match(re);
console.log(text.match (re));
//можна ввести змінну, через яку будемо виводити лише число
var text = 'I would like 8 cups of coffee, please.';
var re = /(\d+) cups of coffee/;
var match = text.match(re);
var cups = match[1]; 
console.log(cups);
//Task 4
var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var re = /\b[h]\w+\b/gi;
var words = text.match(re);
console.log(words);
// aletrnatively we can use [a-zA-Z] instead of \w+ if we're sure that our words consist entirely of letters (no numbers or symbols)
var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var re = /\b[h][a-zA-Z]+\b/gi;
var words = text.match(re);
console.log(words);
//Task 10 
var initial_name = 'John Smith';
var re = /(John) (Smith)/;
console.log(initial_name);
var changed = initial_name.replace(re, "$2 $1");
console.log(changed);