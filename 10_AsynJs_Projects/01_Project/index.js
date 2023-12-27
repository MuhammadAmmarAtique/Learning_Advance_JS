const StartButton = document.querySelector('#start');
const StopButton = document.querySelector('#stop');
let changingBg;
console.log(changingBg);

//1) Generating RandomColor every time user clicks on start button
StartButton.addEventListener("click",()=>{

 // Function to generate a random hex color
function GenerateRandomColor() {
    let hex = '0123456789ABCDEF';
    let color = '#';
    // Generate a random hex value six times (for the six characters in a hex color) #123456
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        // console.log(color);
    }
    return color;
}

if (changingBg == null)   //(#code improved)
 {
    // Setting the background color to a random color 
    changingBg =setInterval(()=>{
        document.body.style.backgroundColor = GenerateRandomColor();
    },1000)

}

})

//2)Activating Stop Button so that background color can no longer change
StopButton.addEventListener("click",()=>{
    clearInterval(changingBg);
    changingBg=null;  //emptying variable to save memory in js engine(#code improved)
})


