import React, { FC } from 'react';
import { DefaultLayout } from '..';
import { Header } from '../../Header';

const Layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <DefaultLayout>
      <div className="flex w-screen h-screen flex-col">
        <Header />
        {children}
      </div>
    </DefaultLayout>
  );
};

export default Layout;
