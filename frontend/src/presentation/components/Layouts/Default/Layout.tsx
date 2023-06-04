import React, { FC } from 'react';

const Layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <main className="flex w-screen h-screen overflow-x-hidden">{children}</main>
  );
};

export default Layout;
