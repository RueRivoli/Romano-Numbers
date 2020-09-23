var ten = {
    0 : "",
    1 : "X",
    2 : "XX",
    3 : "XXX",
    4 : "IL",
    5 : "L",
    6 : "LX",
    7 : "LXX",
    8 : "LXXX",
    9 : "XC"
}

var unit = {
    0 : "",
    1 : "I",
    2 : "II",
    3 : "III",
    4 : "IV",
    5 : "V",
    6 : "VI",
    7 : "VII",
    8 : "VIII",
    9 : "IX"
}

function convertNumber(decNb) {
    console.log(decNb);
    const diz = Math.trunc(decNb / 10);
    if (diz === 10) return "C"
    else {
        const rest = decNb - Math.trunc(decNb / 10) * 10;
        return ten[diz] + unit[rest];
    }
    // const rest_cent = decNb - 100 * cent;

    // if (cent === 1) return "C"
  
    // let fifty = Math.trunc(rest_cent / 50);
    // console.log(fifty);
    // const rest_fifty = rest_cent - fifty * 50;
    // console.log(rest_fifty);
    // if (fifty > 0) {
    //     while (fifty--) result += 'L'
    // }

    // let ten = Math.trunc(rest_fifty / 10);
    // console.log(ten);
    // const rest_ten = rest_fifty - ten * 10;
    // console.log(ten);
    // if (ten < 4) {
    //     while (ten--) result += 'X'
    // } else if (ten === 4) result += 'XL'

    // let five = Math.trunc(rest_ten / 5);
    // console.log(five);
    // const rest_five = rest_ten - five * 5;
    // if (five > 0) {
    //     while (five--) result += 'V'
    // }

    // let one = rest_five / 1;
    // if (one < 4) {
    //     while (one--) result += 'I'
    // } else if (one === 4) result += 'IV'

    return result;

}

module.exports = convertNumber