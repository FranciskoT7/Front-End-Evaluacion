let abrirModal=document.getElementsByClassName("imagen")[0];
let ventanaModal=document.getElementsByClassName("ventana-modal")[0];
let modal=document.getElementsByClassName("cerrarModal")[0];
let contenedorVideo=document.getElementsByClassName("contenedor-video")[0];
let video=document.getElementsByClassName("video1")[0];
abrirModal.addEventListener("click",ft=>{
    ft.preventDefault();
    ventanaModal.style.visibility="visible";
    ventanaModal.classList.toggle("cerrarModal")
})
ventanaModal.addEventListener("click",ft=>{
    if (ft.target!==contenedorVideo && ft.target!==video) {
        ventanaModal.classList.toggle("cerrarModal")
    }
})