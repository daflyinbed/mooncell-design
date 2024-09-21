// import { fn } from "@storybook/test";
import BaseButton from "./BaseButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Internal/BaseButton",
  component: BaseButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    disabled: false,
    variant: "solid",
    size: "medium",
  },

  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    template: `<BaseButton v-bind="args">Button</BaseButton>`,
  }),

  argTypes: {
    variant: {
      options: ["solid", "soft", "surface", "outline", "ghost"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
};
export const Sizes: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
    <div style="display: flex; justify-content: space-around;">
      <BaseButton size="small">Button</BaseButton>
      <BaseButton size="medium">Button</BaseButton>
      <BaseButton size="large">Button</BaseButton>
    </div>`,
  }),
};
export const variant: Story = {
  render: () => ({
    components: { BaseButton },
    template: `
    <div style="display: flex; justify-content: space-around;">
      <BaseButton variant="solid">Button</BaseButton>
      <BaseButton variant="soft">Button</BaseButton>
      <BaseButton variant="surface">Button</BaseButton>
      <BaseButton variant="outline">Button</BaseButton>
      <BaseButton variant="ghost">Button</BaseButton>
    </div>`,
  }),
};
