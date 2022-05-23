const emailPattern =
  /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;

const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validations();
});

function validations() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  checkEmpty(firstName, firstNameValue);
  checkEmpty(lastName, lastNameValue);
  checkEmpty(password, passwordValue);
  validEmail(email, emailValue);
}

function validEmail(email, emailValue) {
  let formControl = email.parentElement;
  if (emailValue.match(emailPattern)) {
    formControl.classList.add("success");
    formControl.classList.remove("error-pattern");
  } else {
    formControl.classList.remove("success");
    formControl.classList.add("error-pattern");
  }
}

function checkEmpty(input, inputValue) {
  if (inputValue === "") {
    const formControl = input.parentElement;
    formControl.classList.add("error");
    formControl.classList.remove("success");
  } else {
    const formControl = input.parentElement;
    formControl.classList.add("success");
    formControl.classList.remove("error");
  }
}
