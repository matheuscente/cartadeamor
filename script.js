function desabilitarModal() {
    let play = document.getElementById('player');
    play.play();
    let main = document.getElementsByTagName('main');
    main[0].classList.remove('modal-ativo');
    main[0].style.overflow = "auto";
    let modal = document.getElementsByClassName('modal-conteiner');
    modal[0].style.display = "none";
}