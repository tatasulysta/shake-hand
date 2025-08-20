import ButtonField, { ButtonFieldProps } from './button';
import CheckboxInputField, { CheckboxFieldProps } from './checkbox-input';

import NumberInputField, { NumberInputFieldProps } from './number-input';
import PasswordInputField, { PasswordInputFieldProps } from './password-input';

import SelectInputField, { SelectInputFieldProps } from './select-input';

import TextInputField, { TextInputFieldProps } from './text-input';

export function Input(
  props:
    | NumberInputFieldProps
    | TextInputFieldProps
    | SelectInputFieldProps
    | PasswordInputFieldProps
    | ButtonFieldProps
    | CheckboxFieldProps,
) {
  switch (props.type) {
    case 'number':
      return <NumberInputField {...props} />;
    case 'checkbox':
      return <CheckboxInputField {...props} />;
    case 'select':
      return <SelectInputField {...props} />;
    case 'password':
      return <PasswordInputField {...props} />;
    case 'submit':
      return <ButtonField {...props} />;
    default:
      return <TextInputField {...props} />;
  }
}
