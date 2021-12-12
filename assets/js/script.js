// INSTRUCTIONS
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


// PSEUDOCODE
// When the user opens the page, the full work day's schedule is populated
// Create a variable which contains all the work hours
// 
// JS will populate the screen automatically with the 9AM - 5PM editable items
// The color of each item is based on past, present, and future classes
// When the user clicks on an item, they can edit the text within
// When the user clicks on the save button, it saves it to local storage
// Indicate that the item was saved


// DAVE'S POEM
// listen for save button clicks
// save in localStorage
// Show notification that item was saved to localStorage by adding class 'show'
// Timeout to remove 'show' class after 5 seconds
// get current number of hours
// loop over time blocks
// check if we've moved past this time
// set up interval to check if current time needs to be updated
// load any saved data from localStorage
// display current day on page

const dateEl = document.getElementById('currentDay');
const containerEl = document.getElementById('schedule-container');
const workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

let today = new Date();
let dayIndex = today.getDay();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Sunday']
let dayName = dayList[dayIndex];
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
let timeHour = today.getHours();

console.log(timeHour);

function fullDate() {
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

function fullSchedule() {
    for(i = 0; i < workHours.length; i++) {
        let containerSections = document.createElement('div');
        containerSections.classList = 'row d-flex flex-row';
        containerSections.id = 'containerSections';
        containerEl.appendChild(containerSections);

        let blockEl = document.createElement('div');
        blockEl.classList = 'time-block col-1';
        containerSections.appendChild(blockEl);

        let timeSlot = document.createElement('p');
        timeSlot.id = "timeSlot" + workHours.indexOf();
        timeSlot.classList = 'hour';
        timeSlot.textContent = workHours[i];
        blockEl.appendChild(timeSlot);

        let eventWritingSection = document.createElement('p');
        eventWritingSection.id = 'eventWritingSection' + workHours.indexOf();
        eventWritingSection.textContent = ' ';
        eventWritingSection.classList = 'col-9';
        containerSections.appendChild(eventWritingSection);
            if(workHours[i] < timeHour) {
                eventWritingSection.classList = 'col-9 past';
            } else if (workHours[i] == timeHour) {
                eventWritingSection.classList = 'col-9 present';
            } else if (workHours[i] > timeHour) {
                eventWritingSection.classList = 'col-9 future';
            } else {
                console.log('none of the above')
            }
        
        let saveButtonSlot = document.createElement('p');
        saveButtonSlot.id = 'saveButtonSlot' + workHours.indexOf();
        saveButtonSlot.classList = 'saveButtonSlot col-1';
        containerSections.appendChild(saveButtonSlot);

        let saveButton = document.createElement('button');
        saveButton.id = 'saveButton' + workHours.indexOf();
        saveButton.classList = 'saveBtn';
        saveButton.innerHTML = "<span class='glyphicon glyphicon-floppy-save'></span>"
        saveButtonSlot.appendChild(saveButton);
    }
}
fullSchedule();