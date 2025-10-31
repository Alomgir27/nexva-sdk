# Examples

## Next.js App Router

```tsx
// app/layout.tsx
import { NexvaChatNext } from '@nexva/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <NexvaChatNext
          config={{
            apiKey: process.env.NEXT_PUBLIC_NEXVA_API_KEY!,
            apiUrl: 'https://api.nexva.ai',
            position: 'bottom-right',
            primaryColor: '#32f08c',
            welcomeMessage: 'Hi! How can I help you today?',
            enableVoice: true,
            enableHumanSupport: true,
          }}
        />
      </body>
    </html>
  );
}
```

## Next.js Pages Router

```tsx
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { NexvaChatNext } from '@nexva/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <NexvaChatNext
        config={{
          apiKey: process.env.NEXT_PUBLIC_NEXVA_API_KEY!,
          apiUrl: 'https://api.nexva.ai',
        }}
      />
    </>
  );
}

export default MyApp;
```

## React with Vite

```tsx
// App.tsx
import { NexvaChat } from '@nexva/react';

function App() {
  return (
    <div className="app">
      <h1>My Application</h1>
      <NexvaChat
        config={{
          apiKey: import.meta.env.VITE_NEXVA_API_KEY,
          apiUrl: 'https://api.nexva.ai',
        }}
      />
    </div>
  );
}

export default App;
```

## Using the Hook for Custom Control

```tsx
import { useNexva } from '@nexva/react';
import { useState } from 'react';

function CustomerSupport() {
  const { open, close } = useNexva({
    apiKey: 'your-api-key',
    apiUrl: 'https://api.nexva.ai',
    primaryColor: '#667eea',
  });

  return (
    <div>
      <button onClick={open}>
        Need Help?
      </button>
      <button onClick={close}>
        Close Chat
      </button>
    </div>
  );
}
```

## Conditional Rendering

```tsx
import { NexvaChatNext } from '@nexva/react';

export default function Layout({ children }) {
  const showChat = process.env.NODE_ENV === 'production';

  return (
    <html>
      <body>
        {children}
        {showChat && (
          <NexvaChatNext
            config={{
              apiKey: process.env.NEXT_PUBLIC_NEXVA_API_KEY!,
            }}
          />
        )}
      </body>
    </html>
  );
}
```

## Custom Styling

```tsx
import { NexvaChatNext } from '@nexva/react';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <NexvaChatNext
          config={{
            apiKey: 'your-api-key',
            primaryColor: '#ff6b6b',
            buttonColor: '#ee5a6f',
            borderRadius: '20px',
            buttonSize: '70px',
            headerText: 'Customer Support',
            theme: 'dark',
          }}
        />
      </body>
    </html>
  );
}
```

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_NEXVA_API_KEY=your_api_key_here
NEXT_PUBLIC_NEXVA_API_URL=https://api.nexva.ai
```

```tsx
// Usage
<NexvaChatNext
  config={{
    apiKey: process.env.NEXT_PUBLIC_NEXVA_API_KEY!,
    apiUrl: process.env.NEXT_PUBLIC_NEXVA_API_URL,
  }}
/>
```

