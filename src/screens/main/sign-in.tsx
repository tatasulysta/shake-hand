import { illustrationSvg } from 'assets';
import Image from 'next/image';
import React from 'react';
import { styles } from './styles.css';
import AuthLayout from './components/layout';
import { useTranslation } from 'react-i18next';
import Text from 'components/elements/text';
import Button from 'components/elements/button';
import { Flex } from '@mantine/core';
import Link from 'next/link';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import Form from 'components/elements/form';
import { Input } from 'components/elements/fields';

type FormType = {
  email: string;
  password: string;
};

const formSchema = () =>
  Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

export default function SignIn() {
  const { t } = useTranslation();

  const resolver = useYupValidationResolver<FormType>(formSchema);
  const methods = useForm<FormType>({
    mode: 'onChange',
    // resolver,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = () => {};

  return (
    <AuthLayout>
      <Flex direction="column" align="center" gap={12} mt={40}>
        <Text variant="body1Semibold" color="textDarker">
          {t('common.welcome_back')}
        </Text>
      </Flex>

      <Form methods={methods} onSubmit={onSubmit}>
        <Flex
          direction="column"
          align="center"
          gap={20}
          mt={30}
          pr={16}
          pl={16}
          style={{ width: '100%', flex: 1 }}
        >
          <Input
            type="text"
            name="email"
            label={t('common.email')}
            style={{ width: '100%' }}
          />
          <Input
            type="text"
            name="password"
            label={t('common.password')}
            style={{ width: '100%' }}
          />
          <Input type="submit" text={t('common.sign_in')} />
        </Flex>
      </Form>
      <Flex gap={4} mt={20}>
        <Text variant="body3Regular" color="textGray">
          {t('common.dont_have_account')}
        </Text>
        <Link aria-disabled="true" href="/">
          <Text variant="body3Medium" color="info">
            {t('common.sign_in')}
          </Text>
        </Link>
      </Flex>
      <Link aria-disabled="true" href="/">
        <Text variant="body3Medium" color="info">
          {t('common.forgot_password')}
        </Text>
      </Link>
    </AuthLayout>
  );
}
