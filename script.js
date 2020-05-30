function imageExpand() {
    
    document.getElementById("1").style.height= "275px";
    
    document.getElementById("1").style.width= "375px";
    
    document.getElementById("1").style.position="static"
}

function imageExpandTwo() {
    
    document.getElementById("2").style.height= "275px";
    
    document.getElementById("2").style.width= "375px";
    
    document.getElementById("2").style.position="static"
}

function imageExpandThree() {
    
    document.getElementById("3").style.height= "275px";
    
    document.getElementById("3").style.width= "375px";
    
    document.getElementById("3").style.position="static"
}


function imageReset() {
    
    document.getElementById("1").style.height= "250px";
    
    document.getElementById("1").style.width= "350px";
    
    document.getElementById("1").style.position="static";
    
}

function imageResetTwo() {
    
    document.getElementById("2").style.height= "250px";
    
    document.getElementById("2").style.width= "350px";
    
    document.getElementById("2").style.position="static";
    
}

function imageResetThree() {
    
    document.getElementById("3").style.height= "250px";
    
    document.getElementById("3").style.width= "350px";
    
    document.getElementById("3").style.position="static";
    
}

let saveFile = () => {

    var guestInfo = { email: email.value };
    var infoString = JSON.stringify(guestInfo);
    localStorage.setItem("testEmail", infoString);
    
    var info = localStorage.getItem("testEmail");
    var infoObj = JSON.parse(info);
    
    window.alert("Thank you! You've submitted " + infoObj.email + ". Stay tuned for more updates!");
    document.getElementById("email").value = "";
    
}
    

