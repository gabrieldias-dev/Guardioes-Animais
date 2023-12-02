
function validarForm() {
  let inputs = document.querySelectorAll("input[required]");
  let formValido = true;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      formValido = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (!formValido) {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }

}


