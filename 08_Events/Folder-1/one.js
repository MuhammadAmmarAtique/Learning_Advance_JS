
    //1) Event Bubbling/Propagation vs Capturing Mode
    document.querySelector('#images').addEventListener('click',()=>{
        console.log("clicked All images ul");
    },false);

 document.querySelector('#donkey').addEventListener('click',(event)=>{
     console.log("clicked donkey");     
     // event.stopPropagation();    //Imp (stop propagation means stop event bubbling)
 },false);


 // 2)Preventing default behaviour of elements
 // a-
 document.querySelector('#myform'),addEventListener("submit",(e)=>{
           e.preventDefault();
 },false)
 // b-
 document.querySelector('#google').addEventListener('click',(e)=>{
     console.log("clicked on google link");
     e.preventDefault();

 },false)
 