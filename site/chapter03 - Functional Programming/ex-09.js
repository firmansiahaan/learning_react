/**
 * title: Putting It All Together
 * 
 * description: 
 * 
 * open terminal and run this code to see the output.
 * node ex-08.js
 * 
 * Functional Concepts - Putting It All Together
 */

// In this example, we have a template string for a clock time in the format "hh:mm:ss tt".
// We use the `replace` method to substitute the placeholders "hh", "mm", "ss", and "tt" 
// with actual values.
// The resulting string is "03:33:33 PM", which represents a specific time in a 12-hour format with 
// an AM/PM indicator. 
// This demonstrates how function composition can be used to manipulate strings and create
// formatted output by combining simple string operations.
const template = "hh:mm:ss tt";
const clockTime = template
    .replace("hh", "03")
    .replace("mm", "33")
    .replace("ss", "33")
    .replace("tt", "PM");
console.log(clockTime);
// "03:33:33 PM"


// In this example, we have a function `logClockTime` that retrieves the current time, formats it 
// as a string, and logs it to the console.
//
// The `getClockTime` function gets the current time, converts it to a civilian time format, 
// and formats it as a string in the "hh:mm:ss tt" format.
//
// The `setInterval` function is used to call `logClockTime` every 1000 milliseconds (1 second), 
// which allows us to continuously update the clock time in the console.
//
// This demonstrates how we can put together various functional programming concepts, 
// such as function composition and data transformation, to create a dynamic clock that updates 
// in real-time.
//
// By breaking down the problem into smaller functions and composing them together, 
// we can create a more complex behavior while keeping our code organized and maintainable.
setInterval(logClockTime, 1000);
function logClockTime() {
    // Get Time string as civilian time
    let time1 = getClockTime();
    // Clear the Console and log the time
    console.clear();
    console.log(time1);
}

function getClockTime() {
    // Get the Current Time
    let date = new Date();
    let timeStr = "";

    // Serialize clock time
    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    };

    // Convert to civilian time
    if (time.hours == 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12;
    }

    // Prepend a 0 on the hours to make double digits
    if (time.hours < 10) {
        time.hours = "0" + time.hours;
    }

    // prepend a 0 on the minutes to make double digits
    if (time.minutes < 10) {
        time.minutes = "0" + time.minutes;
    }

    // prepend a 0 on the seconds to make double digits
    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    // Format the clock time as a string "hh:mm:ss tt"
    return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}