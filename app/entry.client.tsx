// entry.client.tsx
import { CacheProvider } from '@emotion/react';
import { RemixBrowser } from '@remix-run/react';
import React, { StrictMode, useState } from 'react';
import { hydrate } from 'react-dom';

import { ClientStyleContext } from './context';
import createEmotionCache, { defaultCache } from './createEmotionCache';

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(defaultCache);

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

hydrate(
  <ClientCacheProvider>
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  </ClientCacheProvider>,
  document
);
