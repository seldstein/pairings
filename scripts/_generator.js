// Select two lists
// Return both, shuffled and matched up

import { show, getById, renderArrayAsUl, shuffleArray } from "./_functions.js";
import { allLists } from "./_allLists.js";

// Grab elements
const [
  section,
  container,
  renderedLists,
  form,
  firstSelect,
  secondSelect,
  generateBtn,
  resetBtn,
] = getById(
  "generator-section",
  "pairings-container",
  "rendered-lists",
  "generator-form",
  "first-select",
  "second-select",
  "generate",
  "reset"
);

// Prevent page reload on submit
form.addEventListener("submit", (event) => event.preventDefault());

// Render options
for (let list of allLists) {
  const option = `<option>${list.name}</option>`;
  firstSelect.innerHTML += option;
  secondSelect.innerHTML += option;
}

// Render lists
function renderSelectedList(selectElement) {
  const selectedList = allLists.find(
    (list) => list.name === selectElement.value
  );
  console.log(selectedList.list);
  shuffleArray(selectedList.list);
  console.log(selectedList.list);

  renderedLists.appendChild(renderArrayAsUl(selectedList.list));
}

firstSelect.addEventListener("change", () => {
  renderSelectedList(firstSelect);
});

secondSelect.addEventListener("change", () => {
  renderSelectedList(secondSelect);
});

generateBtn.onclick = function () {
  if (form.checkValidity() === true) {
    show(container);
  }
};

// Could be useful: https://www.smashingmagazine.com/2024/08/generating-unique-random-numbers-javascript-using-sets/
