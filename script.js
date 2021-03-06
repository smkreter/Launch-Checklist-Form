// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let readyToTest;

// Destination info

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      return response.json();
      }).then(function(json){
         let missionTarget = document.getElementById("missionTarget");
         let planet = json[0];

   // Add the information from json into the HTML of the page     
          
         missionTarget.innerHTML += `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${planet.name}</li>
                  <li>Diameter: ${planet.diameter}</li>
                  <li>Star: ${planet.star}</li>
                   <li>Distance from Earth: ${planet.distance}</li>
                  <li>Number of Moons: ${planet.moons}</li>
               </ol>
            <img src="${planet.image}">
         `;
         
   });


   form.addEventListener("submit", function(){

   // Variables - Inputs

   let pilotInput = document.getElementById("pilotName");
   let coPilotInput = document.getElementById("copilotName");
   let fuelInput = document.getElementById("fuelLevel");
   let massInput = document.getElementById("cargoMass");

   // Variables - Display

   let faultyItems = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus");

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   // Validation Test Objects

   let pilotNameTest = {
      "test": (isNaN(pilotInput.value)),
      "error": " Input a string for the name of the pilot "
   };

   let coPilotNameTest = {
      "test": (isNaN(coPilotInput.value)),
      "error": " Input a string for the name of the copilot "
   };
   let fuelNumberTest = {
      "test": (!isNaN(fuelInput.value)),
      "error": " Input a valid number for the fuel level "
   };
   let massNumberTest = {
      "test": (!isNaN(massInput.value)),
      "error": " Input a valid number for the cargo mass "
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
               if (isNaN(Number(pilotInputTesterVariable)) === false) {
                  pilotInput.value = pilotInputTesterVariable;
               }

               // copilot name should not be a number
               let coPilotInputTesterVariable = (Number(coPilotInput.value));
               if (isNaN(Number(coPilotInputTesterVariable)) === false) {
                  coPilotInput.value = coPilotInputTesterVariable;
               }

               // mass input should be a number
               massInput.value = Number(massInput.value);

               // fuel input should be a number
               fuelInput.value = Number(fuelInput.value);
               
               // run these tests
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
                  event.preventDefault();
               }
   
               // faulty input styling and content

                  if (readyToTest === true) {
                        faultyItems.style.visibility = "visible";
                        pilotStatus.innerHTML = `Pilot ${pilotInput.value} is ready for launch`;
                        copilotStatus.innerHTML = `Co-Pilot ${coPilotInput.value} is ready for launch`;  

                           // change stuff based on the inputs
                           if ( (massInput.value > 10000) || (fuelInput.value < 10000) ) {
                              launchStatus.style.color = "red";
                              launchStatus.innerHTML = "Shuttle not ready for launch"    
                              if (massInput.value > 10000) {
                                 cargoStatus.innerHTML = "Too much stuff to launch, put stuff back";                                       
                              }   
                              if (fuelInput.value < 10000) {
                                    fuelStatus.innerHTML = "Fuel level too low for launch";
                                 }
                          
                           } else {
                              launchStatus.style.color = "green";
                              launchStatus.innerHTML = "Shuttle is ready for launch";
                              fuelStatus.innerHTML = "Fuel level high enough for launch";
                              cargoStatus.innerHTML = "Cargo mass low enough for launch";
                           }

                                       
// if ready to test is true
                      }                                       

// else if all of the inputs are inputted
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
