import { Validation } from './FormsValidation.js'

class Forms {
    constructor() {
        this.forms = [];
        this.init()
    }
    init() {
        this.formsLocation();
        this.addEvent();
    }
    formsLocation() {
        const location = document.querySelectorAll('form')

        this.forms = [...location]

    }
    addEvent() {
        for (const form of this.forms) {
            const allInputs = form.querySelectorAll('input, textarea')
            const submit = form.querySelector('.btn');

            submit.addEventListener('click', (event) => {
                event.preventDefault();


                for (const input of allInputs) {
                    const valid = input.dataset.validation;
                    const text = input.value;

                    switch (valid) {
                        case 'name':
                            console.log(Validation.isValidName(text));
                            break;
                        case 'email':
                            console.log(Validation.isValidEmail(text));
                            break;
                        case 'text':
                            console.log(Validation.isValidText(text));
                            break;

                        default:
                            break;
                    }
                }
            })
        }
    }
}

export { Forms }