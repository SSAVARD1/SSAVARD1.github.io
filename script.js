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
    
    const email = document.getElementById('email');
    
    let data = '\n Email: ' + email.value;
    
    const txtToBlob = new Blob([data], { type: 'text/plain' });
    const emailFileName = 'emailData.txt';
    
    let newLink = document.createElement("a");
    newLink.download = emailFileName;
    
    if (window.webkitURL != null) {
        
        newLink.href = window.webkitURL.createObjectURL(txtToBlob);
        
    }
    
    else {
        
        newLink.href = window.URL.createObjectURL(txtToBlob);
        
        newLink.style.display = "none";
        
        document.body.appendChild(newLink);
       
    }
    
    newLink.click();
    
}

