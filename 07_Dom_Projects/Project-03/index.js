
setInterval(() => {
    let date = new Date();
    let digitalTime = date.toLocaleTimeString();
    document.querySelector('#clock').innerHTML = digitalTime;   
}, 1000);