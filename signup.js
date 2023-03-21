const classes = (classes) => document.querySelector(classes);
const id = (id) => document.getElementById(id);
let signupBtn = classes(".signupBtn"),
  loginBtn = classes(".loginBtn"),
  moveBtn = classes(".moveBtn"),
  signup = classes(".signup"),
  login = classes(".login"),
  form = classes("form"),
  submitBtn = classes(".submitBtn"),
  logsubmitBtn = classes(".log-submitBtn");

let suUsername = id("signup-username"),
  suEmail = id("signup-email"),
  suPass = id("signup-password"),
  logEmail = id("login-email"),
  logPass = id("login-password");

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

submitBtn.addEventListener("click", (e) => {
  submitData(e);
});

const submitData = (e) => {
  e.preventDefault();
  fetch("https://json-server-6ewh.onrender.com/users", {
    method: "POST",
    body: JSON.stringify({
      username: suUsername.value,
      email: suEmail.value,
      password: suPass.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
  alert("signup successful, please login");
  signup.classList.remove("signupform");
  login.classList.add("loginform");
};

logsubmitBtn.addEventListener("click", (e) => {
  loginData(e);
});

const loginData = (e) => {
  e.preventDefault();
  fetch(`https://json-server-6ewh.onrender.com/users?email=${logEmail.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      if (Object.keys(data).length === 0) {
        alert("Please Enter valid email");
      } else {
        if (data[0].password === +logPass.value) {
          alert("Log in Successfully");
          window.location.href = "homepage.html";
        } else {
          alert("login failed");
        }
      }
    });
};
