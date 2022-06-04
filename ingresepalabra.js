btnc.addEventListener("click",function(){
    window.location.href = 'https://oscar-1218.github.io/challenge---Ahorcado/';
})

var almacenpalabras= ['cpu','css', 'html', 'javascript', 'python', 'java'];
vacioYfocus();


//transporta las palabras guardadas a "Jugando.js"
function palabrasGuardadas(){
    
}


function vacioYfocus(){
    document.querySelector('.input').value = '';
    document.querySelector('.input').focus();
}

    const btngye =document.querySelector('#btngye');
    btngye.addEventListener('click', function(){
    var num = num + 1;
    var input = document.querySelector('.input').value;

    if(validarInput(input) && caracteresMax(input)){
        nuevoalmacenpalabras = almacenpalabras.unshift(input);
        console.log(nuevoalmacenpalabras);
        alert('Se guardo correctamente');
        vacioYfocus();
    }
    console.log(almacenpalabras+ ' guardar y comenzar a jugar');
    palabrasGuardadas();
    window.location.href = 'https://oscar-1218.github.io/challenge---Ahorcado/jugando.html';  //Me dirige a Jugar
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
let comprobacion = 0;

function validarInput (input){
    let minus = /[a-z]/g;
    let acentos = /[óáéúí]/g;
    let vacio = '';
    if(input == vacio){
        comprobacion += 1;
        if(comprobacion >3){
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

