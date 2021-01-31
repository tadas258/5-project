import { listOfSocialsIcons } from './socialObjectList.js'

function socials(selector, data) {
    const DOM = document.querySelector(selector);

    if (typeof selector !== 'string' ||
        selector === '') {
        console.error('ERROR...Your selector is incorrect!')
        return false;
    }
    if (!Array.isArray(data) ||
        data.length === 0) {
        console.error('ERROR...Your data is incorrect!')
        return false
    }

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const dataLength = data[i];

        if (typeof dataLength.icon !== 'string' ||
            !dataLength.icon ||
            typeof dataLength.href !== 'string' ||
            !dataLength.href ||
            !listOfSocialsIcons.includes(dataLength.icon)) {
            console.warn('Warning!!! Your icon name is incorrect!')
            continue
        }

        HTML += (`<a href="${dataLength.href}" class="fa fa-${dataLength.icon}"></a>`)
        if (HTML === '') {
            console.error('ERROR...Your function is incomplete!')
            return false
        }
    }
    DOM.innerHTML = HTML;
}

export { socials };



// (`<a href="${socialsOb.href}" class="fa fa-${socialsOb.icon}"></a>`)