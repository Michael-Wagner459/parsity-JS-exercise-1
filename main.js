const convertWeight = function (number, unit) {
  unit.toLowerCase();
  // eslint-disable-next-line eqeqeq
  if (typeof number != 'number') {
    return 'Please put a number in the first arguement.';
  }
  if (unit !== 'pounds' && unit !== 'kilos') {
    return 'Please select pounds or kilos for the unit.';
  }
  if (unit === 'pounds') {
    const poundWeight = number * 0.453592;
    return poundWeight;
  }
  if (unit === 'kilos') {
    const kiloWeight = number * 2.20462;
    return kiloWeight;
  }
};

Math.roundTo = function (number, positions) {
  const numberToRound = 10 ** positions * number;
  const roundNumber = Math.round(numberToRound);
  const finalNumber = roundNumber / 10 ** positions;
  return finalNumber;
};

const calcAge = function (birthYear) {
  const autoYear = new Date();
  const year = autoYear.getFullYear();
  const howOld = year - birthYear;
  console.log(`You are either ${howOld - 1} or ${howOld}.`);
};

const isPrime = function (number) {
  let answerPrime;
  if (number === 1 || number === 2) {
    return (answerPrime = true);
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      answerPrime = false;
      break;
    } else {
      answerPrime = true;
    }
  }
  console.log(answerPrime);
};
