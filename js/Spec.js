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

function testBody()
{   
    describe("Test existed accounts",function(){
        beforeAll(async function () { 
            /*$.getJSON("https://api.myjson.com/bins/17yr1m", function(json) {
                for(var i=0;i<json.existed_accounts.length;i++)
                {
                    data[i]=json.existed_accounts[i];
                }});
            */
                let response = await fetch('https://api.myjson.com/bins/17yr1m');
                data =await response.json();
            }
            
        );
    
    
        it("Input yx1998",function(){
            msg=checkUsername("yx1998",5);
            expect(msg).toBe("Account existed!")
        });
    
        it("Input LeeSee",function(){
            msg=checkUsername("LeeSee",5);
            expect(msg).toBe("Account existed!")
        });
    
        it("Input Zhangsan",function(){
            msg=checkUsername("zhangsan",5);
            expect(msg).toBe("Account existed!")
        });
    });



describe("Test function checkUsername",function(){
    beforeAll(async function () { 
        /*$.getJSON("https://api.myjson.com/bins/17yr1m", function(json) {
            for(var i=0;i<json.existed_accounts.length;i++)
            {
                data[i]=json.existed_accounts[i];
            }});
        */
            let response = await fetch('https://api.myjson.com/bins/17yr1m');
            data =await response.json();
        }
        
    );


    for(var i=0;i<50;i++)
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
    for(var i=0;i<50;i++)
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

}

testBody();