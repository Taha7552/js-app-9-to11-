  ///////question no. 01////////



// let city = prompt ("Enter your city name:");


// if  (city.toLowerCase() ===  "karachi") {
//   alert("Welcome to the city of lights!");
// } else {
//   alert(`Welcome to `+ city);
// }



    ////////question no. 02///////

  
// let gender = prompt("Enter your gender");


// if (gender.toLowerCase() === "male") {
//   alert ("Good Morning Sir!");
// } else if (gender.toLowerCase() === "female") {
//   alert("Good Morning Ma’am!");
// } else {
//   alert("Invalid input. Please enter male or female.");
// }
    
        ///////question no.03////////
      
        // let color = prompt("Enter the color of the road traffic signal (red, yellow, green):");
        
        // // Check the color and display the message
        // if (color.toLowerCase() === "red") {
        //   document.write("STOP!");
        // } else if (color.toLowerCase() === "yellow") {
        //   document.write("READY TO GO!");
        // } else if (color.toLowerCase() === "green") {
        //   document.write("GO!");
        // } else {
        //   document.write("Invalid input. Please enter red, yellow, or green.");
        // }

         ///////////////quetion no.04//////////
          // let fuel = +prompt("Enter Your Remaining Fuel In Litres")

          // if ( fuel<0.25 ) {
          //   alert(" Please Refill the tank")
            
          // } else {
          //   alert(" you have sufficient fuel !")
            
          // }

               /////////////////////question no. 05//////
  //a)//
//    var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }

//   //b)//
//   var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
  
//   //c)//
//   var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
//  //d)//
//  var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
//  //e)//
//  if (true){ alert("True"); } if (false){ alert("False"); }
//  //f)//
//  if("car" < "cat"){ alert("car is smaller than cat"); }

 ////////////question no. 06 //////
 
// let subject1 = parseInt(prompt("Enter marks obtained in Subject 1:"));
// let subject2 = parseInt(prompt("Enter marks obtained in Subject 2:"));
// let subject3 = parseInt(prompt("Enter marks obtained in Subject 3:"));
// let totalMarks = parseInt(prompt("Enter total marks:"));


// let totalObtained = subject1 + subject2 + subject3;


// let percentage = (totalObtained / totalMarks) * 100;


// let grade, remarks;
// if (percentage >= 90) {
//   grade = "A";
//   remarks = "Excellent!";
// } else if (percentage >= 80) {
//   grade = "B";
//   remarks = "Good!";
// } else if (percentage >= 70) {
//   grade = "C";
//   remarks = "Fair!";
// } else if (percentage >= 60) {
//   grade = "D";
//   remarks = "Pass!";
// } else {
//   grade = "F";
//   remarks = "Fail!";
// }


// document.write("<h1>Result</h1>");
// document.write("<p>Total Marks: " + totalMarks + "</p>");
// document.write("<p>Marks Obtained: " + totalObtained + "</p>");
// document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// document.write("<p>Grade: " + grade + "</p>");
// document.write("<p>Remarks: " + remarks + "</p>");

    //// quetion no. 07 //////

    //  let a = 9
    //  b = +prompt(" Enter a Number A Between 1 To 10")
    //   if (a == b) {
    //     alert( " bingo!!")
        
    //   } else{
    //     alert( "you are close!!!")
        
    //   }

    /////// question no. 08 ////////

       

// let num = parseInt(prompt("Enter a number:"));


// if (num % 3 === 0) {
//   alert(num + " is divisible by 3!");
// } else {
//   alert(num + " is not divisible by 3!");
// }

    ///////////question no. 09 ////////////

//     let num = +prompt("Enter A Number ")
//     if (num % 2 === 0) {
//         alert("it is and even number")
        
//     } else {
// alert(" it is an odd number")
        
//     }
   ////////////question no. 10 /////

// let T = +prompt("Enter Current Temperature")

// if (T > 40 ) {
//     alert("It's Too hot Outside")
    
// } else  if (T > 30) {
//     alert("wether today is normal")
    
// } else if ( T > 20) {
//     alert("Today's whether is cool!!")
    
// } else {
//     alert("OMG!!! It's too cold Outside")
// } {
    
// }{
    
