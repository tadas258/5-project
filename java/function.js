function socialObjects(footer, data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const socialsOb = data[i];
        HTML += (`<a href="${socialsOb.href}" class="fa fa-${socialsOb.icon}"></a>`)

    }
    const DOM = document.querySelector(footer)
    DOM.innerHTML = HTML;
}

export { socialObjects }
