    //Reinicia el juego(Solo ejecuta cuando gana o pierde))

    function reiniciar(){ 
        palabraAdi = '';
        vidas = 5;
        letraEquivocadaG = []; 
        letrasAcertadaG = [];
        document.getElementById('vida').innerHTML='Le quedan '+ vidas +' intentos';
        invi2.classList.add('invisible');
        invi3.classList.add('invisible');
        invi4.classList.add('invisible');
        invi5.classList.add('invisible');
        invi6.classList.add('invisible'); 
        ganastediv.classList.add('invisible');
        cuadrorojo.classList.add('invisible');
        invi1.classList.remove('invisible');
        document.getElementById('letra').value = '';
        document.getElementById('letra').focus();
        iniciar();
        
    }