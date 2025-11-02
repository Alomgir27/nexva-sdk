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
  enableIntroSound?: boolean;
  enableDock?: boolean;
  enableFullscreen?: boolean;
  autoOpen?: boolean;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  buttonSize?: string;
  headerText?: string;
  theme?: 'light' | 'dark';
  presetQuestions?: string[];
  bubble?: {
    backgroundColor?: string;
    size?: string;
    shape?: 'circle' | 'square';
    icon?: string;
    iconColor?: string;
    customIconUrl?: string;
    shadow?: boolean;
    animation?: 'pulse' | 'bounce' | 'none';
  };
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

