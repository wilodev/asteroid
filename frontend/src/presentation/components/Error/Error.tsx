import React from 'react';

function Error({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 tex-white">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="text-4xl font-bold text-red-400">{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;
