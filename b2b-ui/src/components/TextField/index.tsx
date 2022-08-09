import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

export const TextFieldUI = ({ ...args }: TextFieldProps) => {
  return <TextField {...args} />;
};
