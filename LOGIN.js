
<button onclick="window.location.href='/Homepage.html'">ENTER</button>
function validateform(){
    var username=document.forms["signin"]["username"].value;
    var password=document.forms["signin"]["password"].value;
    if(username=="" && password=="" ){
        alert("enter username and password");
        return false;
    }
    else if(username==""){
        alert("enter username to sign in");
        return false;
    }
    else if(password==""){
        alert("enter password");
        return false;
    }
}