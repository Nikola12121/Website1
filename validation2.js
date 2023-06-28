let S2 = document.querySelector('.S')

class Validator2{
    constructor(config2) {
        this.elementsconfig2 = config2
        this.errors = {}

        this.geneerateErrorsObject()
        this.inputtListener()
    }


    geneerateErrorsObject() {
        for(let field in this.elementconfig2) {
            this.errors[field] = []
        }
    }

    inputtListener() {
        let inputSelector = this.elementsconfig2

        for(let field in inputSelector) {
            let selector = `textarea[name="${field}"]`
            let el = document.querySelector(selector)

            el.addEventListener('input', this.validatee.bind(this))
        }
    }

    validatee(e) {
        let elfieldss = this.elementsconfig2
        let fieldw = e.target
        let fieldNamee = fieldw.getAttribute('name')
        let fieldValuee = fieldw.value
        
       
        

        this.errors[fieldNamee] = []

        if(elfieldss[fieldNamee].required) {
            if(fieldValuee === '') {
                this.errors[fieldNamee].push('The field is empty')
                
                
            }
        }

        this.populateErrorss(this.errors);

    }


    populateErrorss(errors) {
        for(let elem of document.querySelectorAll('.kratoss')) {
            elem.remove()
            
        }

        

        for(let key of Object.keys(errors)) {
           
            
            let paretElement = document.querySelector(`textarea[name="${key}"]`).parentElement
            
            
            
             

            
            //WW.appendChild(paretElement)
            let errorsElement = document.createElement('ul')
            errorsElement.className = 'kratoss'
            paretElement.appendChild(errorsElement)
            
            //clWW.appendChild(errorsElement)

            errors[key].forEach(error => {
                let li = document.createElement('li')
                li.classList = 'atrurr'
                li.innerText = error

                errorsElement.appendChild(li)

                /*S2.setAttribute('disabled', 'true')
                S2.setAttribute('class', 'S')
                S2.style.cursor = 'no-drop'*/
                  
                
                
            })
                
            
        }

        

        


        /*if(er) {
            S2.setAttribute('disabled', 'true')
            S2.setAttribute('class', 'S')
            S2.style.cursor = 'no-drop'

            if(li1.remove() && li2.remove()) {
                S2.removeAttribute('disabled', 'true')
                S2.setAttribute('class', 'S hover')
                S2.style.cursor = 'pointer'
            }
        }*/
        
        
    }

}



