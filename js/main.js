
// formilaire
const form = document.querySelector("form");
// inputs
const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");

/**
 * Prevent default sumbit action
 * @param {Event} e event
 */
function preventSumbit(e) {
  e.preventDefault();
}
// Listener for form events
form.addEventListener("submit", preventSumbit);

/**
 * Fullname validation.
 * @param {string} name the name string to validate.
 * @returns {boolean} result, true if valide, else false.
 */
function validateName(name) {
  return name.length >= 5 && name.includes(" ");
}

/**
 * Show error style on Fullname input.
 */
function testFullname() {
  if (!validateName(fullname.value)) {
    fullname.style.color = "red";
    fullname.classList.add("is-invalid");
  } else {
    fullname.style.color = "inherit";
    fullname.classList.remove("is-invalid");
  }
}

// Listener for changes on input 'fullname'
fullname.addEventListener("input", testFullname);

function validateEmail(email) {
  return email.length >= 8 && email.includes("@");
}
function testEmail() {
  if (!validateEmail(email.value)) {
    email.style.color = "red";
    email.classList.add("is-invalid");
  } else {
    email.style.color = "inherit";
    email.classList.remove("is-invalid");
  }
}

// Listener for changes on input 'email'
email.addEventListener("input", testEmail);


function validatePhone(phone) {
  const regexNumber = /[0-9]/;
  return phone.length >= 8 && regexNumber.test(phone);
}
function testPhone() {
  if (!validatePhone(phone.value)) {
    phone.style.color = "red";
    phone.classList.add("is-invalid");
  } else {
    phone.style.color = "inherit";
    phone.classList.remove("is-invalid");
  }
}

// Listener for changes on input 'phone'
phone.addEventListener("input", testPhone);


function validateMessage(message) {
  return message.length >= 10;
}
function testMessage() {
  if (!validateMessage(message.value)) {
    message.style.color = "red";
    message.classList.add("is-invalid");
  } else {
    message.style.color = "inherit";
    message.classList.remove("is-invalid");
  }
}

// Listener for changes on input 'message'
message.addEventListener("input", testMessage);



function saveForm() {
  const user = {
    fullname: fullname.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };
  if (
    validateName(fullname.value) &&
    validateEmail(email.value) &&
    validatePhone(phone.value) &&
    validateMessage(message.value)
    )
    localStorage.setItem("u", JSON.stringify(user));
}

form.addEventListener("submit", saveForm);

const title = document.querySelector("h1");

function autoFillForm() {
  const user = JSON.parse(localStorage.getItem("u"));
  fullname.value = user.fullname;
  email.value = user.email;
  phone.value = user.phone;
  message.value = user.message;
}

title.addEventListener("click", autoFillForm);