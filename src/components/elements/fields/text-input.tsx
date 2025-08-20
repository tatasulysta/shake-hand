import { useController, useFormContext } from 'react-hook-form';
import TextInput, { TextInputProps } from '../input/text-input';

export interface TextInputFieldProps extends TextInputProps {
  name: string;
  type: 'text' | 'email' | 'tel';
}

export default function TextInputField(props: TextInputFieldProps) {
  const { name, type, ...rest } = props;

  const { control } = useFormContext<any>();
  const {
    field: { onChange, ...restField },
    fieldState,
  } = useController({ name, control });

  const error = fieldState?.error?.message;

  return (
    <TextInput
      {...rest}
      {...restField}
      error={error}
      onChange={(e) => {
        onChange(e?.target?.value);
      }}
    />
  );
}
