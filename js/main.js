var contador = 0;
var bandera = false;
var letra = "";
var respuesta = "";

function pregunta(event){
    

event.preventDefault();
event.stopPropagation();
captura = event.key

var frase = ["c", "o", "c", "o", " ", "r","e", "s", "p","o","n","d","e"," ","e","s","t","a"," ","p","r","e","g","u","n","t","a"," ","p","o","r"," ","f","a","v","o","r"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "];

 
    
if(captura == "."){
    
    
    bandera = !bandera;
}
    if(captura == " "){
        
       $("#peticion").val(letra); 
    } 
    
    
    if(contador <= frase.length && bandera == true){
        letra = letra+frase[contador];
        contador = contador+1;
        
        
    if(captura != "."){
        respuesta = respuesta+event.key;
        console.log(respuesta)
        }
        

 
     $("#peticion").val(letra);
            
}
    

if(bandera != true && captura != "."){
    
    letra = letra+event.key;  
}
    
    
$("#peticion").val(letra);
}

function enviar(){
      
    var texto = $("#pregunta").val();
    console.log(texto)
    if(texto.length < 2){
        alert("Ingrese una pregunta valida")
    }
    else{
        
      $("#txt").html(respuesta);
    }
    
}


var container = document.getElementById('container');

setTimeout(function() {
    container.classList.add('cerrar');
    
    document.body.style.overflowY= "visible";// despueés de cargar le devolvemos el scroll
}, 1);

