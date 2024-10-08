// import { fn } from "@storybook/test";
import ThemeProvider from "./ThemeProvider.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeProvider>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {};
// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: "Button",
//   },
// };

// export const Secondary: Story = {
//   args: {
//     primary: false,
//     label: "Button",
//   },
// };

// export const Large: Story = {
//   args: {
//     label: "Button",
//     size: "large",
//   },
// };

// export const Small: Story = {
//   args: {
//     label: "Button",
//     size: "small",
//   },
// };

// export const Test: Story = {
//   args: {
//     primary: false,
//     label: "Button",
//   },
// };
