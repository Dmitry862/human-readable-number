module.exports = function toReadable(number) {
    {
        const init = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        const hundred = 'hundred';
        if (number === 0) {
            return 'zero'
        }
        if (number < 20) {
            return init[number]
        }
        if (number < 100) {
            let numberOfTens = Math.floor(number / 10);
            let remain = number % 10
            return tens[numberOfTens] + (!remain ? '' : ' ' + init[remain])
        }

        if (number < 1000) {
            //451 411 450
            let hundr = Math.floor(number / 100); //4 
            let remain100 = number % 100;
            console.log(remain100)
            return init[hundr] + ' ' + hundred + (remain100 ? ' ' + toReadable(remain100) : '')
        }


    }
}







