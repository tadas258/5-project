

function clock(selector) {
    const DOM = document.querySelector(selector);

    const numbers = [432, 9, 37, 39];
    const strings = ['Days', 'Hours', 'Minutes', 'Seconds']
    let HTML = '';

    for (let i = 0; i < 4; i++) {
        HTML += `<div class="time">
            <div class="hours">${numberFormat(numbers[i])}</div>
            <div class="words">${strings[i]}</div>
        </div> `;
    }
    DOM.innerHTML = HTML
}

function numberFormat(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

export { clock }
