import {
  PasswordInput as RawPasswordInput,
  PasswordInputProps as RawPasswordInputProps,
} from '@mantine/core';
import useCombinedRefs from 'hooks/use-combined-ref';
import { forwardRef, useRef } from 'react';

export interface PasswordInputProps
  extends Omit<RawPasswordInputProps, 'inputWrapperOrder' | 'type'> {
  type?: 'password';
  noMargin?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (props, ref) => {
    const innerRef = useRef<HTMLInputElement | null>(null);
    const combinedRef: any = useCombinedRefs(ref, innerRef);
    const { rightSection, noMargin, type, ...rest } = props;

    return (
      <RawPasswordInput
        ref={combinedRef}
        {...rest}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        radius="md"
        withAsterisk
      />
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
