var contador = 0;
var bandera = false;
var letra = "";
var respuesta = "";

function pregunta(event){
    

event.preventDefault();
event.stopPropagation();
captura = event.key

var frase = ["P", "e", "d", "r", "o", " ", "r","e", "s", "p","o","n","d","e"," ","e","s","t","a"," ","p","r","e","g","u","n","t","a"," ","p","o","r"," ","f","a","v","o","r"];



    
    if(captura == "."){
    
    bandera = !bandera;
}
}