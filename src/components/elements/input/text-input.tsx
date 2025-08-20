import {
  TextInput as RawTextInput,
  TextInputProps as RawTextInputProps,
} from '@mantine/core';
import classNames from 'classnames';
import useCombinedRefs from 'hooks/use-combined-ref';
import { forwardRef, useRef } from 'react';

export interface TextInputProps
  extends Omit<RawTextInputProps, 'inputWrapperOrder' | 'type'> {
  type?: 'text' | 'tel' | 'email';
  noMargin?: boolean;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const innerRef = useRef<HTMLInputElement | null>(null);
  const combinedRef: any = useCombinedRefs(ref, innerRef);
  const { noMargin, type, ...rest } = props;

  return (
    <RawTextInput
      {...rest}
      size="sm"
      radius="md"
      ref={combinedRef}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
    />
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
