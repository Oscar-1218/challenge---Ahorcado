//Validacion de letras ingresadas

function validarletras (letra){
        
    let simbolos = /[°|!"#$%&/()=?'¡]/g;
    let mayus = /[A-Z]/g;
    let acentos = /[óáéúí]/g;
    let numero = /[0123456789]/g;    
    let array3 = letraEquivocadaG.concat(letrasAcertadaG);
    console.log('letrasRepetidas=> array3= '+ array3)
    for(var i = 0; i < array3.length; i++){
        if(letra == array3[i]){
            alert('Caracter repetido');  
            return false;
        }
    }
    if(letra.match(simbolos)){
        alert('Por favor, no simbolos');
        return false;
    }
    if(letra.match(numero)){
        alert("Por favor, no numeros"); 
        return false;
    }
    if(letra.match(mayus)){
        alert("Por favor, no mayusculas");
        return false;
    }
    if (letra.match(acentos)){
        alert("Por favor, sin acentos"); 
        return false;
    }
    else{
        return true; 
    }
}