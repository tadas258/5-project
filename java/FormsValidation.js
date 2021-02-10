class Validation {

    static isValidName(name) {
        if (!Validation.isNotEmpty(name)) {
            return 'Name can not be empty!'
        }
        if (!Validation.firstUppercase(name)) {
            return 'First letter of the name has to be uppercase!'
        }
        if (!Validation.restIsLowerCase(name)) {
            return 'There is too many uppercase letters in your Name!'
        }
        if (!Validation.noSpacesArround(name)) {
            return 'Cant put spaces arround!'
        }
        if (Validation.isOneWord(name)) {
            return 'Name can not have spaces!'
        }
        if (!Validation.noOtherSymbols(name)) {
            return 'There has to be only alphabet letters!'
        }
        return true;
    }



    static isValidEmail(email) {
        if (!Validation.isNotEmpty(email)) {
            return 'Email can not be empty!'
        }
        if (Validation.isOneWord(email)) {
            return 'Email can not have spaces!'
        }
        if (!Validation.onlyOneLetter(email, '@')) {
            return 'Email has to have  one @!'
        }
        const splitEmail = email.split('@')

        if (!Validation.isNotEmpty(splitEmail[0])) {
            return 'There is no text in front of @!'
        }

        if (!Validation.isNotEmpty(splitEmail[1])) {
            return 'There is no Email domain!'
        }
        return true;
    }




    static isValidText(text) {
        if (!Validation.isNotEmpty(text)) {
            return 'Text field can not be empty!'
        }
        return true;
    }





    static isNotEmpty(text) {
        if (typeof text !== 'string' ||
            text === '') {
            return false;
        }
        return true;
    }
    static firstUppercase(text) {
        return text[0] === text[0].toUpperCase();
    }
    static restIsLowerCase(text) {
        const lower = text.slice(1);
        return lower === lower.toLowerCase();
    }
    static isOneWord(text) {
        return text.includes(' ');
    }
    static noSpacesArround(text) {
        return text === text.trim();
    }
    static onlyOneLetter(text, letter, number = 1) {
        let letterCount = 0;
        for (let symbol of text) {
            if (symbol === letter) {
                letterCount++;
            }
        }
        return letterCount === number;
    }

    static noOtherSymbols(text) {
        const upperCase = text.toUpperCase();
        const lowerCase = text.toLowerCase();
        const size = text.length;

        for (let i = 0; i < size; i++) {
            if (upperCase[i] === lowerCase[i]) {
                return false;
            }
        }
        return true;

    }
}

export { Validation }



