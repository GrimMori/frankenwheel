let stab = document.querySelector('.stab');
let sound1 = new Audio ('sonidos/sound-stab.mp3');
let electrocute= document.querySelector('.electrocute');
let sound2 = new Audio ('sonidos/sound-electrocute.mp3');
let poison = document.querySelector('.poison');
let sound3 = new Audio ('sonidos/sound-machine-gun.mp3');




    stab.addEventListener('click', () =>{
        sound1.play();
        document.getElementById('prueba1').style.display='block';
        document.getElementById('prueba').style.display='none';
    setTimeout(function () {
        window.location.href = "juego.html"}, 5000);
    });


    
    electrocute.addEventListener('click', () =>{
        sound2.play();
        document.getElementById('prueba2').style.display='block';
        document.getElementById('prueba').style.display='none';
    setTimeout(function () {
        window.location.href = "juego.html"}, 5000);
    });

    
    poison.addEventListener('click', () =>{
        sound3.play()
        document.getElementById('prueba3').style.display='block';
        document.getElementById('prueba').style.display='none';
    setTimeout(function () {
        window.location.href = "juego.html"}, 4000);
    });
        
        
        
        
        
        
        
        /*let sound1 = new Audio ('../sonidos/sound-stab.mp3');
        
        btnReproducir1.addEventListener('click', () =>{
            sound1.play();
        })
        
        let sound2 = new Audio ('../sonidos/sound-electrocute.mp3');
        
        btnReproducir2.addEventListener('click', () =>{
            sound2.play();
        })
        
        let sound3 = new Audio ('../sonidos/sound-poison.mp3');
        
        btnReproducir3.addEventListener('click', () =>{
            sound3.play();
        })*/