
import { socialObjectList } from './socialObjectList.js'




function socialFunction(selector, data) {

    if (typeof selector !== 'string' ||
        selector === '') {
        console.error('ERROR...Invalid location.')
        return false;
    }
    if (!Array.isArray(data) ||
        data.length === 0) {
        console.error('ERROR...Invalid data location.')
        return false;
    }


    const DOM = document.querySelector(selector)

    if (!DOM) {
        console.error('ERROR... Your HTML location is compromised.')
        return false;
    }

    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const socialObjects = data[i];

        if (typeof socialObjects !== 'object' ||
            !Array.isArray(data) ||
            !socialObjects.href ||
            typeof socialObjects.href !== 'string' ||
            !socialObjects.icon ||
            typeof socialObjects.icon !== 'string' ||
            !socialObjectList.includes(socialObjects.icon)) {
            console.warn('ERROR...Your social is not on the list')
            continue;
        }

        HTML += (`<a href="${socialObjects.href}" class="fa fa-${socialObjects.icon}"></a>`)
        if (HTML === '') {
            console.error('ERROR...Your function is invalid.')
            return false;
        }
    }
    DOM.innerHTML = HTML;
}

export { socialFunction }







// (`<a href="${socialsOb.href}" class="fa fa-${socialsOb.icon}"></a>`)