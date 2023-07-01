const inputEmail = document.getElementById("email-input");
const errorMessage = document.getElementById("errorMessage");
const emailValidColor = document.querySelector(".email");
const signUpContainer = document.querySelector(".outer-container");
const submitBtn = document.querySelector(".submit-btn");
const successContainer = document.querySelector(".outer-success-container");
const spanEmailValue = document.getElementById("e-value");
const dismissBtn = document.querySelector(".Dismiss-btn");

inputEmail.addEventListener("input", validEmail);
submitBtn.addEventListener("click", handleSubmit);

function validEmail(e) {
  return emailRegex(e.target.value);
}

function handleSubmit() {
  const email = inputEmail.value;

  if (!emailRegex(email)) {
    errorMessage.classList.remove("hideErrorMessage");
    emailValidColor.classList.add("errorEmail");
  } else {
    errorMessage.classList.add("hideErrorMessage");
    emailValidColor.classList.remove("errorEmail");
    signUpContainer.classList.add("hidden");
    successContainer.classList.add("show");
  }
  spanEmailValue.innerHTML = email;
}

// Required Email Address @
function emailRegex(email) {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
}

// Reset the page
dismissBtn.addEventListener("click", () => {
  window.location.reload();
});
