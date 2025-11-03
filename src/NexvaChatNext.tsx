'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { NexvaChatConfig } from './types';

interface NexvaChatNextProps {
  config: NexvaChatConfig;
}

export const NexvaChatNext: React.FC<NexvaChatNextProps> = ({ config }) => {
  const isInitialized = useRef(false);
  const apiKeyRef = useRef(config.apiKey);
  
  const apiUrl = config.apiUrl || 'https://yueihds3xl383a-5000.proxy.runpod.net';

  const handleScriptLoad = () => {
    if (!isInitialized.current && window.NexvaChat && apiKeyRef.current) {
      window.NexvaChat.init(apiKeyRef.current, { ...config, apiUrl });
      isInitialized.current = true;
    }
  };

  useEffect(() => {
    apiKeyRef.current = config.apiKey;
    
    if (isInitialized.current && window.NexvaChat && config.apiKey) {
      window.NexvaChat.destroy();
      isInitialized.current = false;
      window.NexvaChat.init(config.apiKey, { ...config, apiUrl });
      isInitialized.current = true;
    }
  }, [config.apiKey]);

  useEffect(() => {
    return () => {
      if (window.NexvaChat && isInitialized.current) {
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

