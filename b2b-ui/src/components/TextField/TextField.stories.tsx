import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextFieldUI } from ".";

export default {
  title: "Components/TextField",
  component: TextFieldUI,
} as ComponentMeta<typeof TextFieldUI>;

const Template: ComponentStory<typeof TextFieldUI> = (args) => (
  <TextFieldUI {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined",
};
