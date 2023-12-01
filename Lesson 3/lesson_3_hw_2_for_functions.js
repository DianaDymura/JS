//Task 0
function task1Func() {
    let a = true;
    let b = false;
    console.log(a>b );
}
task1Func()   
//Task 1
function getMin(q, w) {
    if (q > w) {
        console.log(w);
    }
    else if (q < w) {
        console.log(q);
    }
}
let q = 3;
let w = 8;
getMin(q, w)
//Task 2
function getPow(c, h) {
    console.log(c ** h);
}
let c = 5;
let h = 7;
getPow(c, h)
//Task 3
function getPow (h = 5) {
    let c = 5;
    return c ** h;
}
console.log(getPow());
//Task 4
    let selectedMeal = 2;
    let getLunch = () => {
        switch (selectedMeal) {
            case 1:
                console.log('My lunch for today is Pizza');
                break;
            case 2:
                console.log('My lunch for today is Spaghetti');
                break;
            case 0:
                console.log('My lunch for today is Other');
        }
    };
    getLunch();


    
