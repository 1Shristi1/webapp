import { FilterChip } from ".";

export default {
  title: "Components/FilterChip",
  component: FilterChip,
  argTypes: {
    style: {
      options: [
        "unselected-trailing-icon",
        "selected-leading-icon",
        "unselected",
        "selected",
        "selected-trailing-icon",
        "unselected-leading-icon",
      ],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "pressed", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Billed",
    style: "unselected-trailing-icon",
    isSelected: true,
    state: "disabled",
    className: {},
  },
};
