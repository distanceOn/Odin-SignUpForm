const inputs = document.querySelectorAll(".form__input");
const pass = document.querySelector("#password");
const conf = document.querySelector("#confirm");
const form = document.querySelector(".form");
const div = document.querySelector(".main__form-button");

form.addEventListener("submit", (event) => {
  let counter = 0;
  event.preventDefault();
  for (const input of inputs) {
    if (input.value === "") {
      input.classList.add("error");
    }
  }
  if (pass.value !== "" && conf.value !== "" && conf.value !== pass.value) {
    conf.classList.add("error");
  }
  returnSuccess();
});

for (const input of inputs) {
  input.addEventListener("input", () => {
    if (input.classList.contains("error")) {
      input.classList.remove("error");
    }
  });
}

function returnSuccess() {
  let counter = 0;
  for (const input of inputs) {
    if (input.classList.contains("error")) {
      counter = 1;
    }
  }
  if (counter === 0) {
    const el = document.createElement("div");
    el.classList.add("success");
    el.textContent = "Success!";
    div.append(el);
  }
}
