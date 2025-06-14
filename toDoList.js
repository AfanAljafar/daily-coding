let toDoList = [
  { task: "Belajar JavaScript", done: false },
  { task: "Ngoding projek", done: false },
];

const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function selectMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Select Menu (1-6): ", (selected) => {
    chooseMenu(parseInt(selected));
  });
}

function pauseAndReturn(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("\nPress ENTER To Return To The Menu...", () => {
    callback();
  });
}

function Menu() {
  console.log(`
      ========= TO-DO LIST =========
      1. Show All Tasks       [Read]
      2. Add New Task         [Create]
      3. Edit Task            [Update]
      4. Delete Task          [Delete]
      5. Update status
      6. Exit
      ===============================
      `);
  selectMenu();
}
Menu();

function chooseMenu(selected) {
  switch (selected) {
    case 1:
      listToDo();
      pauseAndReturn(Menu);
      break;
    case 2:
      addToDo();
      break;
    case 3:
      editToDo();
      break;
    case 4:
      deleteToDo();
      break;
    case 5:
      updateStatus();
      break;
    case 6:
      console.log("Keluar...");
      rl.close();
      process.exit();
    default:
      console.log("Pilihan tidak valid.");
      pauseAndReturn(Menu);
  }
}

function listToDo() {
  console.log("List To Do : ");
  if (toDoList.length === 0) {
    console.log("no tasks registered yet");
  } else {
    toDoList.forEach((todo, i) => {
      const status = todo.done ? "[✓]" : "[ ]";
      console.log(`${i + 1}. ${status} ${todo.task}`);
    });
  }
}

function addToDo() {
  rl.question("Add New Task: ", (task) => {
    toDoList.push({ task, done: false });
    console.log("Task added successfully.");
    listToDo();
    pauseAndReturn(Menu);
  });
}

function editToDo() {
  listToDo();
  rl.question("select the task to be edited : ", (num) => {
    const index = parseInt(num) - 1;
    if (toDoList[index]) {
      rl.question("Input Changes: ", (newTask) => {
        toDoList[index].task = newTask;
        console.log("task edited successfully");
        listToDo();
        pauseAndReturn(Menu);
      });
    } else {
      console.log("number selected is not valid, please select valid number");
      editToDo();
    }
  });
}

function deleteToDo() {
  listToDo();
  rl.question("Select The Task To Be Deleted : ", (num) => {
    const index = parseInt(num) - 1;
    if (toDoList[index]) {
      toDoList.splice(index, 1);
      console.log("Task Deleted.");
      listToDo();
    } else {
      console.log("number selected is not valid...");
    }
    pauseAndReturn(Menu);
  });
}

function updateStatus() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  listToDo();
  rl.question("Mark Tasks As Completed : ", (num) => {
    const index = parseInt(num) - 1;
    if (toDoList[index]) {
      toDoList[index].done = true;
      console.log("Task Marked Completed.");
      listToDo();
      pauseAndReturn(Menu);
    } else {
      console.log("number selected is not valid");
      pauseAndReturn(Menu);
    }
  });
}
