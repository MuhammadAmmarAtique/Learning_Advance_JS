let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let result = document.querySelector('#results');
let myform = document.querySelector('#myForm');

let button = document.querySelector('#button');
button.disabled=true;

// Enabling submit button only if there is data in both input fields
let inputFields = document.querySelectorAll("input");
inputFields.forEach((element)=>{
element.onkeyup= ()=>
{
    if(height.value.length>=1 && weight.value.length>=1 )
    {
    button.disabled=false;
    }
    else
    {
        button.disabled=true;
    }
}
}) 

// Main Logic of Calculating BMI (when we submit form data goes to backend)
myform.addEventListener("submit",(e)=>{
    e.preventDefault();

    // Calculating user's BMI only if user has entered "number" (its actually string  number)
    if (!isNaN(height.value) && !isNaN(weight.value)) {

        // Converting string into number
          let heightinNumber= parseFloat(height.value);
          let widthinNumber=  parseFloat(weight.value);

        let Calculated_BMI = widthinNumber / ((heightinNumber / 100) ** 2);
        let RoundedVal = Calculated_BMI.toFixed(2);

        result.textContent= `Your BMI is ${RoundedVal}`;
    
        //When result is shown again disabling button 
       button.disabled=true;
    
       //Emptying both input fields in end   
       height.value="";
       weight.value="";
    } 
    else {
        result.textContent = "Incorrect input, Please enter again";    
        
        //When result is shown again disabling button 
       button.disabled=true;
    
       //Emptying both input fields in end   
       height.value="";
       weight.value="";
    }
})