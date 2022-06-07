btnc.addEventListener("click",function(){
    // window.location.href = 'https://oscar-1218.github.io/challenge---Ahorcado/';
    window.location.href = 'http://127.0.0.1:5500/index.html';
})
vacioYfocus();


var almacenpalabras= Array('cpu','css', 'html', 'javascript', 'python', 'java');
let comprobacion = 0;
var nuevoalmacenpalabras = Array(); //no anda
//trae las palabras desde "ingresepalabra.js"
function palabrasGuardadas(){ 
    console.log(nuevoalmacenpalabras);
}

function ejecutaAlerta(valor) {   
    var w = window.open('','','width=250,height=150')
    w.document.write(valor);
    w.focus()
    setTimeout(function() {w.close();}, 1000)
    }

document.getElementById('letraIngresada').addEventListener('input', espacioDisponible);
function espacioDisponible(){
    let valor = 8;
    let letraIngresada = document.getElementById('letraIngresada').value;
    let letrasDisp = valor - letraIngresada.length;
    document.getElementById('letrasDisponibles').innerHTML= letrasDisp+' letras disponibles';
    if(letrasDisp < 0){
        let letrasDisp = 0;
        document.getElementById('letrasDisponibles').innerHTML= letrasDisp+' letras disponibles';
        valor = ('No tienes mas espacios disponibles');
        ejecutaAlerta(valor);
    }
    if(letrasDisp == 8){
        document.getElementById('letrasDisponibles').innerHTML='Max. de 8 letras';
    }
}


function vacioYfocus(){
    document.querySelector('.input').value = '';
    document.querySelector('.input').focus();
}

    const btngye = document.querySelector('#btngye');
    btngye.addEventListener('click', function(){
    var num = num + 1;
    var input = document.querySelector('.input').value;
    vacioYfocus();
    espacioDisponible();
        if(validarInput(input) && caracteresMax(input)){
            almacenpalabras.unshift(input);
            //alert('Se guardo correctamente');
            vacioYfocus();
            // window.location.href = 'https://oscar-1218.github.io/challenge---Ahorcado/jugando.html';  //Me dirige a Jugar
            window.location.href = 'http://127.0.0.1:5500/jugando.html';
            }
        console.log(almacenpalabras + ' guardar y comenzar a jugar');
        
})


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
        valor = "Por favor, no numeros";
        ejecutaAlerta(valor);
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
        return true; //No lo puedo hacer funcionar
        }
}
if(validarInput == false){  //aun no ejerce nada
    console.log(' validarInput= false')
}

