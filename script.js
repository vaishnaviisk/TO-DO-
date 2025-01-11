// const inputBox=document.getElementById("input-box")
// const listContainer=document.getElementById("list-container")

// function addTask(){
//     if(inputBox.value==''){
//         alert("You must write something!");
//     }
//     else{
//         let li=document.createElement("li")
//         li.innerHTML=inputBox.value;
//         listContainer.appendChild(li);
//         let span=document.createElement("span");
//         span.innerHTML="\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value="";
//     saveData();
// }
// listContainer.addEventListener("click",function(e){
//     if(e.target.tagName=="LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName=="SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// },false);

// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }

// function showTask(){
//     listContainer.innerHTML=localStorage.getItem("data");
// }
// showTask();
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value.trim() === '') { // Check for empty input
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for 'x'
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear input field
    saveData()
}

// Event listener for button click
document.querySelector("button").addEventListener("click", addTask);

// Event listener for Enter key
inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") { // Check if Enter key is pressed
        addTask();
    }
});

// Event listener for marking tasks as done or deleting
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Toggle checked status
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove task
        saveData()
    }
}, false);

function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }
    
    function showTask(){
        listContainer.innerHTML=localStorage.getItem("data");
    }
    showTask();