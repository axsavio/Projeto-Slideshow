let totalSlides = document.querySelectorAll('.slider--item').length; //Pegar todas as imagens
let currentSlide = 0; //Para começar do primeiro slide


document.querySelector('.slider--width').style.width = 
    `calc(100vw *${totalSlides} )`;
document.querySelector('.slider--controls').style.height =
     `${document.querySelector('.slider').clientHeight}px`; //Jogar o slider na altura do control

function goPrev(){          //Funções onclick para acão do clique no proximo e anterior
    currentSlide--;
    if(currentSlide < 0){
        currentSlide  = totalSlides -1 ;
    }
    updateMargin();
}    
function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = O;
    }
    updateMargin();
}
function updateMargin(){ //Para atualizar
    let slideItemWidth = document.querySelector('.slider--item').clientWidth
    let newMargin  = (currentSlide * slideItemWidth); //Largura da tela
    document.querySelector('.slider--width').style.marginLeft =
    `-${newMargin}px`;
}

setInterval(goNext, 5000); //Passar o slider automaticamente

//Projeto finalizado!