function gentratePassword(options) {
    let password = '';

    if (!options.hasOwnProperty('length')) {
        options.length = 10;
    }
    if (!options.hasOwnProperty('isLower')) {
        options.isLower = true;
    }
    if (!options.hasOwnProperty('isUpper')) {
        options.isUpper = true;
    }
    if (!options.hasOwnProperty('isNum')) {
        options.isNum = true;
    }
    if (!options.hasOwnProperty('isChar')) {
        options.isChar = true;
    }

    const specialCharacters = ['|', '#', '@', '!', '/', '?', '*', '<', '>', '(', ')', '-'];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    let primaryArray = [];

    if (options.isNum) {
        primaryArray.push(...numbers);
    }
    if (options.isChar) {
        primaryArray.push(...alphabet);
    }
    primaryArray.push(...specialCharacters);
    if (options.isUpper) {
        primaryArray = primaryArray.map((e) => e.toString().toUpperCase());
    }


    primaryArray.forEach(character => {

        if (password.length < options.length) {
            const random = Math.floor(Math.random() * primaryArray.length);
            password += primaryArray[random];
        }

    });

    return password;

}

module.exports = { gentratePassword };

console.log(gentratePassword({ isUpper: true,length:12,isNum:true }));