const classes = (classes) => document.querySelector(classes);

let signupBtn = classes(".signupBtn"),
  loginBtn = classes(".loginBtn"),
  moveBtn = classes(".moveBtn"),
  signup = classes(".signup"),
  login = classes(".login"),
  form = classes("form");

loginBtn.addEventListener("click", () => {
  moveBtn.classList.add("rightBtn");
  signup.classList.remove("signupform");
  login.classList.add("loginform");
});

signupBtn.addEventListener("click", () => {
  moveBtn.classList.remove("rightBtn");
  login.classList.remove("loginform");
  signup.classList.add("signupform");
});
