const tasks = [
  "Nettoyer le sol 👨🏻",
  "Ranger la vaisselle 👨🏻‍🦰",
  "Vider la poubelle 👩🏻‍🦰",
];

const task1 = document.querySelector(".task-1");
const task2 = document.querySelector(".task-2");
const task3 = document.querySelector(".task-3");
const message = document.querySelector(".message");
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");

let task = 1;

const handleTask = () => {
  message.textContent = `Tâche n°${task}: ${tasks[task - 1]}`;

  if (task >= 1) task1.classList.add("active");
  else task1.classList.remove("active");

  if (task >= 2) task2.classList.add("active");
  else task2.classList.remove("active");

  if (task >= 3) task3.classList.add("active");
  else task3.classList.remove("active");
};

handleTask();

//AEL
btnNext.addEventListener("click", () => {
  if (task < 3) task += 1;
  handleTask();
});

btnPrevious.addEventListener("click", () => {
  if (task > 1) task -= 1;
  handleTask();
});
