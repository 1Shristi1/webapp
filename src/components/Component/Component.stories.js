import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-48095623", "frame-48095624"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-48095623",
  },
};