// }

          ///////////// question no. 11 ////////// 
          
          let num1 = parseFloat(prompt("Enter the first number:"));
          let num2 = parseFloat(prompt("Enter the second number:"));
          let operation = prompt("Enter the operation (+, -, *, /, %):");
          
          
          let result;
          if (operation === "+") {
            result = num1 + num2;
          } else if (operation === "-") {
            result = num1 - num2;
          } else if (operation === "*") {
            result = num1 * num2;
          } else if (operation === "/") {
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              alert("Error: Division by zero is not allowed!");
            }
          } else if (operation === "%") {
            result = num1 % num2;
          } else {
            alert("Invalid operation. Please enter +, -, *, /, or %.");
          }
          
          
          if (result !== undefined) {
            alert("Result: " + result);
          }  ////////////question no. 01/////////////



          // let city = prompt("Enter your city name:");
          
          
          // if (city.toLowerCase() === "karachi") {
          //   alert("Welcome to the city of lights!");
          // } else {
          //   alert(`Welcome to `+ city);
          // }
          
          
          
              //////////////question no. 02//////////
          
            
          // let gender = prompt("Enter your gender");
          
          
          // if (gender.toLowerCase() === "male") {
          //   alert("Good Morning Sir!");
          // } else if (gender.toLowerCase() === "female") {
          //   alert("Good Morning Ma’am!");
          // } else {
          //   alert("Invalid input. Please enter male or female.");
          // }
              
                  /////////question no.03/////////////
                
                  // let color = prompt("Enter the color of the road traffic signal (red, yellow, green):");
                  
                  // // Check the color and display the message
                  // if (color.toLowerCase() === "red") {
                  //   document.write("STOP!");
                  // } else if (color.toLowerCase() === "yellow") {
                  //   document.write("READY TO GO!");
                  // } else if (color.toLowerCase() === "green") {
                  //   document.write("GO!");
                  // } else {
                  //   document.write("Invalid input. Please enter red, yellow, or green.");
                  // }
          
                   ///////////////quetion no.04//////////
                    // let fuel = +prompt("Enter Your Remaining Fuel In Litres")
          
                    // if ( fuel<0.25 ) {
                    //   alert(" Please Refill the tank")
                      
                    // } else {
                    //   alert(" you have sufficient fuel !")
                      
                    // }
          
                         /////////////////////question no. 05//////
            //a)//
          //    var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }
          
          //   //b)//
          //   var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
            
          //   //c)//
          //   var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
          //  //d)//
          //  var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
          //  //e)//
          //  if (true){ alert("True"); } if (false){ alert("False"); }
          //  //f)//
          //  if("car" < "cat"){ alert("car is smaller than cat"); }
          
           ////////////question no. 06 //////
           
          // let subject1 = parseInt(prompt("Enter marks obtained in Subject 1:"));
          // let subject2 = parseInt(prompt("Enter marks obtained in Subject 2:"));
          // let subject3 = parseInt(prompt("Enter marks obtained in Subject 3:"));
          // let totalMarks = parseInt(prompt("Enter total marks:"));
          
          
          // let totalObtained = subject1 + subject2 + subject3;
          
          
          // let percentage = (totalObtained / totalMarks) * 100;
          
          
          // let grade, remarks;
          // if (percentage >= 90) {
          //   grade = "A";
          //   remarks = "Excellent!";
          // } else if (percentage >= 80) {
          //   grade = "B";
          //   remarks = "Good!";
          // } else if (percentage >= 70) {
          //   grade = "C";
          //   remarks = "Fair!";
          // } else if (percentage >= 60) {
          //   grade = "D";
          //   remarks = "Pass!";
          // } else {
          //   grade = "F";
          //   remarks = "Fail!";
          // }
          
          
          // document.write("<h1>Result</h1>");
          // document.write("<p>Total Marks: " + totalMarks + "</p>");
          // document.write("<p>Marks Obtained: " + totalObtained + "</p>");
          // document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
          // document.write("<p>Grade: " + grade + "</p>");
          // document.write("<p>Remarks: " + remarks + "</p>");
          
              //// quetion no. 07 //////
          
              //  let a = 9
              //  b = +prompt(" Enter a Number A Between 1 To 10")
              //   if (a == b) {
              //     alert( " bingo!!")
                  
              //   } else{
              //     alert( "you are close!!!")
                  
              //   }
          
              /////// question no. 08 ////////
          
                 
          
          // let num = parseInt(prompt("Enter a number:"));
          
          
          // if (num % 3 === 0) {
          //   alert(num + " is divisible by 3!");
          // } else {
          //   alert(num + " is not divisible by 3!");
          // }
          
              ///////////question no. 09 ////////////
          
          //     let num = +prompt("Enter A Number ")
          //     if (num % 2 === 0) {
          //         alert("it is and even number")
                  
          //     } else {
          // alert(" it is an odd number")
                  
          //     }
             ////////////question no. 10 /////
          
          // let T = +prompt("Enter Current Temperature")
          
          // if (T > 40 ) {
          //     alert("It's Too hot Outside")
              
          // } else  if (T > 30) {
          //     alert("wether today is normal")
              
          // } else if ( T > 20) {
          //     alert("Today's whether is cool!!")
              
          // } else {
          //     alert("OMG!!! It's too cold Outside")
          // } {
              
          // }{
              
          // }
          
                    ///////////// question no. 11 ////////// 
                    
          let num1 = parseFloat(prompt("Enter the first number:"));
          let num2 = parseFloat(prompt("Enter the second number:"));
          let operation = prompt("Enter the operation (+, -, *, /, %):");
          
          
          let result;
          if (operation === "+") {
            result = num1 + num2;
          } else if (operation === "-") {
            result = num1 - num2;
          } else if (operation === "*") {
            result = num1 * num2;
          } else if (operation === "/") {
            if (num2 !== 0) {
              result = num1 / num2;
            } else {
              alert("Error: Division by zero is not allowed!");
            }
          } else if (operation === "%") {
            result = num1 % num2;
          } else {
            alert("Invalid operation. Please enter +, -, *, /, or %.");
          }
          
          
          if (result !== undefined) {
            alert("Result: " + result);
          }