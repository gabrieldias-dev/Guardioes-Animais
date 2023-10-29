
// Forma que eu fiz
function onScroll() {
  let navigation = document.querySelector("#navigation");

  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }


//   navigation.classList.toggle("scroll", window.scrollY > 0);
}

