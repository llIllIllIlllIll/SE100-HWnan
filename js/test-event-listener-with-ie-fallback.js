
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
