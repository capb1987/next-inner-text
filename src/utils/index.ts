import { Tarea } from "@/types";

export const getNames = (state: Tarea["estado"]) => {
  const names = {
    complete: "Complete",
    "in-progress": "In Progress",
    pending: "Pending",
  };
  return names[state];
};

export const changeColor = (state: Tarea["estado"]) => {
  const colors = {
    complete: "bg-green-500 p-3 font-extrabold rounded-md",
    "in-progress": "bg-yellow-500 p-3 text-black font-extrabold rounded-md",
    pending: "bg-red-700 p-3 font-extrabold rounded-md",
  };
  return colors[state];
};

export const arrayStateTareas = [
  { state: "complete", name: "Complete" },
  { state: "in-progress", name: "In Progress" },
  { state: "pending", name: "Pending" },
];

export const arrayUsers = [
  { key: "user", name: "User" },
  { key: "admin", name: "Admin" },
  { key: "tester", name: "Tester" },
];
