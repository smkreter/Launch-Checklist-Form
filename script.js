// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let pilotInput = document.getElementById("pilotName");
   let coPilotInput = document.getElementById("copilotName");
   let fuelInput = document.getElementById("fuelLevel");
   let massInput = document.getElementById("cargoMass");
   let readyToTest;

   let pilotNameTest = {
      "test": (isNaN(pilotInput.value)),
      "error": "Input a string for the name of the pilot, Elon. "
   };

   let coPilotNameTest = {
      "test": (isNaN(coPilotInput.value)),
      "error": "Input a string for the name of the copilot, Elon. "
   };
   let fuelNumberTest = {
      "test": (!isNaN(fuelInput.value)),
      "error": "Input a valid number for the fuel level. "
   };
   let massNumberTest = {
      "test": (!isNaN(massInput.value)),
      "error": "Input a valid number for the cargo mass. "
   };

   let testArray = [pilotNameTest, coPilotNameTest, fuelNumberTest, massNumberTest];
   let errorArray = [];
   let testedTests = [];

      form.addEventListener("submit", function(){

        // validation town

            if (pilotInput.value === "" || coPilotInput.value === "" || fuelInput.value === "" || massInput.value === ""){
               alert("All fields are required");
               event.preventDefault();
               } else if (pilotInput.value != "" && coPilotInput.value != "" && fuelInput.value != "" && massInput.value != "") {
                  if ((Number(pilotInput.value)) != "NaN") {
                     pilotInput.value = Number(pilotInput.value);
                  }
                  if ((Number(coPilotInput.value)) != "NaN") {
                     coPilotInput.value = Number(pilotInput.value);
                  }
                  massInput.value = Number(massInput.value);
                  fuelInput.value = Number(fuelInput.value);
                  console.log(testArray.length);

                  for (i = 0; i < testArray.length; i++) {
                     testedTests.push(testArray[i].test);
                     if (testArray[i].test === false) {
                        errorArray.push(testArray[i].error);
                     }
                  }
                  if (errorArray.length > 0) {
                     alert(`${errorArray}`);
                     readyToTest = false;
                     event.preventDefault();
                  } else {
                     readyToTest = true;
                  }
                     
                  

                  /*
   
                  if (isNaN(pilotInput.value) === false) {
                  alert("Input a string for the name of the pilot, Elon")
                  event.preventDefault();
                      }
   
                  if (isNaN(coPilotInput.value) === false) {
                  alert("Input a string for the name of the copilot, Elon")
                  event.preventDefault();
                      }
   
                  if (isNaN(fuelInput.value) === true) {
                  alert("Input a valid number for the fuel level")
                  event.preventDefault();
                      }
   
                  if (isNaN(massInput.value) === true) {
                  alert("Input a valid number for the cargo mass")
                  event.preventDefault();
                     } 
                    


                  if ((isNaN(pilotInput.value) === true) && (isNaN(coPilotInput.value) === true) && (isNaN(fuelInput.value) === false) && (isNaN(massInput.value) === false)) {
                     readyToTest = true;

                  }
                   */

               }

               console.log(`ready to test is ${readyToTest}`);   
               console.log(errorArray);    
               console.log(isNaN(coPilotInput.value))
               console.log(pilotInput.value);
               console.log(coPilotInput.value);
               console.log(testedTests);

     
               }); 
                   // faulty input styling and content
               if (readyToTest === true) {
               if (fuelInput.value < 10000)  {
                  let faultyItems = document.getElementById("faultyItems");
                  faultyItems.style.visibility = "visible";
                      }  
               }
       
         });



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
