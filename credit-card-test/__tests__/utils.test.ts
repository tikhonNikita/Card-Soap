import { getCreditCardData } from '../src/utils/cardUtils';

it('should return object with valid card number', () => {
  const cardData = getCreditCardData('4111111111111111');

  expect(cardData).toBeTruthy();
});

it('should return invalid object with invalid card number', () => {
  const cardData = getCreditCardData('12222');

  expect(cardData!.isValid).toBeFalsy();
});

it('should return nothing with invalid card type', () => {
  const cardData = getCreditCardData('');

  expect(cardData).toBeFalsy();
});
