const boton_ocultar = document.getElementById('boton-ocultar');
const boton_resaltar = document.getElementById('boton-resaltar');

boton_ocultar.addEventListener('click', () => {
    const parrafos = document.getElementsByClassName('parrafo');
    for (let p of parrafos){
        p.classList.add('ocultar');
    }
});

boton_resaltar.addEventListener('click', () => {
    const parrafos = document.getElementsByClassName('parrafo');
    for (let p of parrafos){
        p.classList.add('resaltar');
    } 
});