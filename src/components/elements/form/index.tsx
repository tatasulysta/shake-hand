import * as React from 'react';
import {
  FormProvider,
  FormProviderProps,
  SubmitHandler,
} from 'react-hook-form';

enum RequestMethod {
  GET = 'GET',
  HEAD = 'HEAD',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
}

interface FormProps {
  methods: Omit<FormProviderProps<any>, 'children'>;
  children: React.ReactNode;
  method?: RequestMethod;
  onSubmit: SubmitHandler<any>;
  style?: React.CSSProperties;
}

export default function Form(props: FormProps) {
  const { methods, children, method = 'POST', onSubmit, style } = props;

  return (
    <FormProvider {...methods}>
      <form
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          width: '100%',
          ...style,
        }}
        method={method}
        /** Disable native form validation since it interferes with number input validation ("Please enter a valid value"). We already have Yup so native validation is not really required unless you need accessibility. But this is a user-facing app so... */
        noValidate
        // onKeyDown={(event) => event.key === 'Enter' && event.preventDefault()}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          // Keep console.error for debugging purposes for now
          methods.handleSubmit(onSubmit, console.error)();
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
}
