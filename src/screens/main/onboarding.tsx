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
import { useRouter } from 'next/router';

export default function Onboarding() {
  const { t } = useTranslation();
  const { push } = useRouter();
  return (
    <AuthLayout>
      <div className={styles.illustration}>
        <Image src={illustrationSvg} alt="illustration" fill />
      </div>
      <Flex direction="column" align="center" gap={12} mt={40}>
        <Text variant="body2Regular" color="textGray">
          {t('common.get_started')}
        </Text>
        <Text variant="body1Semibold" color="textDarker">
          {t('common.tagline')}
        </Text>
      </Flex>
      <Flex direction="column" align="center" gap={20} mt={30}>
        <Button onClick={() => push(`/sign-up/?type=buyer`)}>
          {t('common.register_as_extra', { extra: t('common.buyer') })}
        </Button>
        <Text color="textDarker" variant="body3Medium">
          {t('common.or')}
        </Text>
        <Button onClick={() => push(`/sign-up/?type=seller`)}>
          {t('common.register_as_extra', { extra: t('common.seller') })}
        </Button>
      </Flex>
      <Flex gap={4} mt={20}>
        <Text variant="body3Regular" color="textGray">
          {t('common.already_have_account')}
        </Text>
        <Link aria-disabled="true" href="/sign-in">
          <Text variant="body3Medium" color="info">
            {t('common.sign_in')}
          </Text>
        </Link>
      </Flex>
    </AuthLayout>
  );
}
