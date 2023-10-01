const percentValue = document.querySelector(".percent-value");
//const display      = document.querySelector(".display");
var percent = 0;
var loop = setInterval(() => {
    if (percent != 100) {
        percent++
        percentValue.innerText = percent;
        document.querySelector(".display").hidden = true;  
        document.querySelector(".display-loading").hidden = false;  
    } else {
        clearInterval(loop);
        document.querySelector(".display").hidden = false;
        document.querySelector(".display-loading").hidden = true;
    }
}, 38)