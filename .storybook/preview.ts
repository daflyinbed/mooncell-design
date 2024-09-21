import ThemeProvider from "../src/components/ThemeProvider/ThemeProvider.vue";
import type { Preview } from "@storybook/vue3";
import "../src/styles/index.css";
import "../src/styles/default-theme.css";

import "../src/styles/reset.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || "light";
      return {
        components: { story, ThemeProvider },
        template: `
        <div class="${theme}">
          <ThemeProvider>
            <story/>
          </ThemeProvider>
        </div>`,
      };
    },
  ],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        // The label to show for this toolbar item
        title: "mode",
        // Array of plain string values or MenuItem shape (see below)
        items: ["light", "dark"],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
};

export default preview;
