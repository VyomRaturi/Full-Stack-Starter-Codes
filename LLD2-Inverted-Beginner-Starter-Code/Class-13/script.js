// Buttons and Flags
let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textArea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let toolboxColors = document.querySelectorAll(".color");
let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";
let addTaskFlag = false;
let removeTaskFlag = false;
let modalPrioritycolor = colors[colors.length - 1];
let ticketsArr = [];

/* ----------------------- TASK 1: Initialize Local Storage ----------------------- */
// Check if tickets exist in localStorage and render them
// YOUR TASK: Implement the logic to:
// 1. Check if 'tickets' exists in localStorage
// 2. If it exists, parse the data and populate ticketsArr
// 3. Create tickets for each item in the array

// Write your code here:
if (localStorage.getItem("tickets")) {
  // Your implementation here
}

/* ----------------------- Previous Color Filtering (No Changes Needed) ----------------------- */
toolboxColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    const selectedColor = colorElem.classList[0];
    const allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach(function (ticket) {
      const ticketColorBand = ticket.querySelector(".ticket-color");
      ticket.style.display = ticketColorBand.classList[1] === selectedColor ? "block" : "none";
    });
  });

  colorElem.addEventListener("dblclick", function () {
    const allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach(function (ticket) {
      ticket.style.display = "block";
    });
  });
});

allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElem.classList.add("active");
    modalPrioritycolor = colorElem.classList[0];
  });
});

/* ----------------------- Previous Event Listeners (No Changes Needed) ----------------------- */
addBtn.addEventListener("click", function () {
  addTaskFlag = !addTaskFlag;
  if (addTaskFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

removeBtn.addEventListener("click", function () {
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag == true) {
    alert("delete button has been activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

modalCont.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key === "Shift") {
    createTicket(modalPrioritycolor, textAreaCont.value);
    modalCont.style.display = "none";
    textAreaCont.value = "";
  }
});

/* ----------------------- TASK 2: Enhanced Ticket Creation ----------------------- */
// Modified createTicket function to handle both new and stored tickets
// YOUR TASK: Update the function to:
// 1. Generate ID for new tickets using shortid()
// 2. Save new tickets to localStorage
function createTicket(ticketColor, ticketTask, ticketID) {
  let id = ticketID || shortid();
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">${id}</div>
        <div class="task-area">${ticketTask}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
        </div>`;

  mainCont.appendChild(ticketCont);

  handleRemoval(ticketCont, id);
  handleLock(ticketCont, id);
  handleColor(ticketCont, id);

  // YOUR TASK: Add the following logic:
  // 1. Check if this is a new ticket (no ticketID parameter)
  // 2. If new, add to ticketsArr and update localStorage
  if (!ticketID) {
    // Your implementation here
  }
}

/* ----------------------- TASK 3: Implement getTicketIdx Helper ----------------------- */
// YOUR TASK: Implement the helper function to find ticket index by ID
function getTicketIdx(id) {
  // Your implementation here
}

/* ----------------------- TASK 4: Enhanced Ticket Removal ----------------------- */
// YOUR TASK: Update handleRemoval to:
// 1. Use getTicketIdx to find ticket index
// 2. Remove from ticketsArr
// 3. Update localStorage
function handleRemoval(ticket, id) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;

    // Your implementation here
  });
}

/* ----------------------- TASK 5: Enhanced Lock/Unlock ----------------------- */
// YOUR TASK: Update handleLock to:
// 1. Use getTicketIdx to find ticket
// 2. Update ticketsArr when task is edited
// 3. Save to localStorage
function handleLock(ticket, id) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");

  ticketLockIcon.addEventListener("click", function () {
    // Your implementation here: Get ticket index

    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove(unlockClass);
      ticketLockIcon.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }

    // Your implementation here: Update ticketsArr and localStorage
  });
}

/* ----------------------- TASK 6: Enhanced Color Management ----------------------- */
// YOUR TASK: Update handleColor to:
// 1. Use getTicketIdx to find ticket
// 2. Update ticketsArr with new color
// 3. Save to localStorage
function handleColor(ticket, id) {
  let ticketColorBand = ticket.querySelector(".ticket-color");

  ticketColorBand.addEventListener("click", function () {
    // Your implementation here: Get ticket index

    let currentColor = ticketColorBand.classList[1];
    let currentColorIdx = colors.findIndex(function (color) {
      return currentColor === color;
    });
    currentColorIdx++;
    let newTicketColorIdx = currentColorIdx % colors.length;
    let newTicketColor = colors[newTicketColorIdx];

    ticketColorBand.classList.remove(currentColor);
    ticketColorBand.classList.add(newTicketColor);

    // Your implementation here: Update ticketsArr and localStorage
  });
}