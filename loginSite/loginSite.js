const loginForm = document.getElementById("brukernavn");
const loginPassword = document.getElementById("passord");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginButton = document.getElementById("button");

loginButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    const username = loginForm.value;
    const password = loginPassword.value;

    if (username === "dino" && password === "chan") {
        alert("You have successfully logged in.");
        location.href = '../index.html'
    } else {
        alert(`wrong password`)
        loginErrorMsg.style.opacity = 1;
        setTimeout(function(){location.reload()}, 3000);
        

    }});
