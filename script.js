

function onScroll() {
  showNavOnScroll();
  

}

function showNavOnScroll(){
  let navigation = document.querySelector("#navigation");
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }

  //   navigation.classList.toggle("scroll", window.scrollY > 0);
}

function openMenu(){
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

