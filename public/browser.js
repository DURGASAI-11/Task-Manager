const faEdit = document.querySelectorAll(".fa-edit");
const faDelete = document.querySelectorAll(".fa-delete");
const editLink = document.querySelector(".edit-link");
const taskLinks = document.querySelector(".task-links");
const formSub = document.querySelector(".task-form");
const taskInput = document.getElementById("taskValue");
const delBtn = document.querySelector(".delete-btn");

//
//
faDelete.forEach((deletebtn) => {
  deletebtn.addEventListener("click", (el) => {
    const ele = el.target;
    const { taskdelid } = ele.dataset;
    const deleteTasks = async () => {
      try {
        const res = await axios.delete(
          `http://127.0.0.1:8000/api/v1/tasks/${taskdelid}`
        );
        window.location.href = "http://127.0.0.1:8000/api/v1/Alltasks";
      } catch (err) {
        console.log(err);
      }
    };
    deleteTasks();
  });
});

formSub.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskInput1 = taskInput.value;
  const createTasks = async (name) => {
    try {
      const respo = await axios.post("http://127.0.0.1:8000/api/v1/tasks", {
        name,
      });

      if (respo.data.task.completed === false) {
        window.location.href = "http://127.0.0.1:8000/api/v1/Alltasks";
      }
    } catch (err) {
      console.log(err);
    }
  };
  const taskInput2 = taskInput1.toLowerCase();
  createTasks(taskInput2);
});

faEdit.forEach((element) => {
  element.addEventListener("click", (e) => {
    const { taskid } = editLink.dataset;
    const el = e.target;
    const showTask = async (taskid) => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/v1/tasks/${taskid}`
        );
      } catch (err) {
        console.log(err);
      }
    };
    showTask(taskid);
  });
});
