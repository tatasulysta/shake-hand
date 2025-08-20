import { useContext } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import SelectInput, { SelectInputProps } from '../input/select-input';

export interface SelectInputFieldProps extends SelectInputProps {
  name: string;
  type: 'select';
}

export default function SelectInputField(props: SelectInputFieldProps) {
  const { name, onChange, ...rest } = props;

  const { control } = useFormContext<any>();
  const { field, fieldState } = useController({ name, control });

  const error = fieldState?.error?.message;

  return (
    <SelectInput
      {...field}
      {...rest}
      error={error}
      onChange={(value) => field.onChange(value)}
    />
  );
}
