class Progress {
    constructor(selector, data) {
        this.selector = selector,
            this.data = data

    }


    validSelector() {



        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR selektorius yra netinkamo formato!')
            return false
        }
        if (!Array.isArray(this.data) ||
            this.data === 0) {
            console.error('ERROR jusu duomenys yrs neteisingi!');
            return false
        }
        const DOM = document.querySelector(this.selector);

        if (!DOM) {
            console.error('ERROR selektorius neegzistuoja!');
            return false
        }

        return true


    }

    inputHtml() {
        let HTML = 'Progress Barrrrr'
        const DOM = document.querySelector(this.selector);
        DOM.innerHTML += HTML;
        if (HTML === '') {
            console.error(' ERROR HTML nerasta...!');
            return false
        }

    }



}


export { Progress }