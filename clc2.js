/*const display= document.querySelector(".display");
const buttons= document.querySelectorAll("button");
const specialchars = ["%","*","/","-","="];
 let output = "";

const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== "") {
        output = eval(output.replace("%","/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    }else {
     if(output === "" && specialchars.includes(btnValue)) return;
     output += btnValue;
    }
    display.value = output;
}

buttons.forEach((buttons) => {
 buttons.addEventListener("click", (e) => console.log(e.target.dataset.value))
});

function ac()
{
 document.getElementById("res").value="";
}
function show(input)
{
 document.getElementById("res").value+=input;
}
function cal()
{
 var output=eval(document.getElementById("res").value);
 document.getElementById("res").value=output;
}
*/
let input=document.getElementById("inputbox");
let buttons=document.querySelectorAll
('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
             string = eval(string);
             input.value = string;
        }

        else if(e.target.innerHTML == 'AC') {
        string = "";
        input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
          string = string.substring(0, string.length-1);
          input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }
    })
})


/*Get the HTML element where you want to display the date and time
const currentDateTimeElement = document.getElementById("currentDateTime");
// Function to update the date and time
function updateDateTime() {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();
    const dateTimeString = `${date} ${time}`;
    currentDateTimeElement.textContent = dateTimeString;
}

// Call the function to initially set the date and time, and then update it every second
updateDateTime();
setInterval(updateDateTime, 1000); */


