import React from 'react';

interface NexvaChatConfig {
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

interface NexvaChatProps {
    config: NexvaChatConfig;
    children?: React.ReactNode;
}
declare const NexvaChat: React.FC<NexvaChatProps>;

interface NexvaChatNextProps {
    config: NexvaChatConfig;
}
declare const NexvaChatNext: React.FC<NexvaChatNextProps>;

declare const useNexva: (config: NexvaChatConfig) => {
    open: () => void | undefined;
    close: () => void | undefined;
};

export { NexvaChat, type NexvaChatConfig, NexvaChatNext, useNexva };
