export interface NexvaChatConfig {
  apiKey: string;
  apiUrl?: string;
  position?: 'bottom-right' | 'bottom-left';
  primaryColor?: string;
  buttonColor?: string;
  welcomeMessage?: string;
  placeholder?: string;
  enableVoice?: boolean;
  enableHumanSupport?: boolean;
  autoOpen?: boolean;
  borderRadius?: string;
  buttonSize?: string;
  headerText?: string;
  theme?: 'light' | 'dark';
}

declare global {
  interface Window {
    NexvaChat?: {
      init: (apiKey: string, config?: Partial<NexvaChatConfig>) => void;
      open: () => void;
      close: () => void;
      destroy: () => void;
    };
  }
}

