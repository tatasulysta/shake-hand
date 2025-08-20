import { useContext } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import Checkbox from '../input/checkbox';
import { CheckboxProps } from '@mantine/core';

export interface CheckboxFieldProps extends Omit<CheckboxProps, 'onChange'> {
  name: string;
  type: 'checkbox';
  onChange?: (checked: boolean) => void;
}

export default function CheckboxField(props: CheckboxFieldProps) {
  const { name, type, onChange, ...rest } = props;

  const { control } = useFormContext<any>();
  const { field, fieldState } = useController({ name, control });

  const error = fieldState?.error?.message;

  return (
    <Checkbox
      {...rest}
      error={error}
      checked={field.value}
      onChange={(e) => {
        if (!onChange) {
          field.onChange(e?.target?.checked);
        } else {
          onChange(e?.target?.checked);
        }
      }}
    />
  );
}
