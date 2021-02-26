import React, { FC, useState } from 'react';
import InputMask from 'react-input-mask';
import { getCreditCardData, normalize } from '../../utils/cardUtils';
import './styles.css';

type Decoration = { icon?: string; isValid: boolean };


const CreditCardInput: FC = () => {
  const [cardNumber, setCardNumber] = useState('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(event.target.value);
  };

  const cardData = getCreditCardData(normalize(cardNumber));


  const getDecoration = ({ icon, isValid }: Decoration) => {
    return (
      <>
        {icon && <img className="card__icon" src={icon} alt="card-icon"/>}
        {!isValid && <p className="card__error error">Invalid card number</p>}
      </>
    );
  };

  const inputIsInvalid = cardData && !cardData.isValid && 'error';
  return (
    <div className={`card__container ${inputIsInvalid}`}>
      <InputMask
        maskChar={null}
        mask="9999 9999 9999 9999"
        value={cardNumber}
        onChange={onChangeHandler}
      >
        {
          (inputProps: Record<string, unknown>) => (
            <input
              className="card__input"
              placeholder="Your credit card number"
              {...inputProps}
            />
          )
        }
      </InputMask>
      {cardData && getDecoration(cardData)}
    </div>
  );
};

export default CreditCardInput;
