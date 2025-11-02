"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  NexvaChat: () => NexvaChat,
  NexvaChatNext: () => NexvaChatNext,
  useNexva: () => useNexva
});
module.exports = __toCommonJS(index_exports);

// src/NexvaChat.tsx
var import_react2 = __toESM(require("react"));

// src/useNexva.ts
var import_react = require("react");
var useNexva = (config) => {
  const isInitialized = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    if (isInitialized.current) return;
    const script = document.createElement("script");
    script.src = config.apiUrl ? `${config.apiUrl}/widget.js` : "https://yueihds3xl383a-5000.proxy.runpod.net/widget.js";
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
    close: () => window.NexvaChat?.close()
  };
};

// src/NexvaChat.tsx
var NexvaChat = ({ config, children }) => {
  const { open, close } = useNexva(config);
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.Children.map(children, (child) => {
    if (import_react2.default.isValidElement(child)) {
      return import_react2.default.cloneElement(child, {
        onClick: open
      });
    }
    return child;
  }));
};

// src/NexvaChatNext.tsx
var import_react3 = __toESM(require("react"));
var import_script = __toESM(require("next/script"));
var NexvaChatNext = ({ config }) => {
  const isInitialized = (0, import_react3.useRef)(false);
  const handleScriptLoad = () => {
    if (!isInitialized.current && window.NexvaChat) {
      window.NexvaChat.init(config.apiKey, config);
      isInitialized.current = true;
    }
  };
  (0, import_react3.useEffect)(() => {
    return () => {
      if (window.NexvaChat) {
        window.NexvaChat.destroy();
      }
      isInitialized.current = false;
    };
  }, []);
  const scriptSrc = config.apiUrl ? `${config.apiUrl}/widget.js` : "https://yueihds3xl383a-5000.proxy.runpod.net/widget.js";
  return /* @__PURE__ */ import_react3.default.createElement(
    import_script.default,
    {
      src: scriptSrc,
      strategy: "lazyOnload",
      onLoad: handleScriptLoad
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NexvaChat,
  NexvaChatNext,
  useNexva
});
