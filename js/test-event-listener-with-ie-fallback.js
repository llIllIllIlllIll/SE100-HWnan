var data=[];

function loadData()
{
    
    $.getJSON("https://api.myjson.com/bins/17yr1m", function(json) {
    for(var i=0;i<json.existed_accounts.length;i++)
    {
        data[i]=json.existed_accounts[i];
    }

});
}

function checkUsername(username,minLength)
{
    var msg="";
    for(var i=0;i<data.existed_accounts.length;i++)
    {
        if(username==data.existed_accounts[i].username)
        {
            msg+="Account existed!";
            return msg; 
        }
    }
    if(username.length<5)
    {
        msg="Username must be "+minLength+" characters or more...";
    }
    else{
        msg="";
    }
    return msg;
}
function checkPassword(password)
{
    var msg="";
    if(password.length<6)
    {
        msg+="Password must be "+6+" characters or more...";
    }
    else{
        msg+="";
    }
    var num_exist=false,cap_exist=false,low_exist=false;
    for(var i=0;i<password.length;i++)
    {
        if(password[i]>='0'&&password[i]<='9')
            num_exist=true;
        else if(password[i]>='a'&&password[i]<='z')
            low_exist=true;
        else if(password[i]>='A'&&password[i]<='Z')
            cap_exist=true;
    }
    if(!(num_exist&&cap_exist&&low_exist))
    {
        msg+="Password must have uppercase letter, lowercase letter and number at the same time...";
    }
    return msg;
}
