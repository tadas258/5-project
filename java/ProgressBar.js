class Progress {
    constructor(selector, data) {
        this.selector = selector,
            this.data = data
        this.DOM = null;
    }




    validSelector() {



        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR selektorius yra netinkamo formato!')
            return false
        }
        const DOM = document.querySelector(this.selector);

        if (!DOM) {
            console.error('ERROR selektorius neegzistuoja!');
            return false
        }
        this.DOM = DOM;

        return true


    }
    generateProgressBar(progressBar) {
        return `<div class="progress-bar">
        <div class="texts">
            <div class="label">${progressBar.label}</div>
            <div class="value">${this.formatNumber(progressBar.value)}%</div>
        </div>
        <div class="bar">
            <div class="progress" style="width: ${progressBar.value}%;">
                <div class="loading"></div>
            </div>
        </div>
    </div>`;
    }


    formatNumber(number) {
        return Math.round(number);
    }



    inputHtml() {
        let HTML = ''


        for (const progres of this.data) {

            HTML += this.generateProgressBar(progres)
        }

        if (HTML === '') {
            console.error(' ERROR HTML nerasta...!');
            return false
        }
        this.DOM.innerHTML += HTML;

    }





}


export { Progress }