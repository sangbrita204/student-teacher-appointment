import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { logAction } from "./logger.js";

window.loadAppointments = async function () {
  const list = document.getElementById("appointments");
  list.innerHTML = "";

  const snapshot = await getDocs(collection(db, "appointments"));
  snapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = `${doc.data().teacher} - ${doc.data().purpose} (${doc.data().status})`;
    list.appendChild(li);
  });

  logAction("Teacher Viewed Appointments");
};
