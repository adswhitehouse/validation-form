// Variables
let fullNameInput = document.querySelector(".jsFullNameInput");
let phoneNumberInput = document.querySelector(".jsPhoneNumberInput");
let emailInput = document.querySelector(".jsEmailInput");
let messageTextarea = document.querySelector(".jsMessageTextarea");
let fullNameAlert = document.querySelector(".jsFullNameAlert");
let phoneNumberAlert = document.querySelector(".jsPhoneNumberAlert");
let emailAlert = document.querySelector(".jsEmailAlert");
let messageAlert = document.querySelector(".jsMessageAlert");
let submitBtn = document.querySelector(".jsSubmitBtn");
let invalidSubmitMessage = document.querySelector(".jsInvalidSubmitMessage");

// Create check element
function createElement(inputElement) {
  inputElement.textContent = "";
  let checkButton = document.createElement("button");
  let validInput = document.createElement("i");
  validInput.classList.add("fa-solid", "fa-check");
  checkButton.classList.add("check-button");
  inputElement.appendChild(checkButton).appendChild(validInput);
}

// Full name
fullNameInput.addEventListener("keyup", () => {
  if (fullNameInput.value.length === 0) {
    fullNameAlert.textContent = "";
  } else if (fullNameInput.value.includes(" ")) {
    createElement(fullNameAlert);
  } else {
    fullNameAlert.textContent = "Enter full name";
  }
});

// Phone number
phoneNumberInput.addEventListener("keyup", () => {
  if (phoneNumberInput.value.length === 0) {
    phoneNumberAlert.textContent = "";
  } else if (phoneNumberInput.value.length === 11) {
    createElement(phoneNumberAlert);
  } else {
    phoneNumberAlert.textContent = "Enter 11 digit phone No.";
  }
});

// Email
emailInput.addEventListener("keyup", () => {
  if (emailInput.value.length === 0) {
    emailAlert.textContent = "";
  } else if (emailInput.value.includes("@")) {
    createElement(emailAlert);
  } else {
    emailAlert.textContent = "Enter valid email";
  }
});

// Message
messageTextarea.addEventListener("keyup", () => {
  if (messageTextarea.value.length === 0) {
    messageAlert.textContent = "";
  } else if (messageTextarea.value.length >= 30) {
    createElement(messageAlert);
  } else {
    messageAlert.textContent = `Enter ${
      30 - messageTextarea.value.length
    } or more characters`;
  }
});

// Displays appropriate alerts upon form submission
let timeout;
let timeoutActive = false;
function displayAlert(inputAlert, message) {
  if (!inputAlert.firstElementChild) {
    inputAlert.textContent = `${message}`;
    invalidSubmitMessage.style.visibility = "visible";
    if (!timeoutActive) {
      timeoutActive = true;
      timeout = setTimeout(() => {
        invalidSubmitMessage.style.visibility = "hidden";
        timeoutActive = false;
      }, 1000);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        invalidSubmitMessage.style.visibility = "hidden";
        timeoutActive = false;
      }, 1000);
    }
  }
}

// Submit Btn
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  displayAlert(fullNameAlert, "Name required");
  displayAlert(phoneNumberAlert, "Phone No. required");
  displayAlert(emailAlert, "Email required");
  displayAlert(
    messageAlert,
    `Enter ${30 - messageTextarea.value.length} or more characters`
  );
});
