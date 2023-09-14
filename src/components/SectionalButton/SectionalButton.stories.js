import { SectionalButton } from ".";

export default {
  title: "Components/SectionalButton",
  component: SectionalButton,
  argTypes: {
    state: {
      options: ["pressed", "active", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Transaction Limits",
    selected: true,
    state: "pressed",
    className: {},
    buttonLabelClassName: {},
  },
};
