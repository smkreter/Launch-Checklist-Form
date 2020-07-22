// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
      form.addEventListener("submit", function(){
         let pilotInput = document.getElementById("pilotName");
         let coPilotInput = document.getElementById("copilotName");
         let fuelInput = document.getElementById("fuelLevel");
         //fuelInput.value = Number(fuelInput.value);
         let massInput = document.getElementById("cargoMass");
         //massInput.value = Number(massInput.value);
         /*
         console.log("pilot name: " pilotInput.value);
         console.log("copilot name: " + coPilotInput.value);
         console.log("fuel input amount: " + fuelInput.value);
         console.log("mass input amount: " + massInput.value);
         (coPilotInput.value === "") || (fuelInput.value === "") || (massInput.value === "")
         */
        // validation town
            if (pilotInput.value === "" || coPilotInput.value === "" || fuelInput.value === "" || massInput.value === ""){
               alert("All fields are required");
               event.preventDefault();
               } else {

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

               } else {
                  let testLaunchReadiness = true;
               }
         // shuttle requirements
               if (testLaunchReadiness === true) {
                  let pilotStatus = document.getElementById("pilotStatus");
                  pilotStatus.innerHTML = "Pilot Name: "+ pilotInput.value;
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
