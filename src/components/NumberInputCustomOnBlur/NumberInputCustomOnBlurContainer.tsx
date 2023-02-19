import { useState } from "react";
import { NumberInputCustomOnBlurPresenter } from "./NumberInputCustomOnBlurPresenter";
import { NumberInputCustomProps } from "./types";

const DOT_CHARACTER = ".";

const COMMA_CHARACTER = ",";

const BLANK = "";

const THOUSAND_SEPARATOR_REGEX = /\B(?=(\d{3})+(?!\d))/g;

function convertFullSizeToHalfSize(fullWidthNum: string) {
  return fullWidthNum.replace(/[\uff01-\uff5e]/g, function (m) {
    return String.fromCharCode(m.charCodeAt(0) - 0xfee0);
  });
}

export const NumberInputCustomOnBlurContainer = (
  props: NumberInputCustomProps
): JSX.Element => {
  const { value = "", isAllowed, decimalSeparator, ...rest } = props;

  const [valueOfInput, setValueOfInput] = useState<string>(value);

  const onblur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueAfterOnBlur = convertFullSizeToHalfSize(event.target.value);

    const valueAfterOnBlurArr = [];

    for (var i = 0; i < valueAfterOnBlur.length; i++) {
      const character = valueAfterOnBlur.charAt(i);

      if (
        character.match(/\d/) ||
        character === DOT_CHARACTER ||
        character === COMMA_CHARACTER
      ) {
        valueAfterOnBlurArr.push(character);
      }
    }

    const numberFormatValue = valueAfterOnBlurArr.join(BLANK);

    if (numberFormatValue.includes(DOT_CHARACTER)) {
      const [naturalPart, decimalPart] = numberFormatValue.split(DOT_CHARACTER);

      if (decimalSeparator) {
        setValueOfInput(
          `${naturalPart
            .replaceAll(COMMA_CHARACTER, BLANK)
            .replace(THOUSAND_SEPARATOR_REGEX, COMMA_CHARACTER)}.${decimalPart
            .replaceAll(COMMA_CHARACTER, BLANK)
            .replaceAll(DOT_CHARACTER, BLANK)
            .substring(0, decimalSeparator)}`
        );
      } else {
        setValueOfInput(
          `${naturalPart
            .replaceAll(COMMA_CHARACTER, BLANK)
            .replace(
              THOUSAND_SEPARATOR_REGEX,
              COMMA_CHARACTER
            )}.${decimalPart.replaceAll(COMMA_CHARACTER, BLANK)}`
        );
      }
    } else {
      setValueOfInput(
        `${numberFormatValue
          .replaceAll(COMMA_CHARACTER, BLANK)
          .replace(THOUSAND_SEPARATOR_REGEX, COMMA_CHARACTER)}`
      );
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueAfterOnChange = event.target.value;

    if (
      isAllowed &&
      convertFullSizeToHalfSize(valueAfterOnChange).split(DOT_CHARACTER)
        .length <= 2
    ) {
      setValueOfInput(valueAfterOnChange);
    }
  };

  return (
    <NumberInputCustomOnBlurPresenter
      value={valueOfInput}
      onBlur={onblur}
      onChange={onChange}
      {...rest}
    />
  );
};
