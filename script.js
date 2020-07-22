// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
      form.addEventListener("submit", function(){
         let pilotInput = document.getElementById("pilotName");
         let coPilotInput = document.getElementById("copilotName");
         let fuelInput = document.getElementById("fuelLevel");
         fuelInput = Number(fuelInput);
         let massInput = document.getElementById("cargoMass");
         massInput = Number(massInput);
         /*
         console.log("pilot name: " pilotInput.value);
         console.log("copilot name: " + coPilotInput.value);
         console.log("fuel input amount: " + fuelInput.value);
         console.log("mass input amount: " + massInput.value);
         */
            if ((pilotInput.value === "") || (coPilotInput.value === "") || (fuelInput.value === "") || (massInput.value === "")) {
               alert("All fields are required");
               console.log("pilot name: " + pilotInput.value);
               /*
               console.log("copilot name: " + coPilotInput.value);
               console.log("fuel input amount: " + fuelInput.value);
               console.log("mass input amount: " + massInput.value);
               */
               event.preventDefault();
            }else{
               if ((pilotInput.value != "") && (isNaN(pilotInput.value) === false)) {
               alert("Input a string for the name of the pilot")
               event.preventDefault();
                   }
               if ((coPilotInput.value != "") && (isNaN(coPilotInput.value) === false)) {
               alert("Input a string for the name of the copilot")
               event.preventDefault();
                   }
            if (isNaN(fuelInput.value) === true) {
               alert("Input a valid number for the fuel level")
               event.preventDefault();
                   }
            if (isNaN(massInput.value) === true) {
               alert("Input a valid number for the fuel level")
               event.preventDefault();
                  }
             
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
