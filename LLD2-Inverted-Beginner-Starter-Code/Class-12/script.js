// Buttons and Flags
let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textArea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");

// Available Colors for Tickets
let colors = ["lightpink", "lightgreen", "lightblue", "black"];

// Toolbox Colors
let toolboxColors = document.querySelectorAll(".color");

// Lock and Unlock Classes
let lockClass = "fa-lock"; // closed lock
let unlockClass = "fa-lock-open"; // open lock

// Flags
let addTaskFlag = false;
let removeTaskFlag = false;

// Default Priority Color
let modalPrioritycolor = colors[colors.length - 1];

// Tickets Array to Store Tickets
let ticketsArr = [];

/* ------------------------- Code Covered in the Last Class ------------------------- */

// Task 1: Toggle modal visibility
addBtn.addEventListener("click", function () {
  addTaskFlag = !addTaskFlag;

  if (addTaskFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

// Task 2: Toggle remove mode and handle button styling
removeBtn.addEventListener("click", function () {
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag == true) {
    alert("delete button has been activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

// Task 3: Add ticket using "Shift" key
modalCont.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key === "Shift") {
    createTicket(modalPrioritycolor, textAreaCont.value, shortid()); // ticket generation
    modalCont.style.display = "none";
    textAreaCont.value = "";
  }
});

// Task 4: Select color for task
allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElem.classList.add("active");
    modalPrioritycolor = colorElem.classList[0]; // lightpink
  });
});

// Task 5: Create a new ticket
function createTicket(ticketColor, ticketTask, ticketID) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class="ticket-color ${ticketColor}"></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
      <i class="fa-solid fa-lock"></i>
    </div>`;

  mainCont.appendChild(ticketCont);

  ticketsArr.push({ ticketColor, ticketTask, ticketID });

  handleRemoval(ticketCont);
  handleLock(ticketCont);
  handleColor(ticketCont);
}

// Task 6: Handle ticket removal
function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    ticket.remove();
  });
}

/* ---------------------- New Code for the Next Class ---------------------- */

// Task 7: Filter tickets by color
// - Loop through each color element in `toolboxColors`.
// - Add a "click" event listener to each color element.
// - On click, retrieve the selected color and filter the tickets by matching color.
//   - Loop through all tickets and check if the color band matches the selected color.
//   - Display matching tickets and hide others.
// - Add a "dblclick" event listener to reset the filter.
//   - Show all tickets again when double-clicked.
toolboxColors.forEach(function (colorElem) {
  // Single-click to filter tickets
  colorElem.addEventListener("click", function () {
  });

  // Double-click to reset filters
  colorElem.addEventListener("dblclick", function () {
  });
});


// Task 8: Handle ticket lock/unlock functionality
// - Write a function `handleLock(ticket)`.
// - Inside the function, find the lock icon and task area in the ticket.
// - Add a "click" event listener to the lock icon.
// - When clicked, toggle between `lockClass` and `unlockClass`.
//   - If locked, make the task area `contenteditable=false`.
//   - If unlocked, make the task area `contenteditable=true`.
function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");
}

// Task 9: Cycle through ticket colors
// - Write a function `handleColor(ticket)`.
// - Inside the function, find the color band in the ticket.
// - Add a "click" event listener to the color band.
// - When clicked, cycle through the `colors` array to update the ticket's color.
function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".ticket-color");
}
