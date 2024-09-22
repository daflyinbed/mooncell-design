// import { fn } from "@storybook/test";
import MButton from "./MButton.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/MButton",
  component: MButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof MButton>;

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
    size: "2",
  },

  render: (args) => ({
    components: { MButton },
    setup() {
      return { args };
    },
    template: `<MButton v-bind="args">Button</MButton>`,
  }),

  argTypes: {
    variant: {
      options: ["solid", "soft", "surface", "outline", "ghost"],
      control: { type: "select" },
    },
    size: {
      options: ["1", "2", "3", "4"],
      control: { type: "select" },
    },
  },
};
export const Sizes: Story = {
  render: () => ({
    components: { MButton },
    template: `
    <div style="display: flex; justify-content: space-around;">
      <MButton size="1">1</MButton>
      <MButton size="2">2</MButton>
      <MButton size="3">3</MButton>
      <MButton size="4">4</MButton>
    </div>`,
  }),
};
export const variant: Story = {
  render: () => ({
    components: { MButton },
    template: `
    <div style="display: flex; justify-content: space-around;">
      <MButton variant="solid">solid</MButton>
      <MButton variant="soft">soft</MButton>
      <MButton variant="surface">surface</MButton>
      <MButton variant="outline">outline</MButton>
      <MButton variant="ghost">ghost</MButton>
    </div>`,
  }),
};
export const asChild: Story = {
  render: () => ({
    components: { MButton },
    template: `<MButton variant="ghost" as-child><a href=".">ghost</a></MButton>`,
  }),
};
