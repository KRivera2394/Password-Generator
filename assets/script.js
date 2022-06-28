// Assignment Code //

var generateBtn = document.querySelector("#generate");
var options = "";
var userLowerCase;
var userUpperCase;
var result = "";

//FUNCTION
function makePassword(){

  var userInput = prompt("Pick a number between 8-128!")
    while (userInput <= 7 || userInput >=129 ){
      alert("Sorry! It has to be between 8-128");
    userInput =  prompt("Pick a number between 8-128")
  }
  
//SELECTIONS
userLowerCase = confirm("Would you like lowercase letters?")
  console.log(userLowerCase);
  
userUpperCase = confirm("Would you like uppercase letters? ")
  console.log(userUpperCase);
  
userNums = confirm("Would you like numbers?")
  console.log(userNums);
  
userSpecChar = confirm ("Would you like special characters? (!,@,#,$,% etc."); 
  console.log(userSpecChar);
  
  // IF STATEMENTS 
if(userLowerCase == true ){
  options += "abcdefghijklmnopqrstuvwxyz"
}
if(userUpperCase == true ){
  options += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if(userNums == true ){
  options += "0123456789"
}
if(userSpecChar == true ){
  options += "!@#$%^&*()_+-"

}
console.log(options);  
var optionLength = options.length
  
 for(i=0; i<userInput; i++){
  result += options.charAt(Math.floor(Math.random() * optionLength))

}
console.log(result); 

if (!userLowerCase && !userUpperCase && !userNums && !userSpecChar ){
  alert("You have to choose atleast 1");
   makePassword();
}

var passwordText = document.getElementById("password");
passwordText.textContent = result;
return;

}

// Add event listener to generate button
generateBtn.addEventListener("click",makePassword);




  
 
   
    
    
    
 
  

  



   


  
  




 



