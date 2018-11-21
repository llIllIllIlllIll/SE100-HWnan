var elUsername=document.getElementById("username");
var elMsg=document.getElementById("feedback");

function checkUsername(username,minLength)
{
    var msg;
    if(username.length<5)
    {
        msg="Username must be "+minLength+" characters or more...";
    }
    else{
        msg="";
    }
    return msg;
}

if(elUsername.addEventListener)
{
    elUsername.addEventListener("blur",function(){
        elMsg.textContent=checkUsername(elUsername.value,5);
    },false);
}
else{
    elUsername.attachEvent("onblur",function(){
        elMsg.textContent=checkUsername(elUsername.value,5);
    },false);
}