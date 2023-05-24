let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function find(letter) {
    return letters.indexOf(letter)
}



function newLetter(letter, shift) {
    if(letters.indexOf(letter) === -1) {
        return letter
    } else {
        if(typeof letter === 'string' && typeof shift === 'number' && letter === letter.toLowerCase()) {
            let input = find(letter);
            let remainder = shift % 26
            let newChar = input+remainder;
            if(input+remainder > 25) {
                return letters[-26+newChar]
            }
            else {
                return letters[newChar]
            }
        
        } else if(typeof letter === 'string' && typeof shift === 'number' && letter !== letter.toLowerCase()) {
            let input = find(letter.toLowerCase());
            let remainder = shift % 26;
            let newChar = input+remainder;
            if(input+remainder > 25) {
                return letters[-26+newChar]
            }
            else {
                return letters[newChar]
            }
        }    
    }
}

function caesarCipher(string, shift) {
    let ciphered = ''
    for(let i = 0; i < string.length; i++) {
        let ciphChar = newLetter(string.charAt(i), shift)
        ciphered += ciphChar
    }
    return ciphered;
}

module.exports = caesarCipher