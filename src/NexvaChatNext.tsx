'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { NexvaChatConfig } from './types';

interface NexvaChatNextProps {
  config: NexvaChatConfig;
}

export const NexvaChatNext: React.FC<NexvaChatNextProps> = ({ config }) => {
  const isInitialized = useRef(false);

  const handleScriptLoad = () => {
    if (!isInitialized.current && window.NexvaChat) {
      window.NexvaChat.init(config.apiKey, config);
      isInitialized.current = true;
    }
  };

  useEffect(() => {
    return () => {
      if (window.NexvaChat) {
        window.NexvaChat.destroy();
      }
      isInitialized.current = false;
    };
  }, []);

  const scriptSrc = config.apiUrl 
    ? `${config.apiUrl}/widget.js` 
    : 'https://api.nexva.ai/widget.js';

  return (
    <Script
      src={scriptSrc}
      strategy="lazyOnload"
      onLoad={handleScriptLoad}
    />
  );
};

