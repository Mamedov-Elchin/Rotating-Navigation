const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const nav = document.querySelector('nav')

open.addEventListener('click', function () {
    container.classList.add('show-nav')
    nav.classList.add('get')
    
})
close.addEventListener('click', function () {
    container.classList.remove('show-nav')
    nav.classList.remove('get')
})

