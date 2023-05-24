function reverseString(string) {
    let reversed = '';
    for(let i = string.length; i > 0; i --) {
        reversed += string.charAt(i-1)
    }
    return reversed;
}
module.exports = reverseString;