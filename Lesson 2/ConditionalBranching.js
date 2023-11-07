//Task 1
var cat_weight = 8;
if (cat_weight > 5) {
    console.log("The cat is very fluffy and needs to be combed");
} else {
    console.log("The cat is small and still needs to be fed");
}
//Task 2
let age = 56;
if (age < 18) {
    console.log("Hire");
} else if (age >= 50) {
    console.log("Hire");
}
//or
let age = 37;
if (age < 18 || age >= 50) {
    console.log("Hire");
}
//Task 3
let exam_grade_value = "D";
if (exam_grade_value === "A" || exam_grade_value === "B") {
    console.log("Passed")
} else if (exam_grade_value === "C" || exam_grade_value === "D") {
    console.log("Retake")
} else {
    console.log("Expulsed")
}
//Task 4
let correct_number = 8;
let user_entered = 8;
if (correct_number === user_entered) {
    console.log("Guessed")
} else if (correct_number < user_entered) {
    console.log("Less number")
} else {
    console.log("Greater number")
}
//Task 5
let height = 140;
let entrance_allowed = (height >= 140) ? "Проходьте, будь ласка!" : "Заборонено на атракціон";
console.log(entrance_allowed);
// Task 6 - на це я підглянула відповідь, бо сама не зуміла зрозуміти, як правильно переписати
let height = 145;
let message = height < 50
    ? "Forbidden to use attraction"
    : height >= 50 && height < 80
        ? "Permit - attraction №1"
        : height >= 80 && height < 120
            ? "Permit - attraction №1 or №2"
            : "Permit - All";

console.log(message);
// Task 7
var day_of_week = 9;
switch (day_of_week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('This is not a valid value! Only values 1-7 are accepted');
}
// Task 8 - це також піддивилась. Логіка була написана коректна, але синтакс - ні((
var month_of_year = 10;
switch (month_of_year) {
    case 1:
    case 2:
    case 12:
        console.log('Winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    default:
        console.log('This is not a valid value! Only values 1-12 are accepted');
}
//Task 9
let used_browser = "Opera";
if (used_browser == "Edge") {
    console.log("You've got the Edge!")
} else if (used_browser == "Chrome" && "Safari" && "Opera" && "Firefox") {
    console.log("Okay we support these browsers too")
}  else if (used_browser == "Safari") {
    console.log("Okay we support these browsers too")
} else if (used_browser ==  "Opera" ) {
    console.log("Okay we support these browsers too")
}  else if (used_browser == "Firefox") {
    console.log("Okay we support these browsers too")
} else {
    console.log("We hope that this page looks ok!")
}
// Task 10
var applicant_age = 36;
switch (true) {
    case (applicant_age < 16):
        console.log('Cannot hire');
        break;
    case (applicant_age >= 18):
        console.log('U can take full time job');
        break;
    case (applicant_age === 16):
        //fall through
    case (applicant_age === 17):
        console.log('U can take part time job');
        break;
    default:
        console.log('You can apply for the job');
}
/*Task 11 - це переробляла багато разів, а потім дивилась  підказки. 
Поки завдання з такими множинними умовами даються важкувато, але це цікаво)
*/
let visitor = "Admin";
let password = "";
if (visitor === "Admin") {
    if (password === "TheMaster") {
        console.log('Welcome');
    } else if (password === "") {
        console.log('Canceled');
    } else if (password === "Esc") {
        console.log('Canceled');
    } else {
        console.log('Wrong password');
    }
} else if (visitor === "") {
    console.log('Canceled');
} else if (visitor === "Esc") {
    console.log('Canceled');
} else {
    console.log('I don’t know you');
}