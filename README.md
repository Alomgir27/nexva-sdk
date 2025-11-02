# nexva-react

React and Next.js components for integrating Nexva AI Chat Widget into your application.

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

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | string | **required** | Your Nexva API key |
| `apiUrl` | string | (auto) | API endpoint URL (optional, defaults to your backend) |
| `position` | `'bottom-right' \| 'bottom-left'` | `'bottom-right'` | Widget position |
| `primaryColor` | string | `'#32f08c'` | Primary brand color |
| `buttonColor` | string | `primaryColor` | Chat button color |
| `welcomeMessage` | string | `'Hi! How can I help...'` | Welcome message |
| `placeholder` | string | `'Type your message...'` | Input placeholder |
| `enableVoice` | boolean | `true` | Enable voice chat |
| `enableHumanSupport` | boolean | `true` | Enable human support |
| `autoOpen` | boolean | `false` | Auto-open on load |
| `borderRadius` | string | `'12px'` | Border radius |
| `buttonSize` | string | `'60px'` | Button size |
| `headerText` | string | `'Nexva'` | Header text |
| `theme` | `'light' \| 'dark'` | `'light'` | Theme mode |

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

