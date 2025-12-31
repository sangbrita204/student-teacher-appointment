import { auth } from "./firebase.js";
import { logAction } from "./logger.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

window.register = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("Student Registered");
      alert("Registered Successfully");
    })
    .catch(err => alert(err.message));
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("User Logged In");
      window.location.href = role === "student" ? "student.html" : "teacher.html";
    })
    .catch(err => alert(err.message));
};

window.logout = function () {
  signOut(auth).then(() => {
    logAction("User Logged Out");
    window.location.href = "index.html";
  });
};
