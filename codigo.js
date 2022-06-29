
//Array que contendra todas las paginas
const paginas=[]

//Se obtienen los datos de input , formulario y de mostrarPaginas que es el contenedor del div de nombre d paginas agregadas
const formulario=document.getElementById("formulario");
const inputPagina=document.getElementById("inputPagina");
const mostrarPaginas=document.getElementById("mostrarPaginas");
const btnEliminar=document.getElementById("btnEliminar")

let cardPagina=document.createElement("div")
const formularioPaginasAgregadas= document.getElementById("paginasAgregadas");

const htmlPagina=(input)=>{  
   return `<div class="bordes"> 
             ${input}
             <button type="button" class="button" id="${input}"> Eliminar </button>
           </div> `
}



//retorna si existen paginas o no en localstorage
localStorageVacio=()=>{
    return localStorage.getItem("paginas")==null ? true : false;
}



//este evento sucede al apretar click en el boton "añadir" o al apretar enter
//se crea un div donde como informacion se le añade el nombre de la pagina agregada por el usuario
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    cardPagina.innerHTML+= htmlPagina(inputPagina.value)
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
    nombreDeLaPagina(p)
    actualizoDatos()
}

//funcion que solo de vuelve el nombre de la pagina.Ejemplo www.google.com retorna "google"
nombreDeLaPagina=(nombre)=>{
    contadorPunto=0;
    soloNombre=""
      for (var i = 0; i< nombre.length; i++) {
            letra=nombre.charAt(i)
            if(letra=="."){
                contadorPunto+=1;
            }
            if(contadorPunto==1 && letra!="."){
                soloNombre+=nombre.charAt(i);
            }
         }  
    return soloNombre;
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


//al hacer click en una pagina para borrarla, se setea valores a 0 y vacio. y vuelvo a 'pintar' la pagina
borrarPaginas=()=>{
    paginas.forEach((p,cant) =>{   
        document.getElementById(p.nombre).addEventListener("click",()=>{         
            paginas.splice(cant,1)   
            localStorage.setItem("paginas",JSON.stringify(paginas))
            paginas.length=0;
            cardPagina.innerHTML=""
            actualizoDatos()
        })
    
    });
}

//agrega informacion del nombre de la pagina al div creado anteriormente
agregarPaginas=()=>{
    paginas.forEach(p =>{
        cardPagina.innerHTML+= htmlPagina(p.nombre);
        mostrarPaginas.appendChild(cardPagina); 
   })
}


//funcion que se usa cada vez que se refresca la pagina
//si hay datos en localStorage los carga de nuevo en pantalla. Asi obtengo los datos que habian sido cargados anteriormente
actualizoDatos=()=>{

    if(paginas.length==0 && !localStorageVacio()){
        obtenerPaginasStorage= JSON.parse(localStorage.getItem("paginas"));
        obtenerPaginasStorage.forEach(p=>{
            paginas.push(p)
        })
              
        agregarPaginas() 
        borrarPaginas()
    }

    //Este else if funciona para q a la primera vez q se abra la extension igualemente pueba borrar los datos
    //Sin esto, borraria los datos despues de refrescar la pagina ya que entraria en el if
    else if(paginas.length>0 && !localStorageVacio()){
        borrarPaginas()
    }

   
}





actualizoDatos()
