// .storybook/preview.js

export const parameters = {
  options: {
    storySort: {
      order: [
        "Component Library",
        ["Atoms", "Molecules", "Organisms"],
        "*",
        "WIP",
      ],
      method: "alphabetical",
    },
  },
  backgrounds: {
    default: "canva background",
    values: [
      {
        name: "canva background",
        value: "#F1F5FC",
      },
      {
        name: "black",
        value: "black",
      },
      {
        name: "grey",
        value: "grey",
      },
      {
        name: "white",
        value: "white",
      },
    ],
  },
};
