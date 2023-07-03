import { signIn } from "./server.js";



function datosUsuario() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('pwd').value;
    const email = document.getElementById('email').value;
  
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log('User signed up successfully');
        } else {
          console.error('Error signing up:', data.error);
        }
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  }
  



// console.log("hola");
// import signIn from "../server.js";


// function datosUsuario() {
//     console.log("hola");

//     let username = document.getElementById('username').value;
//     let password = document.getElementById('pwd').value;
//     let eMail = document.getElementById('email').value;

//     signIn(username, password, eMail);
// }

