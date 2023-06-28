let S = document.querySelector('.S')




class Validator {
    constructor(config) {
        this.elementsconfig = config
        this.errors = {}

        this.generateErrorsObject()
        this.inputListener()
         } 
        
        generateErrorsObject() {
            for(let field in this.elementconfig) {
                this.errors[field] = []
            }
        }

        inputListener() {
            let inputSelector = this.elementsconfig

            for(let field in inputSelector) {
                let selector = `input[name="${field}"]`
                let el = document.querySelector(selector)

                el.addEventListener('input', this.validate.bind(this))
            }
        }

        validate(e) {
            let elfields = this.elementsconfig
            let field = e.target
            let fieldName = field.getAttribute('name')
            let fieldValue = field.value
            
           
            

            this.errors[fieldName] = []

            if(elfields[fieldName].required) {
                if(fieldValue === '') {
                    this.errors[fieldName].push('The field is empty')
                    
                    
                }
            }

            if(elfields[fieldName].email) {
                if(!this.validateEmail(fieldValue)) {
                    this.errors[fieldName].push('Invalid email address')
                    
                    
                }
            }

            if(fieldValue.length < elfields[fieldName].minlength) {
                this.errors[fieldName].push(`The field must have a minimum of ${elfields[fieldName].minlength} characters`)
                
                
            }
            
            if(fieldValue.length > elfields[fieldName].maxlength) {
                this.errors[fieldName].push(`The field must have a maximum of ${elfields[fieldName].maxlength} characters`)
                
                
            }

           

            

            /*if(zipValue.length < elfields[zipName].minlength) {
                
                
                this.errors[zipName].push(`Polje mora imati minimalno ${elfields[zipName].minlength} karaktera`)
    
                }*/
            
                
            
               

            this.populateErrors(this.errors);
            
            


        }

        populateErrors(errors) {
            for(let elem of document.querySelectorAll('.kratos')) {

                elem.remove()
                
                    
                
                

                
                
                
                

                
                
            }

            



            for(let key of Object.keys(errors)) {
               
                
                let paretElement = document.querySelector(`input[name="${key}"]`).parentElement
                
                
                
                 

                
                //WW.appendChild(paretElement)
                let errorsElement = document.createElement('ul')
                errorsElement.className = 'kratos'
                paretElement.appendChild(errorsElement)
                
                //clWW.appendChild(errorsElement)

                errors[key].forEach(error => {
                    let li = document.createElement('li')
                    li.classList = 'atrur'
                    li.innerText = error

                    errorsElement.appendChild(li)

                   /* S.setAttribute('disabled', 'true')
                    S.setAttribute('class', 'S')
                    S.style.cursor = 'no-drop'*/
                        
                        
                    
                })
                    
                
            }

            /*let li1 = document.querySelector('.atrurr')
            let li2 = document.querySelector('.atrur')


        if(li1 || li2) {
            S.setAttribute('disabled', 'true')
            S.setAttribute('class', 'S')
            S.style.cursor = 'no-drop'

            if(li1.remove() && li2.remove()) {
                S.removeAttribute('disabled', 'true')
                S.setAttribute('class', 'S hover')
                S.style.cursor = 'pointer'
            }
        }*/
        
        
        }

        validateEmail(email) {
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return true
            }
        
            return false
      
        }
        
    }