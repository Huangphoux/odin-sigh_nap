let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm-password");

let button = document.querySelector("button");

button.addEventListener("click", () => {
    let passwordValue = password.value.toString();
    let confirm_passwordValue = confirm_password.value.toString();

    if (passwordValue !== confirm_passwordValue) {
        alert("Passwords do not match each other.");
    }
});
