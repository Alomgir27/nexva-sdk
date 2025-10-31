import React from 'react';
import { useNexva } from './useNexva';
import { NexvaChatConfig } from './types';

interface NexvaChatProps {
  config: NexvaChatConfig;
  children?: React.ReactNode;
}

export const NexvaChat: React.FC<NexvaChatProps> = ({ config, children }) => {
  const { open, close } = useNexva(config);

  if (!children) {
    return null;
  }

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onClick: open,
          } as any);
        }
        return child;
      })}
    </>
  );
};

