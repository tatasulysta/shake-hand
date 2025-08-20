import {
  Textarea as RawTextarea,
  TextareaProps as RawTextareaProps,
} from '@mantine/core';
import useCombinedRefs from 'hooks/use-combined-ref';

import { forwardRef, useRef } from 'react';

export interface TextareaProps
  extends Omit<RawTextareaProps, 'inputWrapperOrder'> {
  type?: 'textarea';
}

const Textarea = forwardRef<HTMLInputElement, TextareaProps>((props, ref) => {
  const innerRef = useRef<HTMLInputElement | null>(null);
  const combinedRef: any = useCombinedRefs(ref, innerRef);

  return (
    <RawTextarea
      {...props}
      size="sm"
      radius="md"
      ref={combinedRef}
      inputWrapperOrder={['label', 'input', 'description', 'error']}
    />
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
