import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { Styles } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props) => ({
    body: {
      // bg: mode('default', 'var(--bg-color-primary)')(props),
    },
  }),
};

const components = {
  // custom style for chakraui components
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles,
  components,
});

export default theme;
