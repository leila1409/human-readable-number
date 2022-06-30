module.exports = function toReadable(number) {
    let exceptions = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let oneDigit = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let twoDigits = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];




    let numberInString = number.toString();

    let result = '';
    // exceptions
    if (number > 10 && number < 20) {
        result += exceptions[parseInt(numberInString[1])]
    }
    // 1 digit
    else if (numberInString.length == 1) {
        result += oneDigit[parseInt(numberInString[0])]
    }
    // 2 digits
    else if (numberInString.length == 2) {
        result += twoDigits[parseInt(numberInString[0])] + ' ';
        result += oneDigit[parseInt(numberInString[1])];
    }
    // 3 digits
    else {
        result += oneDigit[parseInt(numberInString[0])];
        result += ' hundred ';

        let rest = parseInt(numberInString.substr(1));

        result += toReadable(rest);
    }

    return result.replace(/ +/g, ' ').trim();

}