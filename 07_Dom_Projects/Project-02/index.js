let myform = document.querySelector("#myForm");

// Main Logic of Calculating BMI (when we submit form data goes to backend)
  myform.addEventListener("submit", (e) => {
  e.preventDefault();

  // Converting string into number
  let height = parseFloat(document.querySelector("#height").value);
  let weight = parseFloat(document.querySelector("#weight").value);
  let result = document.querySelector("#results");

  //   checking if user entered valid values in height and weight section
    if (height === "" || height < 0 || isNaN(height)) {
    result.textContent = "Please enter a valid height";
    } 
    else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.textContent = "Please enter a valid Width";
    } 
    // Calculating BMI and printing it  
    else {

    let Calculated_BMI = (weight / (height / 100) ** 2).toFixed(2);

    let AdditionalMsg;
    switch (true) {
        case Calculated_BMI < 18.6:
            AdditionalMsg = "Under Weight";
            break;
        case Calculated_BMI >= 18.6 && Calculated_BMI <= 24.9:
            AdditionalMsg = "Normal Range";
            break;
        case Calculated_BMI > 24.9:
            AdditionalMsg = "Overweight";
            break;
        default:
            AdditionalMsg = "Unknown BMI Range";
    }
   

    result.textContent = `Your BMI is ${Calculated_BMI} (${AdditionalMsg})`;

    //Emptying both input fields in end
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
  }
});
