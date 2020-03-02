function myFunction() {
  var x = document.getElementById("rps-menu");
  if (x.className === "header__bottom__menu") {
    x.className += " responsive";
  } else {
    x.className = "header__bottom__menu";
  }
}