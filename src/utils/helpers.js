export const getCoverTitle = (type) => {
  switch (type) {
    case "lab":
      return "Lab Report";

    case "defence":
      return "Defence Report";

    case "project":
      return "Project Report";

    default:
      return "Theory Assignment";
  }
};
