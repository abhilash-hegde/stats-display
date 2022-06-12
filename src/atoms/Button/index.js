import Button from "./style";

const FormButton = ({ onSubmit, disabled = false }) => (
  <Button
    data-testid='input-submit'
    onClick={onSubmit}
    disabled={disabled}
    styleType='form'
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
  >
    Submit
  </Button>
);

const FetchButton = ({ onFetch, text, dataTestId, value }) => (
  <Button
    data-testid={dataTestId}
    onClick={onFetch}
    value={value}
    styleType='fetch'
    animate={{
      scale: 1.2,
      opacity: 1,
    }}
    initial={{
      opacity: 0.1,
    }}
    transition={{
      type: "spring",
      stiffness: 60,
      mass: 0.5,
    }}
  >
    {text}
  </Button>
);

export { FormButton, FetchButton };
