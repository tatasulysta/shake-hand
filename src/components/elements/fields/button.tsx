import { Loader } from '@mantine/core';
import { isEmpty } from 'lodash';
import React, { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button, { ButtonProps } from '../button';

export interface ButtonFieldProps extends ButtonProps {
  type: 'submit';
  text?: string;
  icon?: (size) => React.ReactNode;
}

export default function ButtonField(props: ButtonFieldProps) {
  const { t } = useTranslation();
  const {
    disabled: _disabled,
    text = t('common.save'),
    icon,
    rightIcon,
    ...rest
  } = props;
  const {
    formState: { isSubmitting, errors },
  } = useFormContext();

  const isValid = isEmpty(errors);
  const disabled = _disabled || !isValid || isSubmitting;

  return (
    <Button {...rest} disabled={disabled} loading={isSubmitting}>
      {text ?? t('common.submit')}
    </Button>
  );
}
