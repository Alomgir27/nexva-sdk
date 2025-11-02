import { useEffect, useRef } from 'react';
import { NexvaChatConfig } from './types';

export const useNexva = (config: NexvaChatConfig) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;

    const script = document.createElement('script');
    script.src = config.apiUrl 
      ? `${config.apiUrl}/widget.js` 
      : 'https://yueihds3xl383a-5000.proxy.runpod.net/widget.js';
    script.async = true;

    script.onload = () => {
      if (window.NexvaChat) {
        window.NexvaChat.init(config.apiKey, config);
        isInitialized.current = true;
      }
    };

    document.body.appendChild(script);

    return () => {
      if (window.NexvaChat) {
        window.NexvaChat.destroy();
      }
      document.body.removeChild(script);
      isInitialized.current = false;
    };
  }, [config]);

  return {
    open: () => window.NexvaChat?.open(),
    close: () => window.NexvaChat?.close(),
  };
};

