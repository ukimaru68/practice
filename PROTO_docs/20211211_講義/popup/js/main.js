const signupButton = document.getElementById("signup-button");
const mask = document.getElementById("mask");
const signup = document.getElementById("signup");

signupButton.addEventListener("click", () => {
  mask.classList.remove("hidden");
  signup.classList.remove("hidden");
});

mask.addEventListener("click", () => {
  mask.classList.add("hidden");
  signup.classList.add("hidden");
});
