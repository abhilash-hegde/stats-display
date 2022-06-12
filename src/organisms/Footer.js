import React, { useState } from "react";
import PropTypes from "prop-types";
import NumberInput from "atoms/NumberInput";
import {
  FooterContainer,
  FormContainer,
  ReloadContainer,
  ReloadButtons,
} from "molecules/StyledContainers";
import { FetchButton, FormButton } from "atoms/Button";

export const Footer = ({ onInputNumber, onDataReload }) => {
  const [inputValue, setInputValue] = useState(null);

  const onSubmit = () => {
    setInputValue(null);
    onInputNumber(inputValue);
  };

  const onFetch = ({ target }) => {
    setInputValue(null);
    onDataReload(target.value);
  };

  return (
    <FooterContainer>
      <FormContainer>
        <NumberInput
          value={inputValue}
          onInputChange={({ target }) => setInputValue(Number(target.value))}
        />
        <FormButton onSubmit={onSubmit} disabled={inputValue === null} />
      </FormContainer>
      <ReloadContainer>
        <ReloadButtons>
          <FetchButton
            dataTestId='fetch-button-1'
            text='Reload JSON-1234 Data'
            value='data-1234.json'
            onFetch={onFetch}
          />
          <FetchButton
            dataTestId='fetch-button-2'
            text='Reload JSON-4321 Data'
            value='data-4321.json'
            onFetch={onFetch}
          />
        </ReloadButtons>
      </ReloadContainer>
    </FooterContainer>
  );
};

Footer.propTypes = {
  onInputNumber: PropTypes.func.isRequired,
  onDataReload: PropTypes.func.isRequired,
};

export default Footer;
