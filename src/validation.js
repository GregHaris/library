import cacheDOM from "./domUtils";

const { inputs } = cacheDOM();

export function validateForm() {
  inputs.forEach((input) => {
    if (!input.type === "checkbox") {
      input.required = true;
    }
  });
}
