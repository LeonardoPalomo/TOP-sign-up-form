const password = document.getElementById('password');
const password_confirm = document.getElementById('confirm');
let pass_span = document.querySelector(".valid-pass");
const submit_button = document.querySelector("button[type=\"submit\"");
const first_name = document.querySelector("#first_name");

console.log(submit_button);
password_confirm.addEventListener('input', (e) => {
  if(password.value !== password_confirm.value){
    pass_span.textContent = "Passwords do not match"
    pass_span.style="color: red"
  }
  else {
    pass_span.textContent = " "
  }
});

submit_button.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(first_name.value);
});
