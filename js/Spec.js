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
        var length=Math.floor(Math.random() * 64);
        //suppose name 64 characters at most
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
describe("Test function checkUsername",function(){
    for(var i=0;i<100;i++)
    {
        var length=Math.floor(Math.random() * 64);
        //suppose password 64 characters at most
        var input=randomString(length);
        it("input:"+input,function(){
            var msg;
            msg=checkPassword(input);
            var num_exist=false,cap_exist=false,low_exist=false;
            for(var i=0;i<input.length;i++)
            {
                if(input[i]>='0'&&input[i]<='9')
                    num_exist=true;
                else if(input[i]>='a'&&input[i]<='z')
                    low_exist=true;
                else if(input[i]>='A'&&input[i]<='Z')
                    cap_exist=true;
            }
            var result= (input.length<6 ? "Password must be "+6+" characters or more...":"")+
            (num_exist&&cap_exist&&low_exist?"":"Password must have uppercase letter, lowercase letter and number at the same time...");
            expect(msg).toBe(result);
        });
    }
    
});