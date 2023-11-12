
window.addEventListener('scroll', onScroll)
onScroll()

// Função responsável por gerenciar as funções do scroll na pagina
function onScroll() {
    showNavOnScroll()
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
    // imagemLogo.src = "assets/pata2.png";
  } else {
    navigation.classList.remove("scroll");
    // imagemLogo.src = "assets/pataPB.png";
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
    const linhaAlvo = scrollY + innerHeight / 2

    //verificar se a seção passou da linha (targerLine)
    let TopoDaSecao = section.offsetTop
    let AlturaDaSecao = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const secaoPassouDaLinhaAlvo = linhaAlvo >= TopoDaSecao;

    //Verificando onde a seção termina
    let sectionEndsAt = TopoDaSecao + AlturaDaSecao;

    //o final da seção passou da linha alvo
    const secaoNaoPassoudaLinha = sectionEndsAt <= linhaAlvo

    //limites da seção
    let limitesDaSecao = secaoPassouDaLinhaAlvo && !secaoNaoPassoudaLinha
    let sectionId = section.getAttribute('id')

    let menuElement = document.querySelector(`.menu a[href*= ${sectionId}]`)

    menuElement.classList.remove('ativo')

    if (limitesDaSecao) {
        menuElement.classList.add('ativo')
    }
}

// Carrossel resgate
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 7,
    stretch: 10,
    depth: 200,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});

