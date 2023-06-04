import React, { FC } from 'react';
import { SizeButton, TypeButton, VariantButton } from './type';
import clsx from 'clsx';
const Button: FC<{
  children: React.ReactNode;
  variant?: VariantButton;
  type?: TypeButton;
  size?: SizeButton;
}> = ({
  children,
  variant = VariantButton.PRIMARY,
  type = TypeButton.BUTTON,
  size = SizeButton.MEDIUM,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'inline-flex justify-center items-center text-base font-medium text-center text-white rounded-lg focus:ring-4',
        'focus:outline-none',
        'focus:ring-2',
        variant === VariantButton.PRIMARY &&
          'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500',
        variant === VariantButton.SECONDARY &&
          'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500',
        variant === VariantButton.SUCCESS &&
          'bg-green-500 hover:bg-green-600 focus:ring-green-500',
        variant === VariantButton.DANGER &&
          'bg-red-500 hover:bg-red-600 focus:ring-red-500',
        variant === VariantButton.OUTLINE &&
          'bg-transparent hover:bg-gray-100 focus:ring-gray-500',
        size === SizeButton.SMALL && ' px-4 py-2 text-sm',
        size === SizeButton.MEDIUM && ' px-6 py-4 text-lg',
        size === SizeButton.LARGE && ' px-4 py-2 text-xl',
      )}
    >
      {children}
    </button>
  );
};

export default Button;
