import type { StorybookConfig } from '@storybook/types';

export const rootMain: StorybookConfig = {
  stories: [],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }

  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs
  //   // Return the altered config
  //   return config;
  // },
};

