// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let readyToTest;
   let checklistSubmissionReturnObject = {};

      form.addEventListener("submit", function(){
         /*
         console.log(`For pilotInput, the value is ${pilotInput.value} and the type of the value is ${typeof pilotInput.value}.`);
         console.log(`For coPilotInput, the value is ${coPilotInput.value} and the type of the value is ${typeof coPilotInput.value}.`);
         console.log(`For massInput, the value is ${massInput.value} and the type of the value is ${typeof massInput.value}.`);
         console.log(`For fuelInput, the value is ${fuelInput.value} and the type of the value is ${typeof fuelInput.value}.`);
             */


   // Variables

   let pilotInput = document.getElementById("pilotName");
   let coPilotInput = document.getElementById("copilotName");
   let fuelInput = document.getElementById("fuelLevel");
   let massInput = document.getElementById("cargoMass");


   let pilotNameTest = {
      "test": (isNaN(pilotInput.value)),
      "error": "Input a string for the name of the pilot "
   };

   let coPilotNameTest = {
      "test": (isNaN(coPilotInput.value)),
      "error": "Input a string for the name of the copilot "
   };
   let fuelNumberTest = {
      "test": (!isNaN(fuelInput.value)),
      "error": "Input a valid number for the fuel level "
   };
   let massNumberTest = {
      "test": (!isNaN(massInput.value)),
      "error": "Input a valid number for the cargo mass "
   };

   let testArray = [pilotNameTest, coPilotNameTest, fuelNumberTest, massNumberTest];
   let errorArray = [];
   let testedTests = [];

        // Validation
         //All fields are required
       
            if (pilotInput.value === "" || coPilotInput.value === "" || fuelInput.value === "" || massInput.value === ""){
               alert("All fields are required");
               event.preventDefault();
               }else {
   //The right value types are required
               // pilot name should not be a number
               let pilotInputTesterVariable = (Number(pilotInput.value));
               //console.log(pilotInputTesterVariable);
               if (isNaN(Number(pilotInputTesterVariable)) === false) {
               //  console.log(`pilotInputTesterVariable is ${pilotInputTesterVariable}`)
                  pilotInput.value = pilotInputTesterVariable;
               }

               // copilot name should not be a number
               let coPilotInputTesterVariable = (Number(coPilotInput.value));
               // console.log(coPilotInputTesterVariable);
               if (isNaN(Number(coPilotInputTesterVariable)) === false) {
               //  console.log(`coPilotInputTesterVariable is ${coPilotInputTesterVariable}`)
                  coPilotInput.value = coPilotInputTesterVariable;
               }

               // mass input should be a number
               massInput.value = Number(massInput.value);

               // fuel input should be a number
               fuelInput.value = Number(fuelInput.value);
               
               //console.log(testArray.length);

               for (i = 0; i < testArray.length; i++) {
                  testedTests.push(testArray[i]);
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
         
               console.log(`For pilotInput, the value is ${pilotInput.value} and the type of the value is ${typeof pilotInput.value}.`);
               console.log(`For coPilotInput, the value is ${coPilotInput.value} and the type of the value is ${typeof coPilotInput.value}.`);
               console.log(`For massInput, the value is ${massInput.value} and the type of the value is ${typeof massInput.value}.`);
               console.log(`For fuelInput, the value is ${fuelInput.value} and the type of the value is ${typeof fuelInput.value}.`);
               console.log("here's testArray:");
               console.log(testArray);
               console.log("here's errorArray:");
               console.log(errorArray);
               console.log(`readytotest is ${readyToTest}`);
               // console.log("here's testedTests:");
               // console.log(testedTests);

   







// else if all of the inputs are inputted
               }
               
                                           // faulty input styling and content
                                           if (readyToTest === true) {
                                             if (fuelInput.value < 10000)  {
                                                let faultyItems = document.getElementById("faultyItems");
                                                faultyItems.style.visibility = "visible";
                                                    }  
                                             }


// the submission event listener
               });

      
// the onload event listener
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
