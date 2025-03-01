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
  let name = fullNameInput.value;
  if (name.length === 0) {
    fullNameAlert.textContent = "";
  } else if (!name.includes(" ")) {
    fullNameAlert.textContent = "Enter full name";
  } else {
    createElement(fullNameAlert);
  }
});

// Phone number
phoneNumberInput.addEventListener("keyup", () => {
  let telNumber = phoneNumberInput.value;
  if (telNumber.length === 0) {
    phoneNumberAlert.textContent = "";
  } else if (telNumber.length > 0 && !telNumber.match(/^[0-9]\d*$/)) {
    phoneNumberAlert.textContent = "Only digits please";
  } else if (telNumber.length !== 11 && telNumber.length !== 0) {
    phoneNumberAlert.textContent = "Enter 11 digit phone No.";
  } else {
    createElement(phoneNumberAlert);
  }
});

// Email
emailInput.addEventListener("keyup", () => {
  let email = emailInput.value;
  if (email.length === 0) {
    emailAlert.textContent = "";
  } else if (!email.includes("@")) {
    emailAlert.textContent = "Enter valid email";
  } else {
    createElement(emailAlert);
  }
});

// Message
messageTextarea.addEventListener("keyup", () => {
  let message = messageTextarea.value;
  if (message.length === 0) {
    messageAlert.textContent = "";
  } else if (message.length < 30) {
    messageAlert.textContent = `Enter ${
      30 - messageTextarea.value.length
    } or more characters`;
  } else {
    createElement(messageAlert);
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
      }, 2000);
    }
  }
}

// Submit Btn
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !fullNameAlert.firstElementChild ||
    !phoneNumberAlert.firstElementChild ||
    !emailAlert.firstElementChild ||
    !messageAlert.firstElementChild
  ) {
    displayAlert(fullNameAlert, "Name required");
    displayAlert(phoneNumberAlert, "Phone No. required");
    displayAlert(emailAlert, "Email required");
    displayAlert(
      messageAlert,
      `Enter ${30 - messageTextarea.value.length} or more characters`
    );
  } else {
    fullNameInput.value = "";
    phoneNumberInput.value = "";
    emailInput.value = "";
    messageTextarea.value = "";
    fullNameAlert.firstElementChild.remove();
    phoneNumberAlert.firstElementChild.remove();
    emailAlert.firstElementChild.remove();
    messageAlert.firstElementChild.remove();
  }
});
