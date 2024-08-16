import { db } from "./firebase.mjs";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

let inputData = document.getElementById("input");
let addTodo = document.getElementById("btn");
let show = document.getElementById('')

addTodo.addEventListener("click", async () => {
  try {
  const docRef = await addDoc(collection(db, "todos"), {
    first: inputData.value,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
});

const querySnapshot = await getDocs(todo);
// Loop through each document in the snapshot
querySnapshot.forEach((doc) => {
  let user = doc.data();
  // console.log(`${doc.id} =>`, doc.data());
  show.innerHTML += `<li>${user}</li>`
});

