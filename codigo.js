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

    
    // abrirPaginas()

});

//Agrega nombre de pagina a array paginas y guarda paginas en local storage
agregarPagina=(p)=>{
    paginas.push({"nombre":`${p}`})
    guardarPaginas()
}

//abre todas las paginas agregadas como favoritas
abrirPaginas=()=>{
    paginas.forEach(p=>{
        const url=p.nombre;
        window.open(`${url}`);
    })
}

//guarda las paginas en local storage
guardarPaginas=()=>{
    localStorage.setItem("paginas",JSON.stringify(paginas));
}

//retorna si existen paginas o no en localstorage
localStorageVacio=()=>{
    return localStorage.getItem("paginas")==null ? true : false;
}

