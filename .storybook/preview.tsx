import React from "react";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
   
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
};

export default preview;
