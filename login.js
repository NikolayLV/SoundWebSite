let container = document.querySelector(".container");
let signUp = document.querySelector(".text-new");
let sign = document.querySelector(".Signup");
let loginBtn = document.querySelector(".text-login");
let form = document.forms[0];

signUp.addEventListener("click", () => {
    container.classList.add("active");
    sign.classList.add("active");
});
loginBtn.addEventListener("click", () => {
    sign.classList.remove("active");
    container.classList.remove("active");
});

form.addEventListener("submit", function (e) {

});

form.passwordAgain.addEventListener("input", function () {
    if (form.passwordAgain.value != form.password.value) {
        form.passwordAgain.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
        form.password.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
    }
    else {
        form.passwordAgain.setCustomValidity("");
        form.password.setCustomValidity("");
    }
});