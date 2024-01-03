let menuItem = document.querySelectorAll('.item-menu')

function selectLink () {
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
    )

    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click', selectLink)
)

// EXPANDIR O MENU

let menuLateral = document.querySelector('.menu-lateral')
let btnExp = document.querySelector('#btn-exp')

btnExp.addEventListener('click', function() {
    menuLateral.classList.toggle('expandir')
})