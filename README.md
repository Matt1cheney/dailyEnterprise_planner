# dailyEnterprise_planner

## URLs

[GitHub Repo](https://github.com/Matt1cheney/dailyEnterprise_planner)
[URL](https://matt1cheney.github.io/dailyEnterprise_planner/)


## my javascript
1. made ``` js const ``` variables to display current day 
2. next we have our array of ``` js moment().hour() ``` objects that describe each hour
3. we have the start of our function ``` js hourChange() ``` which will run through each hour block and apply the appropriate class to show whether it is past present or future.

screenshot here.

4. we start our ```js .forEach() ``` loop that will go through the array and grab the appropriate hour and assign it to the correct timeblock with each class item named <class ="hour-05"> etc. to hour-20. 
5. the ``` js refferedBlock ``` variable grabs the next hour class.
6. next we have our series of if statements to differentiate if the hour is in the past, present, or future. 
7. starting at the 0 hour we can calculate if the hour is -1(1 hour in the past) we can apply the 'past' class hours greater than hour 0 (+1 or more) can add the future class, and lastly the hour that rests on the 0 hour can be applied the present class.

screenshot 2 

8. this event listener will save inputs to localstorage.
