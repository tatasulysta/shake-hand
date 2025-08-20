import {
  Checkbox as RawCheckbox,
  CheckboxProps as RawCheckboxProps,
} from '@mantine/core';

import useCombinedRefs from 'hooks/use-combined-ref';
import { forwardRef, useRef } from 'react';

export interface CheckboxProps extends RawCheckboxProps {
  type?: 'checkbox';
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const innerRef = useRef<HTMLInputElement | null>(null);
  const combinedRef: any = useCombinedRefs(ref, innerRef);

  return <RawCheckbox {...props} radius="sm" ref={combinedRef} />;
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
