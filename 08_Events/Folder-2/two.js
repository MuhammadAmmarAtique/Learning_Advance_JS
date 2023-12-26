/* 1)(Parent Child Relationship)
 <ul class="images">
    <li>
        <img src="" alt="">
    </li>
 </ul>
*/

// 2) Yahan paar haam naay grandparent par event lgaya hai, too event bubbling hogee yahan (matlb agar child par event listener na hoa tooh uskaay parent par jaiy ga ,
//  agr yahan bhi event listener na hoa tooh uskaay bhi parent par interpreter jaiay ga)


document.querySelector('#images').addEventListener("click",(event)=>
{
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.parentNode);
    // console.log(event.target.parentNode.tagName);

    if (event.target.parentNode.tagName.toLowerCase() === "li") {
        event.target.parentNode.remove();
    }

},false);



// In this code, event.target.parentNode.tagName returns the tag name of the parent node in uppercase,
//  so we use toLowerCase() to convert it to lowercase for case-insensitive comparison with the string "li".
