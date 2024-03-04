import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: ["../docs/**/*.mdx", "../docs/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
   
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
