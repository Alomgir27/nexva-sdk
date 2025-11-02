'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { NexvaChatConfig } from './types';

interface NexvaChatNextProps {
  config: NexvaChatConfig;
}

export const NexvaChatNext: React.FC<NexvaChatNextProps> = ({ config }) => {
  const isInitialized = useRef(false);
  
  const apiUrl = config.apiUrl || 'https://yueihds3xl383a-5000.proxy.runpod.net';

  const handleScriptLoad = () => {
    if (!isInitialized.current && window.NexvaChat) {
      window.NexvaChat.init(config.apiKey, { ...config, apiUrl });
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

  const scriptSrc = `${apiUrl}/widget.js`;

  return (
    <Script
      src={scriptSrc}
      type="module"
      strategy="lazyOnload"
      onLoad={handleScriptLoad}
    />
  );
};

