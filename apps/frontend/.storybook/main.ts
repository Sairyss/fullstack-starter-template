/* eslint-disable @typescript-eslint/no-explicit-any */
import { rootMain } from '../../../.storybook/main';

import { mergeConfig } from 'vite';

module.exports = {
  ...rootMain,
  core: { ...rootMain.core, builder: '@storybook/builder-vite' },
  stories: [
    ...rootMain.stories,
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon',
    ...(rootMain.addons || []),
  ],
  features: {
    emotionAlias: false,
  },
  async viteFinal(config: any) {
    return mergeConfig(config, {});
  },
};
