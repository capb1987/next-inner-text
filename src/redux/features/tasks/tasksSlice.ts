import { DraftTarea, Tarea } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
  tasks: Tarea[];
}

const initialState: TasksState = {
  tasks:
    typeof window !== "undefined" && localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks") as string)
      : [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTarea>) => {
      const task: Tarea = {
        id: crypto.randomUUID(),
        ...action.payload,
      };

      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));

      if (process.env.ENV_API_SERVER) {
        fetch(`${process.env.ENV_API_SERVER}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al crear tarea");
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error("Error al crear tarea", error);
          });
      }
    },
    editTask: (state, action: PayloadAction<Tarea>) => {
      const task = action.payload;
      const index = state.tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        state.tasks[index] = task;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
        syncWithServer(task, "PUT");
      }
    },
  },
});

function syncWithServer(task: Tarea, method: "PUT" | "POST") {
  if (process.env.ENV_API_SERVER) {
    fetch(`${process.env.ENV_API_SERVER}/${method}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar tarea");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al actualizar tarea", error);
      });
  }
}

export const { addTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
