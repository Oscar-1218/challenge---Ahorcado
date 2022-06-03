function mostrarImagenes(){
    if(vidas == 4){
        invi1.classList.add('invisible');
        invi2.classList.remove('invisible');
        console.log('vidas == 4');
    }
    if(vidas == 3){
    
        invi2.classList.add('invisible');
        invi3.classList.remove('invisible');
    }
    if(vidas == 2){
        invi3.classList.add('invisible');
        invi4.classList.remove('invisible');
        console.log('vidas == 2');
    }
    if(vidas == 1){
        invi4.classList.add('invisible');
        invi5.classList.remove('invisible');
        console.log('vidas == 1');
        document.getElementById('vida').innerHTML='Le queda '+ vidas +' intento';
    }
}