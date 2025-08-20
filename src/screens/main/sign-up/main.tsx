import { Flex } from '@mantine/core';
import { Input } from 'components/elements/fields';
import Form from 'components/elements/form';
import Text from 'components/elements/text';
import Header from 'components/layout/header';
import MainLayout from 'components/layout/main';
import useYupValidationResolver from 'hooks/use-yup-validation-resolver';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { colors } from 'styles/colors';
import * as Yup from 'yup';
export const formSchema = () =>
  Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    passwordConfirmation: Yup.string().required(),
    phoneNumber: Yup.string().nullable(),
  });

export type FormType = Yup.InferType<ReturnType<typeof formSchema>>;

export default function SignUpMain() {
  const { t } = useTranslation();
  const router = useRouter();
  const resolver = useYupValidationResolver<FormType>(formSchema());
  const methods = useForm({
    mode: 'onChange',
    // resolver
  });

  const onSubmit = () => {
    router.push(
      '/sign-up/questionaire' + `?${new URLSearchParams(router.query as any)}`,
    );
  };
  return (
    <MainLayout>
      <Header title={t('auth.setup_account')} />
      <Text variant="body4Thin" color="textGray" ta="center">
        {t('auth.setup_account_desc')}
      </Text>
      <Form methods={methods} onSubmit={onSubmit}>
        <Flex direction="column" gap={16} flex={1}>
          <Input type="text" name="name" label={t('common.name')} required />
          <Input type="text" name="email" label={t('common.email')} required />
          <Input
            type="text"
            name="phoneNumber"
            label={t('common.phone_number')}
            placeholder="+62773xxx"
          />
          <Input
            type="text"
            name="password"
            label={t('common.password')}
            required
          />
          <Input
            type="text"
            name="passwordConfirmation"
            label={t('common.password_confirmation')}
            required
          />
        </Flex>
        <Flex direction="column" gap={22}>
          <Text variant="body4Medium" color="textDark" ta="center">
            <Trans
              i18nKey="auth.agree_terms"
              components={[
                <Link
                  key={0}
                  href="/"
                  target="_blank"
                  style={{ color: colors.info }}
                />,
              ]}
            />
          </Text>
          <Input type="submit" text={t('auth.create_an_account')} />
        </Flex>
      </Form>
    </MainLayout>
  );
}
