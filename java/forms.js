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
            const inputs = form.querySelectorAll('input');
            const textAreas = form.querySelectorAll('textarea');
            const allInputs = [...inputs, ...textAreas];
            const submit = form.querySelector('.btn');

            submit.addEventListener('click', (event) => {
                event.preventDefault();

                for (const input of allInputs) {
                    console.log(input.value);
                }
            })
        }
    }
}

export { Forms }