//Array que contendra todas las paginas
const paginas=[]

//Se obtienen los datos de input , formulario y de mostrarPaginas que es el contenedor del div de nombre d paginas agregadas
const formulario=document.getElementById("formulario");
const inputPagina=document.getElementById("inputPagina");
const mostrarPaginas=document.getElementById("mostrarPaginas");

let cardPagina=document.createElement("div")
const formularioPaginasAgregadas= document.getElementById("paginasAgregadas");



//retorna si existen paginas o no en localstorage
localStorageVacio=()=>{
    return localStorage.getItem("paginas")==null ? true : false;
}


//funcion que se usa cada vez que se refresca la pagina
//si hay datos en localStorage los carga de nuevo en pantalla. Asi obtengo los datos que habian sido cargados anteriormente
actualizoDatos=()=>{
    if(paginas.length==0 && !localStorageVacio()){
   
        obtenerPaginasStorage= JSON.parse(localStorage.getItem("paginas")); 
        obtenerPaginasStorage.forEach(p=>{
            paginas.push(p)
        })
    
        paginas.forEach(p =>{
             cardPagina.innerHTML+= `<div> ${p.nombre} </div> `
             mostrarPaginas.appendChild(cardPagina); 
        })
    }
}


actualizoDatos()


//este evento sucede al apretar click en el boton "añadir" o al apretar enter
//se crea un div donde como informacion se le añade el nombre de la pagina agregada por el usuario
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    cardPagina.innerHTML+= `<div> ${inputPagina.value} </div> `
    mostrarPaginas.appendChild(cardPagina);
    agregarPagina(inputPagina.value)    
    inputPagina.value="https://"
});



//este evento sucede al apretar click en el boton "abrir paginas"
//llama a la funcion abrir paginas
formularioPaginasAgregadas.addEventListener('submit', (e)=>{

    e.preventDefault()
    abrirPaginas()

})


//Agrega nombre de pagina a array paginas y guarda paginas en local storage
agregarPagina=(p)=>{
    paginas.push({"nombre":`${p}`})
    guardarEnLocalStorage()
}



//abre todas las paginas agregadas como favoritas
abrirPaginas=()=>{
    paginas.forEach(p=>{
        const url=p.nombre;
        window.open(`${url}`);
    })
}


//guarda las paginas en local storage
guardarEnLocalStorage=()=>{
    localStorage.setItem("paginas",JSON.stringify(paginas));
}



