// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

const dateEl = document.getElementById('currentDay');

function fullDate() {
    let today = new Date();
    let weekDay = today.getDay();
    const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Sunday']
    let dayName = dayList[weekDay];
    let dd = today.getDate();
    let mm = today.getMonth()+1; 
    let yyyy = today.getFullYear();
    

    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = `${dayName}, ${mm} - ${dd} - ${yyyy}`;
    let fullDate = document.createElement('h1');
        fullDate.textContent = today;
        currentDay.appendChild(fullDate);
}
fullDate();


