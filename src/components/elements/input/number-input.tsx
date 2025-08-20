import {
  NumberInput as RawNumberInput,
  NumberInputProps as RawNumberInputProps,
} from '@mantine/core';
import classNames from 'classnames';
import useCombinedRefs from 'hooks/use-combined-ref';

import { forwardRef, useRef } from 'react';

export interface NumberInputProps
  extends Omit<RawNumberInputProps, 'inputWrapperOrder' | 'type'> {
  type?: 'number';
  noMargin?: boolean;
}

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, ref) => {
    const innerRef = useRef<HTMLInputElement | null>(null);
    const combinedRef: any = useCombinedRefs(ref, innerRef);
    const { noMargin, type, ...rest } = props;

    return (
      <RawNumberInput
        {...rest}
        size="sm"
        radius="md"
        hideControls
        ref={combinedRef}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
        thousandSeparator=","
      />
    );
  },
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;
