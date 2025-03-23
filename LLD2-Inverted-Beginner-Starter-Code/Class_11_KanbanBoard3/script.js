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
let modalPriorityColor = colors[colors.length - 1];

// Tickets Array to Store Tickets
let ticketsArr = [];

// Task 1: Toggle the visibility of the modal
// - When the "Add" button is clicked, toggle the `addTaskFlag`.
// - You can achieve this by changing the `display` property of the `modalCont`.
addBtn.addEventListener('click', function () {
  addTaskFlag = !addTaskFlag;

  if (addTaskFlag) {
    modalCont.style.display = 'flex';
  } else {
    modalCont.style.display = 'none';
  }
});

// Task 2: Handle color selection for the ticket
// - Add event listeners to each color element in `allPriorityColors`.
// - When clicked, remove the "active" class from all colors and add it to the clicked one.
// - Update the `modalPriorityColor` with the selected color.
allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener('click', function () {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove('active');
    });

    colorElem.classList.add('active');

    modalPriorityColor = colorElem.classList[0];
  });
});

// Task 3: Add tickets using the "Shift" key
// - Add an event listener to `modalCont` for the "keydown" event.
// - If the key pressed is "Shift":
//   - Get the task content from `textAreaCont`.
//   - Generate a unique `ticketID` (you can use the `shortid` library or come up with an alternative).
//   - Call `createTicket()` with the selected color, ID, and task content.
//   - Hide the modal and clear the textarea content.
modalCont.addEventListener('keydown', function (e) {
  let key = e.key;

  if (key === 'Shift') {
    let taskContent = textAreaCont.value;
    let ticketID = shortid();
    createTicket(modalPriorityColor, ticketID, taskContent);
    modalCont.style.display = 'none';
    textAreaCont.value = '';

    // fixed flag resetting bug here
    addTaskFlag = false;
  }
});

// Task 4: Create a new ticket
// - Write a function `createTicket(ticketColor, ticketID, ticketTask)`.
// - Inside the function, create a ticket container (div) with a class `ticket-cont`.
// - Add the ticket's color, ID, and task content dynamically.
// - Append the ticket to the `mainCont`.
function createTicket(ticketColor, ticketID, ticketTask) {
  // IMPLEMENT HERE

  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  ticketCont.innerHTML = `
  <div class="ticket-color" style="background-color: ${ticketColor};"></div>
  <div class="ticket-id">${ticketID}</div>
  <div class="task-area">${ticketTask}</div>
`;

  mainCont.appendChild(ticketCont);
  handleRemoval(ticketCont);
}

// Task 5: Enable or disable ticket removal mode
// - Add an event listener to the "Remove" button.
// - Toggle the `removeTaskFlag` when the button is clicked.
// - If `removeTaskFlag` is true, set the button color to "red" to indicate active mode.
// - Otherwise, set the button color to "white".
removeBtn.addEventListener('click', function () {
  removeTaskFlag = !removeTaskFlag;

  if (removeTaskFlag) {
    alert('Delete button is activated.');
    removeBtn.style.color = 'red'
  }
  else {
    removeBtn.style.color = 'white'
  }
});

// Task 6: Remove tickets when clicked in remove mode
// - Write a function `handleRemoval(ticket)`.
// - Add an event listener to the ticket for the "click" event.
// - If `removeTaskFlag` is true, remove the ticket from the DOM.
function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    else {
      ticket.remove();
    }
  });
}

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

// Toggle modal visibility (Task 1).
// Add tickets to the UI (Task 2 to Task 4).
// Enable and disable remove mode (Task 5).
// Remove tickets when in remove mode (Task 6).