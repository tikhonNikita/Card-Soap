import visa from '../assets/images/visa.svg';
import discover from '../assets/images/discover.svg';
import amex from '../assets/images/amex.svg';
import mastercard from '../assets/images/mastercard.svg';

const CARD_TYPES = [
  {
    name: 'visa',
    length: [13, 16],
    beginsWith: /^4/,
    icon: visa,
  },
  {
    name: 'mastercard',
    length: [16],
    beginsWith: /^51|^52|^53|^54|^55/,
    icon: mastercard,
  },
  {
    name: 'amex',
    length: [15],
    beginsWith: /^34|^37/,
    icon: amex,
  },
  {
    name: 'discover',
    length: [16],
    beginsWith: /^6011/,
    icon: discover,
  },
];

export const getCreditCardData = (cardNumber: string) => {
  const cardType = CARD_TYPES.find(type => type.beginsWith.test(cardNumber));

  if (cardType) {
    return  {
      icon: cardType.icon,
      isValid: cardType.length.includes(cardNumber.length) && isCardNumberValid(cardNumber),
    };
  } else if (cardNumber.length !== 0) {
    return {
      icon: undefined,
      isValid: false,
    };
  }
};

// This method implements Luhn's algorithm
const isCardNumberValid = (cardNumber: string) => {
  let sum = 0;
  let isEven = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let parsedDigit = parseInt(cardNumber[i], 10);

    if (isEven && (parsedDigit *= 2) > 9) {
      parsedDigit -= 9;
    }

    sum += parsedDigit;
    isEven = !isEven;
  }

  return (sum % 10) === 0;
};

export const normalize = (str: string) => {
  return str.replace(/\s/g, '').trim();
};
