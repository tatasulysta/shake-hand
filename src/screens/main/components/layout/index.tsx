import React from 'react';
import { styles } from './styles.css';
import MainLayout from 'components/layout/main';
import Text from 'components/elements/text';
import { Reddit_Sans } from 'next/font/google';

const redditSans = Reddit_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});
export default function AuthLayout(props: React.PropsWithChildren) {
  return (
    <MainLayout noPadding>
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <Text
            variant="h2"
            className={redditSans.className}
            color={'textDark'}
            style={{ fontWeight: 700 }}
          >
            ShakeHand
          </Text>
        </div>

        <div className={styles.innerContainer}>{props.children}</div>
      </div>
    </MainLayout>
  );
}
