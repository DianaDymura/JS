//Task 1
var human = {
    name: "Missy",
    sName: "Cloud",
    year: 1987,
    age: 54
};
let getInfo = Object.entries(human);
console.log(getInfo);
var FullName = {
    name: "Missy",
    sName: "Cloud",
  
    get FullName() {
      return `${this.name} ${this.sName}`;
    },
    set FullName(value) {
      [this.name, this.sName];
    }
  };
  console.log(human.name); 
  console.log(human.sName); 
// Task 2
    var person = {
        sex: "boy",
        sName: "Steve",
        age: 34
      };
      
      console.log("Person name: "+ person.sName);
      console.log("Sex: "+person.sex);
      console.log ("Age: "+person.age);
      function createRobot() {
        var Robot = Object.assign({}, person);
        Robot.batteryEnergy = 50;
        return Robot;
      }
      
      createRobot();
      var robotObject = createRobot();
console.log("Robot: name " + person.sName);
console.log( "Sex: "+person.sex);
console.log( "Age: "+person.age);
console.log("Battery energy: "+ robotObject.batteryEnergy);
//Task 3
var robot = {
    sex: "girl",
    sName: "Helen",
    age: 45,
    batteryEnergy:50,
  };
 let isARobot = ()=> {
    if (robot.hasOwnProperty('batteryEnergy')) {
        console.log("Property found. It's a robot");
    }
    else  {
        console.log("Property not found. It isn't a robot");
    }
}
isARobot()
//Task 4
var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};
let price = 0;
for (var value of Object.values (services)) {
  price += Number (value);
}
console.log("Total price of all services is "+price);
var prices =Object.values (services);
const highestPrice = Math.max(...prices);
const lowestPrice = Math.min (...prices);
console.log("The highest price is " + highestPrice); 
console.log("The lowest price is " + lowestPrice); 