
window.addEventListener('scroll', onScroll)
onScroll()

// Função responsável por gerenciar as funções do scroll na pagina
function onScroll() {
    showNavOnScroll()
    menuAtivado(home);
    menuAtivado(services);
    menuAtivado(about);
    menuAtivado(contact);
}

function showNavOnScroll() {
  const navigation = document.querySelector("#navigation");
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

    menuElement.classList.remove('active')

    if (limitesDaSecao) {
        menuElement.classList.add('active')
    }
}



