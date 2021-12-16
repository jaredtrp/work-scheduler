# Work Day Scheduler

This website is a demonstration of my skills as a web developer, utilizing Javascript to create a work day scheduler which enables the user to view their entire work day divided by hours, each of which serves as a text entry which can be saved for that day to local storage, and will remain available for viewing, even after a refresh or even closing and reopening the browser.


## How to Use the Work Day Scheduler

Click on an hour's text area and enter any desired text, then click on the corresponding save button to save the information to your local storage. Any hours previous to the current hour will be colored gray, the current hour in red, and future hours in green.

## How I Did It

Using a for loop, I dynamically generated the desired hour, text area, and save buttons for each hour. If statements were used to correct for AM/PM, and to set the color of the text areas based on past, present, and future from current time.

Because everything was dynamically generated, this makes it much easier to alter the number of hours without having to completely recode the HTML.

## Javascript Used

* let and const variables
* if/else statements
* for loops
* getDay, getDate, getHours, getMonth, and getYear methods
* .length property
* .parse method
* .split method
* DOM manipulation

## Collaborators

* Gunther Waagoner
* Ryan Williams
* Andrew Wales