const paginas=[
    {
    "id":"",
    "nombre":"http://www.google.com.ar"
    },


]

const formulario=document.getElementById("formulario");
const pagina=document.getElementById("otraPagina");

formulario.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log(pagina.value);

});