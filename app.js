import { db } from "./firebase.mjs";
import { collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

let inputData = document.getElementById("input");
let addTodo = document.getElementById("btn");
let show = document.getElementById('display')

addTodo.addEventListener("click", async () => {
  console.log(`inputData.value is: ${inputData.value}`);
  if(inputData.value !== '' && inputData.value !== null){
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todoList: inputData.value,
      });
      inputData.value = '';
      show.scrollTop = show.scrollHeight;
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  else{
    alert('Please enter a task')
  }
});

// Display data from firebase
// const querySnapshot = await getDocs(collection(db, "todos"));
// // Loop through each document in the snapshot
// querySnapshot.forEach((doc) => {
//   let user = doc.data();
//   // console.log(`${doc.id} =>`, doc.data());
//   show.innerHTML += `<li>${user.todoList}</li>`
// });


onSnapshot(collection(db, 'todos'), (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      try {
        const data = change.doc.data();
        console.log(data.todoList);
        // Display the todo item in console or update DOM
        show.innerHTML += `<li>${data.todoList}</li>`
      } catch (error) {
        console.error("Error displaying document: ", error);
      }
    }
  });
});
