import { Flex } from '@mantine/core';
import { BackIcon } from 'assets';
import { ActionIcon } from 'components/elements/button';
import Text from 'components/elements/text';
import { useRouter } from 'next/router';
import React from 'react';
import { colors } from 'styles/colors';

type Item = {
  icon: (size, color) => React.ReactNode;
  onPress: () => void;
};
interface Props {
  right?: Item;
  left?: Item;
  back?: boolean;
  title: string;
}
export default function Header(props: Props) {
  const { title, back, left, right } = props;
  const router = useRouter();

  return (
    <Flex
      style={{
        width: '100%',

        padding: '20px 16px 14px 16px',
      }}
      justify="space-between"
    >
      {back || !!left ? (
        <ActionIcon variant="subtle" onClick={left?.onPress || router.back}>
          {(size) =>
            left?.icon(size, colors.textDarker) || (
              <BackIcon size={size} weight="bold" color={colors.textDarker} />
            )
          }
        </ActionIcon>
      ) : (
        <div></div>
      )}
      <Text color="textDark" variant="body2Semibold">
        {title}
      </Text>
      {!!right ? (
        <ActionIcon variant="subtle" onClick={right?.onPress}>
          {(size) => left?.icon(size, colors.textDarker)}
        </ActionIcon>
      ) : (
        <div></div>
      )}
    </Flex>
  );
}
