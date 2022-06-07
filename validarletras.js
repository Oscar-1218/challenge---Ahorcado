//Validacion de letras ingresadas
function ejecutaAlerta(valor) {   
    var w = window.open('','','width=250,height=150')
    w.document.write(valor);
    w.focus()
    setTimeout(function() {w.close();}, 1000)
    }
    
    function validarletras (letra){
        
    let simbolos = /[°|!"#$%&/()=?'¡]/g;
    let mayus = /[A-Z]/g;
    let acentos = /[óáéúí]/g;
    let numero = /[0123456789]/g;    
    let array3 = letraEquivocadaG.concat(letrasAcertadaG);
    console.log('letrasRepetidas=> array3= '+ array3)
    for(var i = 0; i < array3.length; i++){
        if(letra == array3[i]){
            valor = 'Caracter repetido';
            ejecutaAlerta(valor);       
            return false;
        }
    }
    if(letra.match(simbolos)){
        valor = 'Por favor, no simbolos';
        ejecutaAlerta(valor);
        return false;
    }
    if(letra.match(numero)){
        valor = "Por favor, no numeros";
        ejecutaAlerta(valor); 
        return false;
    }
    if(letra.match(mayus)){
        valor = "Por favor, no mayusculas";
        ejecutaAlerta(valor); 
        return false;
    }
    if (letra.match(acentos)){
        valor = "Por favor, sin acentos";
        ejecutaAlerta(valor); 
        return false;
    }
    else{
        return true; 
    }
}