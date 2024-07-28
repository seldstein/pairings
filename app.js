import { getRandomElements } from "./functions.js";
import { renderArrayAsList } from "./functions.js";

let saints = [
  "Joan of Arc",
  "Thomas Aquinas",
  "Edith Stein",
  "Saint Nikolas",
  "Saint Francis of Assisi",
  "Saint Teresa of Avila",
  "Saint Augustine",
  "Saint Therese of Lisieux",
  "Saint John Paul II",
  "Saint Patrick",
  "Saint Catherine of Siena",
  "Saint Francis Xavier",
  "Saint Ignatius of Loyola",
  "Saint Bernadette",
  "Saint Joseph",
  "Saint Mary Magdalene",
  "Saint Peter",
  "Saint Paul",
  "Saint Matthew",
  "Saint Mark",
  "Saint Luke",
  "Saint John",
  "Saint James",
  "Saint Jude",
  "Saint Andrew",
  "Saint Bartholomew",
  "Saint Philip",
  "Saint Simon",
  "Saint Matthias",
  "Saint Stephen",
];

const saintsListEl = document.querySelector("#saints-list");
const generateBtn = document.querySelector("#generate");
const resetBtn = document.querySelector("#reset");
const numberOfStudentsInput = document.querySelector("#number-of-students");
const newSaintInput = document.getElementById("new-saint");
const allSaintsList = document.getElementById("all-saints");
const pairingsHeading = document.getElementById("pairings");
const localSaints = JSON.parse(localStorage.getItem("saints"));

// Generate random saints list
generateBtn.onclick = () => {
  const randomSaints = getRandomElements(saints, numberOfStudentsInput.value);

  pairingsHeading.classList.toggle("hidden");
  renderArrayAsList(randomSaints, saintsListEl);
  generateBtn.disabled = true;
  resetBtn.disabled = false;
  numberOfStudentsInput.value = "";
  numberOfStudentsInput.disabled = true;
};

numberOfStudentsInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateBtn.click();
  }
});

// Reset
resetBtn.addEventListener("click", (event) => {
  saintsListEl.innerHTML = "";
  pairingsHeading.classList.toggle("hidden");
  generateBtn.disabled = false;
  resetBtn.disabled = true;
  numberOfStudentsInput.disabled = false;
});

// Add saint
newSaintInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    saints.push(newSaintInput.value);
    saints.sort(); // Sort the saints array alphabetically
    localStorage.setItem("saints", JSON.stringify(saints));
    allSaintsList.innerHTML = "";
    renderArrayAsList(saints, allSaintsList); // Render the sorted saints array
    newSaintInput.value = "";
  }
});

if (localSaints) {
  saints = localSaints;
}

renderArrayAsList(saints, allSaintsList);

// If the number entered is greater than the number of array elements, allow duplicates

// Allow deleting saints
