/*$(window).scroll(function() {
    if ($(this).scrollTop() < 500) {
        $('.boton-flot').fadeOut();
     }
    else {
      $('.boton-flot').fadeIn();
     }
 });*/

 const botonScroll = document.querySelector(".boton-flot");

 const refrecarVisiBoton = () =>{
    if (document.documentElement.scrollTop <= 1000) {
        botonScroll.style.display = "none";
    }else{
        botonScroll.style.display = "block";
    }
 }
 refrecarVisiBoton();

botonScroll.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) =>{
    refrecarVisiBoton();
});