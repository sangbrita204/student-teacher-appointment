import { db } from "./firebase.js";
import { logAction } from "./logger.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

window.bookAppointment = async function () {
  const teacher = document.getElementById("teacher").value;
  const purpose = document.getElementById("purpose").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  await addDoc(collection(db, "appointments"), {
    teacher,
    purpose,
    date,
    time,
    status: "Pending"
  });

  logAction("Appointment Booked");
  alert("Appointment Requested");
};
