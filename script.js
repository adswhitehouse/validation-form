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

// Create check element
let checkButton = document.createElement("button");
let validInput = document.createElement("i");
validInput.classList.add("fa-solid", "fa-check");
checkButton.classList.add("check-button");
checkButton.appendChild(validInput);

// Full name
fullNameInput.addEventListener("keyup", () => {
  if (fullNameInput.value.length === 0) {
    fullNameAlert.textContent = "";
  } else if (fullNameInput.value.includes(" ")) {
    fullNameAlert.textContent = "";
    fullNameAlert.appendChild(checkButton);
  } else {
    fullNameAlert.textContent = "Enter full name";
  }
});

// Phone number
phoneNumberInput.addEventListener("keyup", () => {
  if (phoneNumberInput.value.length === 0) {
    phoneNumberAlert.textContent = "";
  } else if (phoneNumberInput.value.length === 11) {
    phoneNumberAlert.textContent = "";
    phoneNumberAlert.appendChild(checkButton);
  } else {
    phoneNumberAlert.textContent = "Enter 11 digit phone No.";
  }
});

// Email
emailInput.addEventListener("keyup", () => {
  if (emailInput.value.length === 0) {
    emailAlert.textContent = "";
  } else if (emailInput.value.includes("@")) {
    emailAlert.textContent = "";
    emailAlert.appendChild(checkButton);
  } else {
    emailAlert.textContent = "Enter valid email";
  }
});

// Message
messageTextarea.addEventListener("keyup", () => {
  if (messageTextarea.value.length === 0) {
    messageAlert.textContent = "";
  } else if (messageTextarea.value.length >= 30) {
    messageAlert.textContent = "";
    messageAlert.appendChild(checkButton);
  } else {
    messageAlert.textContent = "Enter 30 or more characters";
  }
});
