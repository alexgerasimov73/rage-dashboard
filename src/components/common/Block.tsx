import type { HTMLAttributes, PropsWithChildren } from 'react';

export const Block = ({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div
    className={`flex flex-col justify-center items-center gap-4 px-4 py-6 rounded-4 border border-bg-2 bg-bg-1 ${
      className || ''
    }`}
    {...rest}>
    {children}
  </div>
);
