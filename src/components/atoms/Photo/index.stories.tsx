import type { Meta, StoryObj } from "@storybook/react";
import { Photo } from "./index";

const meta = {
  title: " Atom/Photo",
  component: Photo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Photo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "https://placehold.co/300/75ea47",
    alt: "Flature",
  },
};

export const Secondary: Story = {
  args: {
    src: "https://placehold.co/150/75ea47",
    alt: "Flature Small",
  },
};
