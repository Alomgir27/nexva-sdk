# nexva-react

React and Next.js components for integrating Nexva AI Chat Widget into your application.

🌐 **Website:** [nexva.pages.dev](https://nexva.pages.dev)  
📚 **Documentation:** [nexva.pages.dev/docs](https://nexva.pages.dev/docs)  
🎮 **Playground:** [nexva.pages.dev/playground](https://nexva.pages.dev/playground)

## Installation

```bash
npm install nexva-react
# or
yarn add nexva-react
# or
pnpm add nexva-react
```

## Usage

### Next.js (App Router)

```tsx
// app/layout.tsx
import { NexvaChatNext } from 'nexva-react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <NexvaChatNext
          config={{
            apiKey: 'your-api-key',
            position: 'bottom-right',
            primaryColor: '#32f08c',
            enableVoice: true,
            enableHumanSupport: true,
          }}
        />
      </body>
    </html>
  );
}
```

### Next.js (Pages Router)

```tsx
// pages/_app.tsx
import { NexvaChatNext } from 'nexva-react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NexvaChatNext
        config={{
          apiKey: 'your-api-key',
        }}
      />
    </>
  );
}

export default MyApp;
```

### React (Create React App, Vite, etc.)

```tsx
import { NexvaChat } from 'nexva-react';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <NexvaChat
        config={{
          apiKey: 'your-api-key',
          primaryColor: '#32f08c',
        }}
      />
    </div>
  );
}
```

### Using the Hook

```tsx
import { useNexva } from 'nexva-react';

function MyComponent() {
  const { open, close } = useNexva({
    apiKey: 'your-api-key',
  });

  return (
    <div>
      <button onClick={open}>Open Chat</button>
      <button onClick={close}>Close Chat</button>
    </div>
  );
}
```

## Configuration Options

### Basic Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | string | **required** | Your Nexva API key |
| `apiUrl` | string | (auto) | API endpoint URL (optional, defaults to your backend) |
| `position` | `'bottom-right' \| 'bottom-left'` | `'bottom-right'` | Widget position on screen |
| `primaryColor` | string | `'#32f08c'` | Primary brand color |
| `buttonColor` | string | `primaryColor` | Chat button color |
| `headerText` | string | `'Nexva'` | Header text in chat window |
| `welcomeMessage` | string | `'Hi! How can I help...'` | Welcome message shown to users |
| `placeholder` | string | `'Type your message...'` | Input field placeholder text |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme mode |

### Styling Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `borderRadius` | string | `'12px'` | Border radius for chat window |
| `borderColor` | string | `'#E5E7EB'` | Border color for chat window |
| `borderWidth` | string | `'1px'` | Border width for chat window |
| `buttonSize` | string | `'60px'` | Chat button size |

### Feature Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enableVoice` | boolean | `true` | Enable voice chat feature |
| `enableHumanSupport` | boolean | `true` | Enable human support transfer |
| `enableIntroSound` | boolean | `true` | Play intro sound on first open |
| `enableDock` | boolean | `true` | Enable dock/minimize feature |
| `enableFullscreen` | boolean | `true` | Enable fullscreen mode |
| `autoOpen` | boolean | `false` | Auto-open widget on page load |
| `presetQuestions` | string[] | `[]` | Preset questions to show users |

### Bubble Customization

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `bubble.backgroundColor` | string | `'#32f08c'` | Bubble background color |
| `bubble.size` | string | `'60px'` | Bubble size |
| `bubble.shape` | `'circle' \| 'square'` | `'circle'` | Bubble shape |
| `bubble.icon` | string | `'chat'` | Bubble icon type |
| `bubble.iconColor` | string | `'#ffffff'` | Bubble icon color |
| `bubble.customIconUrl` | string | `''` | Custom icon URL (overrides icon) |
| `bubble.shadow` | boolean | `true` | Enable bubble shadow |
| `bubble.animation` | `'pulse' \| 'bounce' \| 'none'` | `'pulse'` | Bubble animation type |

## TypeScript Support

This package includes TypeScript definitions out of the box.

```tsx
import type { NexvaChatConfig } from 'nexva-react';

const config: NexvaChatConfig = {
  apiKey: 'your-api-key',
  primaryColor: '#32f08c',
};
```

## License

MIT

---

**[Get Started](https://nexva.pages.dev) • [Documentation](https://nexva.pages.dev/docs) • [Dashboard](https://nexva.pages.dev/dashboard)**

