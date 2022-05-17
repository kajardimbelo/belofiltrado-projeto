let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let botao = document.getElementById("botao-topo");

window.onscroll = function scrollFunction () {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      botao.style.display = "block";
    } else {
      botao.style.display = "none";
    }
  }
  
  function voltarParaTopo () {
    document.documentElement.scrollTop = 0
  }