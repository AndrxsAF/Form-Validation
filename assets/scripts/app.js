const card = document.querySelector('#number')
const cvc = document.querySelector('#cvc')
const amount = document.querySelector('#amount')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const city = document.querySelector('#city')
const state = document.querySelector('#state')
const postal = document.querySelector('#postal')
const message = document.querySelector('#message')
let issuer = document.getElementsByName('issuer');
const enviar = document.querySelector('#enviar')
const reset = document.querySelector('#reset')
const alert = document.querySelector('#alert')

let chequeador = false
let issuer_value
let arr = []
const chequeo = event => {
    event.preventDefault()
    arr.push(card, cvc, amount, firstName, lastName, city, state, postal, message)
    arr.map(index => {
        alert.classList.add("d-none")
        if(index.value == ''){
            index.classList.add("bg-custom")
            alert.classList.remove("d-none") 
        } else {
            index.classList.remove("bg-custom")
        }
    })
    for (i in issuer) {
        if (issuer[i].checked){
            chequeador = true
            issuer_value = i
        }
    }
    if (!chequeador){
        alert.classList.remove("d-none") 
    }
    arr = []
}

const reiniciar = event => {
    event.preventDefault()
    alert.classList.add("d-none")
    arr.push(card, cvc, amount, firstName, lastName, city, state, postal, message)
    arr.map(index => {
        index.classList.remove("bg-custom")
        index.value = ''
    })
    for (i in issuer) {
        if (issuer[i].checked){
            issuer[i].checked = false
        }
    }
    arr = []
}

enviar.addEventListener("click", chequeo)
reset.addEventListener("click", reiniciar)