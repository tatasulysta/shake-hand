import React, { useContext } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import PasswordInput, { PasswordInputProps } from '../input/password-input';

export interface PasswordInputFieldProps extends PasswordInputProps {
  name: string;
  type: 'password';
}

export default function PasswordInputField(props: PasswordInputFieldProps) {
  const { name, type, ...rest } = props;

  const { control } = useFormContext<any>();
  const {
    field: { onChange, ...restField },
    fieldState,
  } = useController({ name, control });

  const error = fieldState?.error?.message;
  return (
    <PasswordInput
      {...rest}
      {...restField}
      error={error}
      onChange={(e) => {
        onChange(e?.target?.value);
      }}
    />
  );
}
