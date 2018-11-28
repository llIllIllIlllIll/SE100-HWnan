## What is a Front-end test
Front-end Testing is testing or verifying the frontend **functionality, GUI, and Usability**.
## What can I use
Jasmine, Selenium, Browser, TestComplete, Needle are some of the examples of **Frontend testing tool**.
## Jasmine
>Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.
## About this homework
The index.html and js files are homework from a javascript tutorial book. SpecRunner.html is a demo given by Jasmine tutorial and applied to my own code.
## How to use
[index.html](index.html) shows you a front-end application which allows you to enter username and password for a new account. [SpecRunner.html](SpecRunner.html) shows you the result of unit test on function checkUsername(), which warns you when username is less than 5 characters, and when password is less than 6 characters or it does not contain uppercase letter, lowercase letter and number at the same time. 
##Upgraded on 2018.11.28
Thanks to [Myjson.com](http://myjson.com/) I used a .json file to simulate a backend source and now I am able to tell if the input username has already existed in by database. If you are interested, type in "yx1998" ,"LeeSee" or "zhangsan" in the username part, and when the input area loses focus in tells you what's happening. Also, thanks to Mr.Ren, I make my unit test more specific and clean.