const button = document.querySelector("button");
const input = document.querySelector("#email");
const error = document.querySelector("#error");

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (!input.checkValidity() || input.value.length == 0) {
    error.classList.remove("errorHide");
  } else {
    error.classList.add("errorHide");
  }
});
