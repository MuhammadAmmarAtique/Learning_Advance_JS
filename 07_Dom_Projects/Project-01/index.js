// 1)Solution 1

// let Allboxes =document.querySelectorAll('.box');

// Allboxes.forEach((div)=>{
//          div.addEventListener('click',()=>{

//             let color = div.getAttribute('data-color');
//             document.body.style.backgroundColor = color;

//          })
// })

// 2)Solution 2

let Allboxes=document.querySelectorAll('.box');
Allboxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        // console.log(e.target.id);
        document.body.style.backgroundColor = e.target.id;
        
    })
})

