import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonUI } from ".";

export default {
  title: "Components/Button",
  component: ButtonUI,
} as ComponentMeta<typeof ButtonUI>;

const Template: ComponentStory<typeof ButtonUI> = (args) => (
  <ButtonUI {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  label: "Button",
};
