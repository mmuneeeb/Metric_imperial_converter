function numUnitSplit(input) {
  let number = input.match(/[.\d\/]+/g) || ['1'];
  let string = input.match(/[a-zA-Z]+/g)[0];

  return [number[0], string];
}

function divChecker(inputString) {
  let num = inputString.split('/');
  if (num.length > 2) {
    return false;
  }
  return num;
}

function ConvertHandler() {
  this.getNum = function (input) {
    let result = numUnitSplit(input)[0];
    let num = divChecker(result);

    if (!num) {
      return undefined;
    }

    let numOne = num[0];
    let numTwo = num[1] || '1';

    result = parseFloat(numOne / numTwo);

    if (isNaN(numOne) || isNaN(numTwo)) {
      return undefined;
    }

    return result;
  };

  this.getUnit = function (input) {
    let result = numUnitSplit(input)[1].toLowerCase();

    switch (result) {
      case 'km':
        return 'km';
      case 'mi':
        return 'mi';
      case 'gal':
        return 'gal';
      case 'lbs':
        return 'lbs';
      case 'l':
        return 'L';
      case 'kg':
        return 'kg';
      default:
        return undefined;
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result = initUnit.toLowerCase();

    switch (result) {
      case 'km':
        return 'mi';
      case 'mi':
        return 'km';
      case 'gal':
        return 'L';
      case 'lbs':
        return 'kg';
      case 'l':
        return 'gal';
      case 'kg':
        return 'lbs';
      default:
        return undefined;
    }
  };

  this.spellOutUnit = function (initUnit) {
    let result = initUnit.toLowerCase();

    switch (result) {
      case 'km':
        return 'kilometers';
      case 'mi':
        return 'miles';
      case 'gal':
        return 'gallons';
      case 'lbs':
        return 'pounds';
      case 'l':
        return 'Litres';
      case 'kg':
        return 'kilogram';
      default:
        return ' ';
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    let result = 0;

    switch (unit) {
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
    }

    return parseFloat(Number(result).toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
