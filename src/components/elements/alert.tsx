import { Alert as RawAlert, AlertProps as RawAlertProps } from '@mantine/core';
import { AlertIcon } from 'assets';

import React from 'react';

export interface AlertProps
  extends Omit<RawAlertProps, 'variant' | 'children'> {
  description: React.ReactNode;
}

export function Alert(props: AlertProps) {
  const { description, withCloseButton, ...rest } = props;
  const [isClose, setClose] = React.useState<boolean>(false);

  return (
    <>
      {!isClose && (
        <RawAlert
          radius="md"
          withCloseButton={withCloseButton === undefined || withCloseButton}
          onClose={() => setClose(true)}
          icon={<AlertIcon size={24} />}
          children={description}
          {...rest}
        />
      )}
    </>
  );
}

export default Alert;
