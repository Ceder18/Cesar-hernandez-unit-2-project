let opening = document.querySelector(".story-opening");
let buttonOne = document.querySelector(".option-one");
let buttonTwo = document.querySelector(".option-two");
let buttonThree = document.querySelector(".option-Three");
let buttonFour = document.querySelector(".option-Four");
let optionOne = document.querySelector(".option-one-screen");
let optionTwo = document.querySelector(".option-two-screen");
let optionThree = document.querySelector(".option-three-screen");
let optionFour = document.querySelector(".option-four-screen");

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
buttonOne.onclick = function() {
    optionOne.style.display = "block";
    opening.style.display = "none";
};

buttonTwo.onclick = function() {
    optionTwo.style.display = "block";
    opening.style.display = "none";
};

 buttonThree.onclick = function() {
     optionThree.style.display= "block";
     opening.style.display= "none";  
 };    

// INSERT_VARIABLE.onclick=function(){

// };           