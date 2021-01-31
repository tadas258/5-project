
function clock(selector, deadline) {
    const DOM = document.querySelector(selector)

    let allValuesDOM = null;
    let numbers = calcTime(deadline);
    const strings = ['Days', 'Hours', 'Minutes', 'Seconds']

    let HTML = '';

    for (let i = 0; i < 4; i++) {
        HTML += `<div class="time">
            <div class="hours">${numberFormat(numbers[i])}</div>
            <div class="words">${strings[i]}</div>
        </div>`
    }
    DOM.innerHTML = HTML;
    allValuesDOM = document.querySelectorAll(`${selector} .hours`);


    setInterval(function () {
        numbers = calcTime(deadline);
        for (let i = 0; i < 4; i++) {
            allValuesDOM[i].innerText = numberFormat(numbers[i]);
        }
    }, 1000);
}


function numberFormat(data) {
    if (data < 10) {
        return '0' + data
    }
    return data
}
function calcTime(deadline) {
    const date = new Date();
    const now = Date.now();
    let year = date.getFullYear();
    let fullDeadline = `${year}-${deadline}`;
    let fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime();

    if (fullDeadlineInMiliseconds < now) {
        year++;
        fullDeadline = `${year}-${deadline}`;
        fullDeadlineInMiliseconds = (new Date(fullDeadline)).getTime();
    }

    const diff = fullDeadlineInMiliseconds - now;
    const seconds = Math.round(diff / 1000);

    const days = Math.floor(seconds / 60 / 60 / 24);
    let unusedSeconds = seconds - days * 60 * 60 * 24;

    const hours = Math.floor(unusedSeconds / 60 / 60);
    unusedSeconds -= hours * 60 * 60;

    const minutes = Math.floor(unusedSeconds / 60);
    unusedSeconds -= minutes * 60;

    return [days, hours, minutes, unusedSeconds];
}

export { clock }

console.log(Date.now);



































// function clock(selector) {
//     const DOM = document.querySelector(selector);

//     const numbers = [432, 9, 37, 39];
//     const strings = ['Days', 'Hours', 'Minutes', 'Seconds']
//     let HTML = '';

//     for (let i = 0; i < 4; i++) {
//         HTML += `<div class="time">
//             <div class="hours">${numberFormat(numbers[i])}</div>
//             <div class="words">${strings[i]}</div>
//         </div> `;
//     }
//     DOM.innerHTML = HTML
// }

// function numberFormat(number) {
//     if (number < 10) {
//         return '0' + number;
//     }
//     return number;
// }

// export { clock }
