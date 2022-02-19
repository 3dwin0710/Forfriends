document.write("Hello World");

let pointdevie = 10;

if (pointdevie > 0)
{
  pointdevie -= 1;
}
else {
  alert("Game over");
}


function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
  let myName = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', myName);
  myHeading.textContent = 'Mozilla est cool, ' + myName;
}

if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla est cool, ' + storedName;
}

myButton.addEventListener('click', function() {
  setUserName();
});



/*document.querySelector('html').addEventListener('click', function() {


    document.write(pointdevie);


});

*/



document.write(" ");
document.write(pointdevie);
