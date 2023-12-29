// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the request method, URL, and set async to true
xhr.open("GET", "https://api.github.com/users/MuhammadAmmarAtique");

// Send the request
xhr.send();


// Set up a callback function to handle the response
xhr.onreadystatechange = function () {
  // Check if the request is complete
  if (xhr.readyState == 4) {
    const data = JSON.parse(this.response);
    console.log(data);

    document.querySelector('#insert').innerHTML= 
`
<div style=" height: 200px; width: 200px; margin-top:20px;">
<img src="${data.avatar_url}" alt="My pic" style="width: 100%; height: 90%; object-fit: cover; object-position: center;">
<p>${data.name}</p>
</div>

`;




  }
};



  
