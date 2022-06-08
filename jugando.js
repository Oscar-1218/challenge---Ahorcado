btnd.addEventListener("click",function(){
    window.location.href = 'https://oscar-1218.github.io/challenge---Ahorcado/';
    //window.location.href = 'http://127.0.0.1:5500/index.html';
})

btnnj.addEventListener("click", function(){
    reiniciar()
});

let palabras = Array('cpu','css', 'html', 'javascript', 'python', 'java');      
let palabraOc = ''; //palabra oculta
let palabraAdi =''; // palabra que va adivinando
let letraEquivocada = '';
let letrasAcertada ='';
let vidas = 5;
let letraEquivocadaG = []; 
let letrasAcertadaG = [];
var invi1 = document.querySelector('#invi1');
var invi2 = document.querySelector('#invi2');
var invi3 = document.querySelector('#invi3');
var invi4 = document.querySelector('#invi4');
var invi5 = document.querySelector('#invi5');
var invi6 = document.querySelector('#invi6');
var ganastediv = document.getElementById('ganastediv');
var cuadrorojo = document.querySelector('#cuadrorojo');
let num = 0;



// Elige una palabra y pone los - - - - correspondientes
function iniciar(){
    if(palabraGuardada.length <= 1){
    traerPalabras();
    } 
    palabraOc = palabraGuardada[Math.floor(Math.random()*palabraGuardada.length)]; //aun no
    console.log('palabraOc= '+ palabraOc);
    for(let i = 0; i < palabraOc.length; i++){    
        palabraAdi +='_ '; 
    }
    document.getElementById('frase').innerHTML = palabraAdi; 
};

let palabra = '';
let palabraGuardada = Array();

function traerPalabras(){
    if(localStorage.length == 0){
        for(var i = 0; i < palabras.length; i++){
            let palabra = palabras[i];
            palabraGuardada.unshift(palabra);
            localStorage.setItem([i],palabra);
            }
        }else{
            for(var i = 0; i < localStorage.length; i++){
                let palabra = localStorage.getItem(localStorage.key([i]));
                palabraGuardada.unshift(palabra);
            }
        }
    return palabraGuardada;
}

//ejecuta solo al comenzar(crea las palabras)
iniciar(); 

invi1.classList.remove('invisible');
document.getElementById('letra').addEventListener('input', comprobar);  
document.getElementById('letra').focus();



//Comprueba y da devolucion de la letra ingresada
function comprobar(){  
    let letra = document.getElementById('letra').value;
     
    if(validarletras(letra)){ 
        let nuevo = ''; // guardara la comprobacion, de la palabra oculta con la que estoy intentando adivinar
    for(let i = 0; i < palabraOc.length; i++){
        if(letra == palabraOc[i]){
            nuevo = nuevo + letra + ' '; //Si la persona atinó la letra, muetra la letra mas espacio
            letrasAcertada = letra; //Asigna a LetraAcertada lo que voy a comprobar No repetir
            letrasAcertadaG.unshift(letrasAcertada); //Añado en array
            console.log('comprobar> letrasAcertadaG= '+letrasAcertadaG);
        }else{
            nuevo = nuevo + palabraAdi[i*2] + ' '; //No le atinó la letra, muestra _ + "espacio"
            letraEquivocada = letra;       //Guarda la letra en LetraEquivocada
        };    
    }
    
    if(nuevo == palabraAdi){
        vidas--;
        letraEquivocadaG.unshift(letraEquivocada);
        cuadrorojo.classList.remove('invisible'); 
        document.querySelector('#letraInco').value = letraEquivocadaG ; 
        console.log('letraEquivocadaG= '+letraEquivocadaG); 
        if(vidas > 1){
        document.getElementById('vida').innerHTML='Le quedan '+ vidas +' intentos';
        }
    }
    palabraAdi = nuevo;
    document.getElementById('frase').innerHTML = palabraAdi; //imprime en Frase (letras o - - ) segun coresponda
    
    mostrarImagenes();
    ganaOpierde(); 
    }
    vacioYenfocado();
}

function ganaOpierde(){
    if(vidas == 0 ){
        invi5.classList.add('invisible');
        invi6.classList.remove('invisible');
        document.getElementById('vida').innerHTML='Perdiste :( ';
        setTimeout(delay, 800);
        function delay(){
            alert('Perdiste. La palabra era '+palabraOc);
            reiniciar();
        }    
    }
    
    if(palabraAdi.search('_') == -1){
        mostrarYouWin();
        setTimeout(delay, 2900);
        function delay(){
            reiniciar();
        }
    }
}


function mostrarYouWin(){   
    invi1.classList.add('invisible');
    invi2.classList.add('invisible');
    invi3.classList.add('invisible');
    invi4.classList.add('invisible');
    invi5.classList.add('invisible');
    invi6.classList.add('invisible');
    ganastediv.classList.remove('invisible');
}
function vacioYenfocado(){
    document.getElementById('letra').value = '';
    document.getElementById('letra').focus();
} 
    




