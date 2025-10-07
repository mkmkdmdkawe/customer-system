let myH3 = document.querySelector("h3.number");

let button_add = document.querySelector("button.add");
let button_reduce = document.querySelector("button.reduce");
let button_ten = document.querySelector("button.ten");
let button_minusten = document.querySelector("button.minusten");
let button_zero = document.querySelector("button.zero");



let num = 0;

button_add.addEventListener(
    "click", e =>{
    num += 1;
    myH3.innerHTML = num;

});

button_reduce.addEventListener(
    "click", e =>{
        num -= 1;
        myH3.innerHTML = num;
 });

button_ten.addEventListener(
    "click", e =>{
         num += 10;
         myH3.innerHTML = num;
         
 });

 button_minusten.addEventListener(
         "click", e =>{
             num -= 10;
             myH3.innerHTML = num;
    });

button_zero.addEventListener(
        "click", e =>{
            num = 0;
            myH3.innerHTML = num;
});



