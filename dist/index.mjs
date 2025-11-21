// src/NexvaChat.tsx
import React from "react";

// src/useNexva.ts
import { useEffect, useRef } from "react";
var useNexva = (config) => {
  const isInitialized = useRef(false);
  const apiUrl = config.apiUrl || "https://yueihds3xl383a-5000.proxy.runpod.net";
  useEffect(() => {
    if (isInitialized.current) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = `${apiUrl}/widget.js`;
    script.async = true;
    script.onload = () => {
      if (window.NexvaChat) {
        window.NexvaChat.init(config.apiKey, { ...config, apiUrl });
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
    close: () => window.NexvaChat?.close()
  };
};

// src/NexvaChat.tsx
var NexvaChat = ({ config, children }) => {
  const { open, close } = useNexva(config);
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: open
      });
    }
    return child;
  }));
};

// src/NexvaChatNext.tsx
import React2, { useEffect as useEffect2, useRef as useRef2 } from "react";
import Script from "next/script";
var NexvaChatNext = ({ config }) => {
  const isInitialized = useRef2(false);
  const mountRef = useRef2(true);
  const apiUrl = config.apiUrl || "https://yueihds3xl383a-5000.proxy.runpod.net";
  const initWidget = () => {
    if (isInitialized.current || !mountRef.current) return;
    if (window.NexvaChat && config.apiKey) {
      window.NexvaChat.init(config.apiKey, { ...config, apiUrl });
      isInitialized.current = true;
    }
  };
  useEffect2(() => {
    mountRef.current = true;
    isInitialized.current = false;
    initWidget();
    const intervalId = setInterval(() => {
      if (window.NexvaChat) {
        initWidget();
        if (isInitialized.current) {
          clearInterval(intervalId);
        }
      }
    }, 100);
    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, 1e4);
    return () => {
      mountRef.current = false;
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      if (window.NexvaChat && isInitialized.current) {
        try {
          window.NexvaChat.destroy();
        } catch (e) {
        }
      }
      isInitialized.current = false;
    };
  }, [config.apiKey, apiUrl]);
  const scriptSrc = `${apiUrl}/widget.js`;
  return /* @__PURE__ */ React2.createElement(
    Script,
    {
      src: scriptSrc,
      type: "module",
      strategy: "lazyOnload",
      crossOrigin: "anonymous",
      onLoad: initWidget
    }
  );
};
export {
  NexvaChat,
  NexvaChatNext,
  useNexva
};
