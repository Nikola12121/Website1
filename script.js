function myFunc() {
    let tooglemenu = document.querySelector('.tooglemenu')
    let black = document.querySelector('.black')

    black.style.display = 'block'
}



function CloseBlack() {
    let black = document.querySelector('.black')

    black.style.display = 'none'
}




const animationtext3 = () => {

let sectionForAnimation = document.querySelector('#section3 .h31')
let sectionP = sectionForAnimation.getBoundingClientRect().top
let screenP = window.innerHeight / 1.3

let textTag = document.querySelector('#section3 h1.h31')
let text = textTag.textContent


let splitedtext = text.split('')

textTag.innerHTML = ''

for(let i = 0; i < splitedtext.length; i++) {

    if(splitedtext[i] == " ") {
        splitedtext[i] = "&nbsp;"
    }
    textTag.innerHTML += `<span>${splitedtext[i]}</span>`
}

if(sectionP < screenP) {
let k = 0

let interval = setInterval(() => {
    let spans = textTag.querySelectorAll('span')
    let singleSpan = spans[k]

    
    singleSpan.className = 'fademove'
    k++

    if(k > 1) {
        window.onscroll = () => {}
    }

    if(k === spans.length) {
        clearInterval(interval)
        animationp333()
        
    }
}, 50)}
}


window.onscroll = () => {
    animationtext3()
    
}


const animationp333 = () => {

    let p333 = document.querySelector('.p333')

    p333.className = 'ap3'
}




/*const animationp333 = () => {

    let p333 = document.querySelector('.p333')

    p333.className = 'ap3'}

let pricebutton = document.querySelector('.fac')

pricebutton.addEventListener('click', () => {
    const animationtext3 = () => {

        let sectionForAnimation = document.querySelector('#section3 .h31')
        let sectionP = sectionForAnimation.getBoundingClientRect().top
        let screenP = window.innerHeight / 1.3
        
        let textTag = document.querySelector('#section3 h1.h31')
        let text = textTag.textContent
        
        
        let splitedtext = text.split('')
        
        textTag.innerHTML = ''
        
        for(let i = 0; i < splitedtext.length; i++) {
        
            if(splitedtext[i] == " ") {
                splitedtext[i] = "&nbsp;"
            }
            textTag.innerHTML += `<span>${splitedtext[i]}</span>`
        }
        
        
        let k = 0
        
        let interval = setInterval(() => {
            let spans = textTag.querySelectorAll('span')
            let singleSpan = spans[k]
        
            
            singleSpan.className = 'fademove'
            k++
        
            
        
            if(k === spans.length) {
                clearInterval(interval)
                animationp333()
                
            }
        }, 50)}

        animationtext3()
        }
)*/

let sectionForAnimation = document.querySelector('#section3 .h31')
let sectionP = sectionForAnimation.getBoundingClientRect().top
let screenP = window.innerHeight




let config = {

    'email': {
        required: true,
        email: true,
        minlength: 5,
        maxlength: 50
    },


}


let config2 = {
    'Message': {
        required: true,
    }
}


let validator = new Validator(config)

let validator2 = new Validator2(config2)