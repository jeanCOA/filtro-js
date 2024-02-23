

//import`s
import { URL_COMPANIES } from "../api/urls.js";
//selectores
//traer email y contraseña
const formLogin = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");
//eventos 
//escuchar el evento submit
formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    logIn()
});

async function logIn (){
    const response = await fetch (`${URL_COMPANIES}?email=${email.value}`)
    const data = await response.json()



    console.log(data); 



    if (!data) {
        console.error("email no registrado");
        alert('email invalido')
        return;
    }
    
    
    if (data[0].password !== password.value) {
        console.error("contraseña invalida");
        alert('contraseña invalida')
        return;
    }
    console.log('todo ok');


localStorage.setItem("user",JSON.stringify (data[0]));
window.location.href = "administrator.html";

}




//3hacer peticion get buscar email al json server 
//4comparar y validar el email y con la db
//5si el email corresponde con la db redirigir a al apartado de administracion
//6y guardar la sesion en el local storage
//guardian: validar si la sesion en el local storage corresponde con una de las credenciales de la db
//sino se cumple con la 5 redirigir al home