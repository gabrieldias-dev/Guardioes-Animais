//adicionando a função do scroll para resolver o erro de função não carregada
//ao fazer o scroll antes de terminar de carregar a pagina HTML
window.addEventListener('scroll', onScroll)
onScroll()

// função responsável por gerenciar o scroll na pagina
function onScroll() {
    showNavOnScroll()
    showBackToTopButton()
    activateMenuCurrentSection(home)
    activateMenuCurrentSection(services)
    activateMenuCurrentSection(about)
    activateMenuCurrentSection(contact)
}

function activateMenuCurrentSection(section) {
    // console.log(section)

    //linha alvo
    const targetLine = scrollY + innerHeight / 2

    //verificar se a seção passou da linha (targerLine)
    //quais dados irei precisar ?

    //topo da seção
    const sectionTop = section.offsetTop

    //altura da seção
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTagetLine = targetLine >= sectionTop

    //verificar se a base esta abaixo da linha alvo

    // a seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    //o final da seção passou da linha alvo
    const sectionEndPassedTagetLine = sectionEndsAt <= targetLine

    //limites da seção
    const sectionBoundaries =
        sectionTopReachOrPassedTagetLine && !sectionEndPassedTagetLine
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*= ${sectionId}]`)

    menuElement.classList.remove('active')

    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

// mostrar o navigation ao fazer scroll
function showNavOnScroll() {
    const navigation = document.querySelector("#navigation");
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

//mostrar o botao de ir para o topo ao fazer scroll
function showBackToTopButton() {
    if (scrollY > 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1200
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card`)
