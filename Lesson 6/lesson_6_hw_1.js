//Task 1
var array1 = ['blue', 'green', 'yellow', true, 78];

var return_second_element = () => {
  return array1[1];
};
console.log('The second element in the array is: ' + return_second_element());
//Task 2
var array1 = ['blue', 'green', 'yellow', true, 78];
console.log('Initial array: ' + array1);
function update_array() {
  let a = array1.length;
  let b = array1.push('new item');
  if (a>b) {
    console.log("It is impossible");
  } else if (a<b) {
    console.log('Updated array is: ' + array1);
  }
}
update_array();
//Task 3
var array1 = ['ginger', 'pomgranate', 'eggplant', "red", 12];
var array2 = ['cherry', 'salmon', 'rose', "pepper", 60];
function combine (){
  let e = array1;
  let g = array2;
  let v = e.concat(g);
  console.log('Updated array is: ' + v);

}
combine ();
//Task 6
var data = [
  {name: "John Snow", age: 45},
  {name: "Cersei Lannister", age: 32},
  {name: "Daenerys Targaryen", age: 18},
  {name: "Jorah Mormont", age: 28}
];
var filtered_age = data.reduce((arr_new, el) => { 
  if (el.age >30) arr_new.push(el.name)
  return arr_new 
}, [])
console.log (filtered_age);