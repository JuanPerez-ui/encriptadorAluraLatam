const mensajeUsuario= document.querySelector(".main__cuadroDeTexto");
const mensajeSalida= document.querySelector(".main__cuadroResultado__resultado");
let mensajeSalidaTitulo= document.querySelector(".main__cuadroResultado__titulo");
let mensajeSalidaParrafo= document.querySelector(".main__cuadroResultado__parrafo");
const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
let botonCopiar= document.querySelector(".main__cuadroResultado__botonCopiar");
let   mensajeAceptado;

// El patron que indica que solo letras minúsculas
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat" 

function    validarTexto(mensaje){

    const pattern = new RegExp('^[áéíóúñ]', 'i');
    mensaje=mensaje.replaceAll(" ","")

        if(pattern.test(mensaje)){
            return true;
         }else{
            return false
         }

}

function btnEncriptar(){

    if(validarTexto(mensajeUsuario.value)||(mensajeUsuario.value=="")){
        mostrarElementos();
        mensajeSalida.value="";
        alert("No hay mensaje para encriptar o se ha ingresado un caracter especial."+"\n"+"Intentelo nuevamente");
    }else
    {
    mensajeSalida.value = encriptar(mensajeUsuario.value);
    mensajeUsuario.value="";
    ocultarElementos();

    if (screen.width < 769){
            
        if (screen.width < 376){

            mensajeSalida.style.height=mensajeSalida.style.height+`350px`;
        }else{

            mensajeSalida.style.height=mensajeSalida.style.height+`300px`;    
        }

    }
    }
}

function mostrarElementos(){
    if (screen.width>=769){
        mensajeSalida.style.backgroundImage ='url("/assets/Muñeco.png")';
    }

    mensajeSalidaTitulo.style.visibility = 'visible';
    mensajeSalidaParrafo.style.visibility = 'visible';
    botonCopiar.style.visibility='hidden';
    mensajeSalida.length
}

function ocultarElementos(){
    mensajeSalida.style.backgroundImage ="none";
    mensajeSalidaTitulo.style.visibility = 'hidden';
    mensajeSalidaParrafo.style.visibility = 'hidden';
    botonCopiar.style.visibility='visible';
}

function encriptar(stringEncriptar){
    stringEncriptar =  stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length ;i++ ){
        if (stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar=stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }
    }

    return stringEncriptar;
}


function btnDesencriptar(){    

    if(validarTexto(mensajeUsuario.value)||(mensajeUsuario.value=="")){
        mostrarElementos();
        mensajeSalida.value="";
        alert("No hay mensaje para desencriptar o se ha ingresado un caracter especial."+"\n"+"Intentelo nuevamente");
    }else
    {
        mensajeSalida.value = desencriptar(mensajeUsuario.value);
        mensajeUsuario.value="";
        ocultarElementos();

        if (screen.width < 769){
            
            if (screen.width < 376){

                mensajeSalida.style.height=mensajeSalida.style.height+`350px`;
            }else{

                mensajeSalida.style.height=mensajeSalida.style.height+`300px`;    
            }

        }
    }

}


function desencriptar(stringDesencriptar){

    stringDesencriptar =  stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length ;i++ ){
        if (stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar=stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar;
}

function btnCopiar(){
    navigator.clipboard.writeText(mensajeSalida.value);
    mensajeSalida.value ="";
    alert("texto copiado");
}

//console.log(matrizCodigo);
