// const card = document.querySelector('#number')
// const cvc = document.querySelector('#cvc')
// const amount = document.querySelector('#amount')
// const firstName = document.querySelector('#firstName')
// const lastName = document.querySelector('#lastName')
// const city = document.querySelector('#city')
// const state = document.querySelector('#state')
// const postal = document.querySelector('#postal')
// const message = document.querySelector('#message')
let issuer = document.getElementsByName('issuer');
const bottonSend = document.querySelector('#bottonSend')
const bottonReset = document.querySelector('#bottonReset')
const alert = document.querySelector('#alert')
const mainForm = document.querySelector('#mainForm')

let checked = false
let issuer_value

const checker = event => {
    event.preventDefault()
    for (let i = 0; i < 13; i++){
        alert.classList.add("d-none")
        if(mainForm.elements[i].value == ''){
            mainForm.elements[i].classList.add("bg-custom")
            alert.classList.remove("d-none") 
        } else {
            mainForm.elements[i].classList.remove("bg-custom")
        }
    }

    for (i in issuer) {
        if (issuer[i].checked){
            checked = true
            issuer_value = i
        }
    }
    if (!checked){
        alert.classList.remove("d-none") 
    }
}

const reset = event => {
    event.preventDefault()
    alert.classList.add("d-none")
    for (let i = 0; i < 13; i++){
        mainForm.elements[i].classList.remove("bg-custom")
        mainForm.elements[i].value = ''
    }
    for (i in issuer) {
        if (issuer[i].checked){
            issuer[i].checked = false
        }
    }
}

bottonSend.addEventListener("click", checker)
bottonReset.addEventListener("click", reset)