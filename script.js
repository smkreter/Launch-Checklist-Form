// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   let pilotInput = document.getElementById("pilotName");
   let coPilotInput = document.getElementById("copilotName");
   let fuelInput = document.getElementById("fuelLevel");
   let massInput = document.getElementById("cargoMass");

      form.addEventListener("submit", function(){

        // validation town

            if (pilotInput.value === "" || coPilotInput.value === "" || fuelInput.value === "" || massInput.value === ""){
               alert("All fields are required");
               event.preventDefault();
               } 

               massInput.value = Number(massInput.value);
               fuelInput.value = Number(fuelInput.value);
               

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

        // faulty input styling and content
               if (fuelInput.value < 10000)  {
                  let faultyItems = document.getElementById("faultyItems");
                  faultyItems.style.visibility = "visible";
                      }      
               }); 
             
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
