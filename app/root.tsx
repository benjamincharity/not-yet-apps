import { Box, ChakraProvider, cookieStorageManagerSSR, Flex, Heading } from '@chakra-ui/react';
import { withEmotionCache } from '@emotion/react';
import { cssBundleHref } from '@remix-run/css-bundle';
import { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { LoaderFunction } from '@remix-run/router';
import { Sidebar } from '~/components/Sidebar/Sidebar';
import { nyaTheme } from '~/theme';
import React, { useContext, useEffect, useMemo } from 'react';

import { ClientStyleContext, ServerStyleContext } from './context';

function getColorMode(cookies: string) {
  const match = cookies.match(new RegExp(`(^| )${CHAKRA_COOKIE_COLOR_KEY}=([^;]+)`));
  return match == null ? void 0 : match[2];
}

// here we can set the default color mode. If we set it to null,
// there's no way for us to know what is the the user's preferred theme
// so the client will have to figure out and maybe there'll be a flash the first time the user visits us.
const DEFAULT_COLOR_MODE: 'dark' | 'light' | null = 'dark';

const CHAKRA_COOKIE_COLOR_KEY = 'chakra-ui-color-mode';

export const meta: MetaFunction = () => [
  {
    charset: 'utf-8',
    title: 'New Remix App',
    viewport: 'width=device-width,initial-scale=1',
  },
];

export let links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap',
    },
    ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  ];
};

interface AppDocumentProps {
  children: React.ReactNode;
}
// Typescript
// This will return cookies
export const loader: LoaderFunction = async ({ request }) => {
  // first time users will not have any cookies and you may not return
  // undefined here, hence ?? is necessary
  return request?.headers?.get('cookie') ?? '';
};

const AppDocument = withEmotionCache(({ children }: AppDocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);
  let cookies: string = useLoaderData();

  // the client get the cookies from the document
  // because when we do a client routing, the loader can have stored an outdated value
  if (typeof document !== 'undefined') {
    cookies = document.cookie;
  }

  // get and store the color mode from the cookies.
  // It'll update the cookies if there isn't any and we have set a default value
  let colorMode = useMemo(() => {
    let color = getColorMode(cookies as any);

    if (!color && DEFAULT_COLOR_MODE) {
      cookies += ` ${CHAKRA_COOKIE_COLOR_KEY}=${DEFAULT_COLOR_MODE}`;
      color = DEFAULT_COLOR_MODE;
    }

    return color;
  }, [cookies]);

  useEffect(() => {
    console.log('nyaTheme: ', nyaTheme);
  }, []);

  return (
    <html
      lang="en"
      {...(colorMode && {
        'data-theme': colorMode,
        'style': { colorScheme: colorMode },
      })}
    >
      <head>
        <Meta />
        <Links />
        {serverStyleData?.map(({ key, ids, css }) => (
          <style
            key={key}
            data-emotion={`${key} ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        ))}
      </head>
      <body
        {...(colorMode && {
          className: `chakra-ui-${colorMode}`,
        })}
      >
        <ChakraProvider colorModeManager={cookieStorageManagerSSR(cookies)} theme={nyaTheme}>
          <Flex boxSize={'full'}>
            <Sidebar />
            <Box flex={1}>{children}</Box>
          </Flex>
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
});

export default function App() {
  return (
    <AppDocument>
      <ChakraProvider theme={nyaTheme}>
        <Outlet />
      </ChakraProvider>
    </AppDocument>
  );
}
