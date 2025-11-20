import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./index";

const meta = {
  title: "Atom/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    text: "This is a Primary Title",
  },
};

export const Secondary: Story = {
  args: {
    type: "sencondary",
    text: "This is a Secondary Title",
  },
};
