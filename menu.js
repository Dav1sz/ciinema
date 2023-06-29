
var menuItem = document.querySelectorAll('.item-menu')

function selectLink() {
    menuItem.forEach((item) =>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

//Expandir o menu//

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir')
})




var btnTrailer = document.querySelector('#show-or-hide');
var containerTrailer = document.querySelector('.container-trailer');

btnTrailer.addEventListener('click', function () {

    if (containerTrailer.style.display === 'block') {
        containerTrailer.style.display = 'none';
    } else {
        containerTrailer.style.display = 'block';
    }
})



// ---------------------------BOTAOSCROLL--------------------------



const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})







