const paginas=[
   

]

const formulario=document.getElementById("formulario");
const pagina=document.getElementById("otraPagina");
const mostrarPaginas=document.getElementById("mostrarPaginas");


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let cardPagina=document.createElement("div")
    cardPagina.innerHTML+= `<div> ${pagina.value} </div> `
    mostrarPaginas.appendChild(cardPagina);
    
    agregarPagina(pagina.value)
    abrirPaginas()

});


agregarPagina=(p)=>{
    paginas.push({"nombre":`${p}`})
}

abrirPaginas=()=>{
    paginas.forEach(p=>{
        const url=p.nombre;
        window.open(`${url}`);
    })
}