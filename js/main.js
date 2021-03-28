let images = ['./img/banner1.png','./img/banner2.jpg', './img/banner3.jpg']

// On initialise le compteur des slides 
let slideNumber = 0
let slider = document.getElementById("slider")

function precedent() {
  slideNumber--
  if (slideNumber < 0) {
    //Pour obtenir le dernier élément de l'array on prend la taille de l'array -1
    slideNumber = images.length-1
  } 
  slider.src = images[slideNumber]
}

function suivant() {
  slideNumber++
  if (slideNumber >= images.length) {
    slideNumber = 0
  } 
  slider.src = images[slideNumber]
}

document.getElementsByClassName("precedent")[0].addEventListener("click", precedent)
document.getElementsByClassName("suivant")[0].addEventListener("click", suivant)


// FAIRE LA FLECHE BACK TO TOP

function arrowUp(){
    //console.log(window.scrollY)
    if (window.scrollY > 100){
      document.getElementsByClassName("backToTop")[0].style.display = "flex"
    } else {
      document.getElementsByClassName("backToTop")[0].style.display = "none"
    }
  }
  
  window.addEventListener("scroll", arrowUp)
  