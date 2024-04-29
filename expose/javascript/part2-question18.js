// Prints the time when called
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
  
// Call the print function every second (1000ms)
const intervalId = setInterval(printTime, 1000);