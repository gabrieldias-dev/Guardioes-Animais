window.addEventListener("scroll", onScroll);
onScroll();

// Função responsável por gerenciar as funções do scroll na pagina
function onScroll() {
  showNavOnScroll();
  menuAtivado(home);
  menuAtivado(sobre);
  menuAtivado(resgates);
  menuAtivado(ajudar);
}

function showNavOnScroll() {
  const navigation = document.querySelector("#navigation");
  const imagemLogo = document.querySelector("#imglogo");
  if (scrollY > 10) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

// Menu responsivel para telas menores
function abrirMenu() {
  document.body.classList.add("menu-expanded");
}

function fecharMenu() {
  document.body.classList.remove("menu-expanded");
}

function menuAtivado(section) {
  //linha alvo
  const linhaAlvo = scrollY + innerHeight / 2;

  //verificar se a seção passou da linha (targerLine)
  let TopoDaSecao = section.offsetTop;
  let AlturaDaSecao = section.offsetHeight;

  // o topo da seção chegou ou ultrapassou a linha alvo
  const secaoPassouDaLinhaAlvo = linhaAlvo >= TopoDaSecao;

  //Verificando onde a seção termina
  let sectionEndsAt = TopoDaSecao + AlturaDaSecao;

  //o final da seção passou da linha alvo
  const secaoNaoPassoudaLinha = sectionEndsAt <= linhaAlvo;

  //limites da seção
  let limitesDaSecao = secaoPassouDaLinhaAlvo && !secaoNaoPassoudaLinha;
  let sectionId = section.getAttribute("id");

  let menuElement = document.querySelector(`.menu a[href*= ${sectionId}]`);

  menuElement.classList.remove("ativo");

  if (limitesDaSecao) {
    menuElement.classList.add("ativo");
  }
}

// Carrossel resgate, biblioteca Swiper JS
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 7,
    stretch: 10,
    depth: 154,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});

// Números aumentando na tela

function contagemUp() {
  let from = 10;
  let to = 100;
  let step = to > from ? 1 : -1;
  let interval = 100;

  if (from == to) {
    document.querySelector("#contagem").textContent = from;
    return;
  }

  let counter = setInterval(function () {
    from += step;
    document.querySelector("#contagem").textContent = from;

    if (from == to) {
      clearInterval(counter);
    }
  }, interval);
}
// contagemUp();
