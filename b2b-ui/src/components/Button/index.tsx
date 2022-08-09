import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface ButtonUIProps extends ButtonProps {
  label: string;
}

export const ButtonUI = ({ label, ...args }: ButtonUIProps) => {
  return <Button {...args}>{label}</Button>;
};
