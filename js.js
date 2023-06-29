var containerT = document.querySelector('.containerT');
var btnT = document.querySelector('#show-or-hide');
var back = document.querySelector('.aranha');

btnT.addEventListener('click', function() {

    if(containerT.style.display === 'block' ){
        containerT.style.display = 'none';
    } else {
        containerT.style.display = 'block';
    }

    
    
    if(back.style.display === 'none') {
        back.style.display = 'block';
    } else {
        back.style.display = 'none';
    }
})






var textoEs = document.querySelector('.textoEs');
var btnEs = document.querySelector('#show-or-datails');

btnEs.addEventListener('click', function() {

    if(textoEs.style.display === 'block'){
        textoEs.style.display = 'none';
    } else {
        textoEs.style.display = 'block';
    }
})