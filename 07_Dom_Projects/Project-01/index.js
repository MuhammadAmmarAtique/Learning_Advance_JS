let Allboxes =document.querySelectorAll('.box');

Allboxes.forEach((div)=>{
         div.addEventListener('click',()=>{

            let color = div.getAttribute('data-color');
            document.body.style.backgroundColor = color;

         })
})