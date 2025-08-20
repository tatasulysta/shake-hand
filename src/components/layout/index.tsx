import React from 'react';
import { layoutStyles } from './styles.css';

interface Props extends React.PropsWithChildren {
  noPadding?: boolean;
}
export default function MainLayout(props: Props) {
  const { children, noPadding = false } = props;
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.innerContainer({ padding: !noPadding })}>
        {children}
      </div>
    </div>
  );
}
