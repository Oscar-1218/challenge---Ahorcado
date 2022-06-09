btnc.addEventListener("click",function(){
    window.location.href = 'https://oscar-1218.github.io/challenge---Ahorcado/jugando.html';  
    //window.location.href = 'http://127.0.0.1:5500/jugando.html';
});

var palabraRecompuesta = Array();
var almacenpalabras= Array('HTTP','BOOTSTRAP','DEVELOPER','PROGRAMA');
let comprobacion = 0;
let palabra = '';
let newAlmacen = almacenpalabras;

vacioYfocus();

function guardarClaveValor(){
    for(var i = 0; i < almacenpalabras.length; i++){
        let palabra = almacenpalabras[i];
        localStorage.setItem([i],palabra)
    }
}

    //Guarda las palabras
    const btngye = document.querySelector('#btngye');
    btngye.addEventListener('click', function(){
        var num = num + 1;
        var input = document.querySelector('.input').value;
        vacioYfocus();
        espacioDisponible();
        if(validarInput(input) && caracteresMax(input)){
            almacenpalabras.unshift(input);
            newAlmacen = almacenpalabras;
            guardarClaveValor();
            alert('Se guardo correctamente');
            vacioYfocus();
        } 
    })

document.getElementById('letraIngresada').addEventListener('input', espacioDisponible);
function espacioDisponible(){
    let valor = 8;
    let letraIngresada = document.getElementById('letraIngresada').value;
    let letrasDisp = valor - letraIngresada.length;
    document.getElementById('letrasDisponibles').innerHTML= letrasDisp+' letras disponibles';
    if(letrasDisp < 0){
        let letrasDisp = 0;
        document.getElementById('letrasDisponibles').innerHTML= letrasDisp+' letras disponibles';
        alert('No tienes mas espacios disponibles');
        
    }
    if(letrasDisp == 8){
        document.getElementById('letrasDisponibles').innerHTML='Max. de 8 letras';
    }
}


function vacioYfocus(){
    document.querySelector('.input').value = '';
    document.querySelector('.input').focus();
}
    

function caracteresMax(input){
    if(input.length > 8){
        alert('Mas de 8 letras No!');
        vacioYfocus();
        return false;
    }else{
        return true;
    }
}

function validarInput (input){
    let numero = /[0123456789]/g; 
    let simbolos = /[°|!"#$%&/()=?'¡]/g;
    let minus = /[a-z]/g;
    let acentos = /[óáéúí]/g;
    let vacio = '';
    if(input.match(simbolos)){
        alert('Por favor, no simbolos');
        vacioYfocus();
        return false;
    } 
    if(input.match(numero)){
        alert("Por favor, no numeros");
        vacioYfocus(); 
        return false;
    }
    if(input == vacio){
        comprobacion += 1;
        if(comprobacion >2){
            comprobacion = 0;
            alert('Debe ingresar una palabra');
        } 
        return false;
    }
    if(input.match(minus)){
        alert("Por favor, no minusculas");
        vacioYfocus();
        return false;
        }
    if (input.match(acentos)){
        alert("Por favor, sin acentos");
        vacioYfocus();
        return false;
        }
    else{
        return true;
        }
}


