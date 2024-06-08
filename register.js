const form = document.getElementById("form")
const login = document.getElementById("login")
const senha = document.getElementById("senha")
const email = document.getElementById("email")
const confirmesenha = document.getElementById("confirmesenha");

form.addEventListener("submit", (event) =>{
event.preventDefault();
checkInputlogin();
})

function checkInputlogin(){
    const loginValue = login.ariaValueMax;
    console.log(loginValue)
}

   