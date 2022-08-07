var signupForm = document.getElementById("signup-form");
var loginForm = document.getElementById("login-form");
function handleForm(event) { event.preventDefault(); } 
signupForm.addEventListener('submit', handleForm);
loginForm.addEventListener('submit', handleForm);

// Signup
let userList = [];
let user = {
  email: "admin@gmail.com",
  username: "admin",
  password: "admin",
};
userList.push(user);

function createNewUser(email, username, password) {
  var newUser = {};
  newUser["email"] = email;
  newUser["username"] = username;
  newUser["password"] = password;
  return newUser;
}

function store() {
  if (localStorage.getItem("user") == null) {
    localStorage.setItem("user", JSON.stringify(userList));
  }
  userList = JSON.parse(localStorage.getItem("user"));
  const sEmailInp = document.getElementById("s-email-input").value;
  const sUsernameInp = document.getElementById("s-username-input").value;
  const sPasswordInp = document.getElementById("s-password-input").value;
  const sCfpwInp = document.getElementById("s-cfpw-input").value;

  if (sPasswordInp == sCfpwInp && sEmailInp && sUsernameInp && sPasswordInp) {
    userList.push(createNewUser(sEmailInp, sUsernameInp, sPasswordInp));
    localStorage.setItem("user", JSON.stringify(userList));
    alert("Signed up successfully");
    window.location.reload();
  } else {
    alert("Signed up failed");
  }
}

// Login
var storedUserList = null;
if (localStorage.getItem("user")) {
  storedUserList = JSON.parse(localStorage.getItem("user") || "[]");
  document.getElementById("username-input").value =
    storedUserList[storedUserList.length - 1].username;
}

function check() {
  var usernameInp = document.getElementById("username-input").value;
  var passwordInp = document.getElementById("password-input").value;
  var check = false;

  for (let i = 0; i < storedUserList.length; i++) {
    if (
      storedUserList[i].username == usernameInp &&
      storedUserList[i].password == passwordInp
    ) {
      check = true;
      localStorage.setItem("currentUser", JSON.stringify(storedUserList[i]));
      break;
    }
  }
  if (check) {
    alert("Logged in successfully");
    window.location.href = "index.html";
  } else alert("Incorrect login information");
}

//Switch login and signup
const signupSwitch = document.getElementById("signup-switch");
const loginSwitch = document.getElementById("login-switch");
var loginContainer = document.getElementsByClassName("login__container");
var signupContainer = document.getElementsByClassName("signup__container");

signupSwitch.onclick = () => {
  signupContainer[0].classList.remove("hidden");
  loginContainer[0].classList.add("hidden");
};

loginSwitch.onclick = () => {
  signupContainer[0].classList.add("hidden");
  loginContainer[0].classList.remove("hidden");
};
