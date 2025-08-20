import { PiIcon } from '@phosphor-icons/react';
import Button, { ActionIcon } from 'components/elements/button';
import MainLayout from 'components/layout';

export default function Home() {
  return (
    <MainLayout>
      <Button>test</Button>
      <Button variant="secondary">test</Button>
      <ActionIcon>{(size) => <PiIcon size={size} />}</ActionIcon>
    </MainLayout>
  );
}
