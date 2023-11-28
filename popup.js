
function abrir() {
    let popupdoar = document.querySelector("#popupdoar");

    popupdoar.style = 'display: block'
    document.body.classList.add("blur");
}


function fechar() {
  let popupdoar = document.querySelector("#popupdoar");

  popupdoar.style = "display: none";
  document.body.classList.remove("blur");
}