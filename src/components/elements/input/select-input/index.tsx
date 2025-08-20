import {
  Select as RawSelectInput,
  SelectProps as RawSelectInputProps,
} from '@mantine/core';
import { forwardRef, useRef } from 'react';

import useCombinedRefs from 'hooks/use-combined-ref';

export interface SelectInputProps
  extends Omit<RawSelectInputProps, 'inputWrapperOrder'> {}

const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  (props, ref) => {
    const innerRef = useRef<HTMLInputElement | null>(null);
    const combinedRef: any = useCombinedRefs(ref, innerRef);

    return (
      <RawSelectInput
        {...props}
        size="sm"
        radius="md"
        ref={combinedRef}
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    );
  },
);

SelectInput.displayName = 'SelectInput';

export default SelectInput;
