import { NumberInputCustomProps } from "./types";

export const NumberInputCustomOnBlurPresenter = (
  props: NumberInputCustomProps
): JSX.Element => {
  const {
    type = "text",
    placeholder = "",
    isDisplayErrorInline = true,
    classNameContainer,
    ariaLabel,
    reference,
    errors,
    ...rest
  } = props;

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        ref={reference}
        {...rest}
      />
      {isDisplayErrorInline && <p>errors</p>}
    </div>
  );
};
