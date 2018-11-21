function randomString(len) {
    　　len = len || 32;
    　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';  
    　　var maxPos = $chars.length;
    　　var pwd = '';
    　　for (i = 0; i < len; i++) {
    　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return pwd;
    }
//function used to generate random username

describe("Test function checkUsername",function(){
    for(var i=0;i<100;i++)
    {
        var length=Math.floor(Math.random() * 32);
        //suppose name 32 characters at most
        var input=randomString(length);
        it("input:"+input,function(){
            var msg;
            msg=checkUsername(input,5);
            if(length>=5){
                expect(msg).toBe("");
            }
            else {
                expect(msg).toBe("Username must be 5 characters or more...");
            }
        });
    }
    
});