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

// Create check btn element
function createElement(inputElement) {
  inputElement.textContent = "";
  let checkButton = document.createElement("button");
  let validInput = document.createElement("i");
  validInput.classList.add("fa-solid", "fa-check");
  checkButton.classList.add("check-button");
  inputElement.appendChild(checkButton).appendChild(validInput);
}

// Only return true and display check button if criteria is met, otherwise display appropriate warning message
function validateName() {
  let name = fullNameInput.value;
  if (name.length === 0) {
    fullNameAlert.textContent = "";
    return false
  } else if (!name.includes(" ")) {
    fullNameAlert.textContent = "Enter full name";
    return false
  } else {
    createElement(fullNameAlert);
    return true;
  }
}

// Only return true and display check button if criteria is met, otherwise display appropriate warning message
function validateNumber() {
  let telNumber = phoneNumberInput.value;
  if (telNumber.length === 0) {
    phoneNumberAlert.textContent = "";
    return false
  } else if (telNumber.length > 0 && !telNumber.match(/^[0-9]\d*$/)) {
    phoneNumberAlert.textContent = "Only digits please";
    return false
  } else if (telNumber.length !== 11 && telNumber.length !== 0) {
    phoneNumberAlert.textContent = "Enter 11 digit phone No.";
    return false
  } else {
    createElement(phoneNumberAlert);
    return true;
  }
}

// Only return true and display check button if criteria is met, otherwise display appropriate warning message
function validateEmail() {
  let email = emailInput.value;
  if (email.length === 0) {
    emailAlert.textContent = "";
    return false
  } else if (!email.includes("@")) {
    emailAlert.textContent = "Enter valid email";
    return false
  } else {
    createElement(emailAlert);
    return true
  }
}

// Only return true and display check button if criteria is met, otherwise display appropriate warning message
function validateMessage() {
  let message = messageTextarea.value;
  if (message.length === 0) {
    messageAlert.textContent = "";
    return false
  } else if (message.length < 30) {
    messageAlert.textContent = `Enter ${
      30 - messageTextarea.value.length
    } or more characters`;
    return false
  } else {
    createElement(messageAlert);
    return true
  }
}

// Full name
fullNameInput.addEventListener("keyup", () => {
  validateName();
});

// Phone number
phoneNumberInput.addEventListener("keyup", () => {
  validateNumber();
});

// Email
emailInput.addEventListener("keyup", () => {
  validateEmail();
});

// Message
messageTextarea.addEventListener("keyup", () => {
  validateMessage();
});

// Displays appropriate alerts for each input/textarea element upon invalid form submission and sets timeout on a warning message
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
      }, 2000);
    }
  }
}

// Submit Btn
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // If form is valid then reset form back to initial state
  if (
    validateName() &&
    validateNumber() &&
    validateEmail() &&
    validateMessage()
  ) {
    fullNameInput.value = "";
    phoneNumberInput.value = "";
    emailInput.value = "";
    messageTextarea.value = "";
    fullNameAlert.firstElementChild.remove();
    phoneNumberAlert.firstElementChild.remove();
    emailAlert.firstElementChild.remove();
    messageAlert.firstElementChild.remove();
    // If form is invalid then display appropriate warning message for input/textarea elements
  } else {
    displayAlert(fullNameAlert, "Name required");
    displayAlert(phoneNumberAlert, "Phone No. required");
    displayAlert(emailAlert, "Email required");
    displayAlert(
      messageAlert,
      `Enter ${30 - messageTextarea.value.length} or more characters`
    );
  }
});
