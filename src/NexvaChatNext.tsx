'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { NexvaChatConfig } from './types';

interface NexvaChatNextProps {
  config: NexvaChatConfig;
}

export const NexvaChatNext: React.FC<NexvaChatNextProps> = ({ config }) => {
  const isInitialized = useRef(false);
  const mountRef = useRef(true);

  const apiUrl = config.apiUrl || 'https://yueihds3xl383a-5000.proxy.runpod.net';

  const initWidget = () => {
    if (isInitialized.current || !mountRef.current) return;

    if ((window as any).NexvaChat && config.apiKey) {
      // console.log('[Nexva SDK] Initializing widget...');
      (window as any).NexvaChat.init(config.apiKey, { ...config, apiUrl });
      isInitialized.current = true;
    }
  };

  useEffect(() => {
    mountRef.current = true;
    isInitialized.current = false;

    // Attempt to initialize immediately
    initWidget();

    // Poll for window.NexvaChat availability
    const intervalId = setInterval(() => {
      if ((window as any).NexvaChat) {
        initWidget();
        // If initialized, clear interval
        if (isInitialized.current) {
          clearInterval(intervalId);
        }
      }
    }, 100);

    // Stop polling after 10 seconds to avoid infinite loops if script fails
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 10000);

    return () => {
      mountRef.current = false;
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      if ((window as any).NexvaChat && isInitialized.current) {
        try {
          (window as any).NexvaChat.destroy();
        } catch (e) {
          // Ignore destroy errors
        }
      }
      isInitialized.current = false;
    };
  }, [config.apiKey, apiUrl]);

  const scriptSrc = `${apiUrl}/widget.js`;

  return (
    <Script
      src={scriptSrc}
      type="module"
      strategy="lazyOnload"
      crossOrigin="anonymous"
      onLoad={initWidget}
    />
  );
};
