const taskEditBtn = document.querySelector(".task-edit-btn");
const singleTaskForm = document.querySelector(".single-task-form");
const taskEditId = document.querySelector(".task-edit-id");
const checkbox1 = document.querySelector(".task-edit-completed");
const taskName = document.getElementById("task_name");

singleTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("task_name").value;
  var completed;
  if (checkbox1.checked) {
    console.log("checkboxs");
    taskName.classList.add("task-completed");
    completed = true;
  } else {
    taskName.classList.remove("task-completed");
    completed = false;
  }
  console.log(name);
  const single_task_edit = async (name, completed) => {
    try {
      const res = await axios.patch(
        `http://127.0.0.1:8000/api/v1/tasks/${
          document.getElementById("task_uq").textContent
        }`,
        {
          name,
          completed,
        }
      );

      console.log(res.data.task);
    } catch (err) {
      console.log(err);
    }
  };
  single_task_edit(name, completed);
});
