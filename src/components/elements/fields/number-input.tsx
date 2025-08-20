import { useContext } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import NumberInput, { NumberInputProps } from '../input/number-input';

export interface NumberInputFieldProps extends NumberInputProps {
  name: string;
  type: 'number';
  onAfterChange?: (value?: string | number) => void;
}

export default function NumberInputField(props: NumberInputFieldProps) {
  const { name, type, onAfterChange, ...rest } = props;

  const { control } = useFormContext<any>();
  const {
    field: { onChange, ...restField },
    fieldState,
  } = useController({ name, control });

  const error = fieldState?.error?.message;
  return (
    <NumberInput
      {...rest}
      {...restField}
      error={error}
      {...('value' in rest && { value: rest.value })}
      onChange={(e) => {
        onChange(e);
        onAfterChange?.(e);
      }}
    />
  );
}
