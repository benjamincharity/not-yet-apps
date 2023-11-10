import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
  withDefaultProps,
} from '@chakra-ui/react';

export const semanticTokens = {
  colors: {
    backdropBg: {
      default: 'whiteAlpha.800',
      _dark: 'blackAlpha.800',
    },
    bg: {
      default: 'white',
      _dark: 'gray.900',
    },
    bgAlpha: {
      default: 'blackAlpha.100',
      _dark: 'whiteAlpha.100',
    },
    bgMuted: {
      default: 'gray.50',
      _dark: 'gray.800',
    },
    bgSecondLevel: {
      default: 'gray.300',
      _dark: 'gray.700',
    },
    border: {
      default: 'gray.300',
      _dark: 'gray.600',
    },
    borderMuted: {
      default: 'gray.100',
      _dark: 'gray.700',
    },
    error: {
      default: 'red.500',
      _dark: 'red.400',
    },
    mark: {
      default: 'pink.400',
      _dark: 'pink.200',
    },
    muted: {
      default: 'gray.500',
      _dark: 'gray.200',
    },
    rowStripe: {
      default: 'blackAlpha.50',
      _dark: 'whiteAlpha.50',
    },
    selectedColor: {
      default: 'blue.500',
      _dark: 'blue.400',
    },
    selectedColorMuted: {
      default: 'blue.100',
      _dark: 'blue.100',
    },
    selectedAccent: {
      default: 'green.500',
      _dark: 'green.800',
    },
    selectedMuted: {
      default: 'teal.50',
      _dark: 'teal.900',
    },
    text: {
      default: 'gray.600',
      _dark: 'gray.200',
    },
    textInverted: {
      default: 'gray.200',
      _dark: 'gray.600',
    },
    title: {
      default: 'gray.600',
      _dark: 'gray.200',
    },
    utilityBg: {
      default: 'gray.700',
      _dark: 'whiteAlpha.500',
    },
  },
};

const colors = {
  brand: {
    900: '#bada55',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const fonts = {
  body: 'IBM Plex Sans, ui-sans-serif, sans-serif',
  heading: 'IBM Plex Sans, ui-sans-serif, sans-serif',
  // NOTE: Double declaration of monospace is not a mistake.
  mono: 'Courier New, monospace, monospace',
};

const fontSizes = {
  xxs: '10px',
};

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 300,
  medium: 400,
  semibold: 500,
  bold: 600,
  extrabold: 700,
  black: 700,
};

const config: ThemeConfig = {
  disableTransitionOnChange: false,
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const themeProps = {
  config,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  semanticTokens,
};

export const nyaTheme: any = extendTheme(
  withDefaultColorScheme({ colorScheme: 'gray' }),
  withDefaultProps({
    defaultProps: {
      variant: 'outline',
    },
    components: ['Input', 'NumberInput', 'PinInput', 'Select', 'Textarea'],
  }),
  themeProps
);
