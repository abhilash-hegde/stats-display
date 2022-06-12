import React from "react";
import Input from "./style";

const NumberInput = ({ value, onInputChange }) => {
  return (
    <div>
      <Input
        data-testid='input-number'
        value={value}
        placeholder='Enter a number'
        type='number'
        min={0}
        animate={{
          scale: 1.1,
          opacity: 1,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
        onChange={onInputChange}
      />
    </div>
  );
};

export default NumberInput;
