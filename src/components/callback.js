 function greet(name, A) {
  console.log("Hello, " + name);
  A(); // calling the callback function
}


function sayGoodbye() {
  console.log("Goodbye!");
}
function B (){
    console.log("sfnaksjkja")
}

greet("Ankit", B); 


