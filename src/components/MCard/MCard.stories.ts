// import { fn } from "@storybook/test";
import MCard from "./MCard.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/MCard",
  component: MCard,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof MCard>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    variant: "surface",
    size: "1",
  },

  render: (args) => ({
    components: { MCard },
    setup() {
      return { args };
    },
    template: `<MCard v-bind="args">card</MCard>`,
  }),

  argTypes: {
    variant: {
      options: ["surface", "classic", "ghost"],
      control: { type: "select" },
    },
    size: {
      options: ["1", "2", "3", "4", "5"],
      control: { type: "select" },
    },
  },
};
export const Sizes: Story = {
  render: () => ({
    components: { MCard },
    template: `
    <div style="display:flex; flex-direction: column; gap: 4px">
      <MCard size="1">1</MCard>
      <MCard size="2">2</MCard>
      <MCard size="3">3</MCard>
      <MCard size="4">4</MCard>
      <MCard size="5">5</MCard>
    </div>`,
  }),
};
export const variant: Story = {
  render: () => ({
    components: { MCard },
    template: `
    <div style="display:flex; flex-direction: column; gap: 4px">
      <MCard variant="surface">surface</MCard>
      <MCard variant="classic">classic</MCard>
      <MCard variant="ghost" asChild><button>card</button></MCard>
    </div>`,
  }),
};
