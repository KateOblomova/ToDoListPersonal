const addButton = document.getElementById("to-do-button");
const toDoListUl = document.getElementById("to-do-list");
const input = document.getElementById("to-do-input");
let items = document.getElementsByTagName("li");
let userInputArr = [
  "Make yourself a cup of coffee",
  "Stop crying",
  "Get to work",
];
let checkboxArr = [];

userInputArr.forEach((task) => {
  const createdLI = document.createElement("li");
  const createdCheckbox = document.createElement("input");
  const createdLabel = document.createElement("label");

  createdLabel.htmlFor = "list-item";
  createdLabel.className = "list-label"; //??
  createdLI.className = "list-item-container"; //??
  createdCheckbox.type = "checkbox";
  createdCheckbox.id = "list-item";

  createdLabel.appendChild(document.createTextNode(task));

  toDoListUl.appendChild(createdLI);
  createdLI.appendChild(createdCheckbox);
  createdLI.appendChild(createdLabel);

  checkboxArr.push(createdCheckbox);
});

input.value = "Type your task here...";

console.dir(input);

input.addEventListener("click", () => {
  input.value = "";
});

addButton.addEventListener("click", () => {
  const createdLI = document.createElement("li");
  const createdCheckbox = document.createElement("input");
  const createdLabel = document.createElement("label");

  createdLabel.htmlFor = "list-item";
  createdLabel.className = "list-label";
  createdCheckbox.type = "checkbox";
  createdCheckbox.id = "list-item";

  createdLabel.appendChild(document.createTextNode(input.value));

  toDoListUl.appendChild(createdLI);
  createdLI.appendChild(createdCheckbox);
  createdLI.appendChild(createdLabel);

  input.value = "Type your task here...";
  userInputArr.push(createdLabel);

  checkboxArr.push(createdCheckbox);
  console.dir(createdCheckbox);
  console.dir(createdLI);
  console.dir(toDoListUl);
});

toDoListUl.addEventListener("click", function (e) {
  if (e.target.className === "list-label") {
    const editUserInput = prompt(
      "Enter new text:",
      "Make yourself more coffee"
    );
    e.target.innerText = editUserInput;

    console.dir(e.target);

    console.dir(checkboxArr);
  }
  for (let i = 0; i < checkboxArr.length; i++) {
    if (checkboxArr[i].checked === true) {
      checkboxArr[i].checked = false;
    } //else checkboxArr[i].checked = "false";
  }
});

console.dir(userInputArr);
console.dir(toDoListUl);
