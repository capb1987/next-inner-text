"use client";

import { arrayStateTareas, arrayUsers } from "@/utils";
import { useState, useEffect } from "react";
import RadioButtonStatus from "@/components/client/RadioButtonStatus";
import SelectUserAssigned from "@/components/client/SelectUserAssigned";
import type { DraftTarea, Tarea } from "@/types";

import { addTask, editTask } from "@/redux/features/tasks/tasksSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

import { useRouter, useParams } from "next/navigation";

export default function FormTask() {
  const [error, setError] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const tasksSlices = useAppSelector((state) => state.tasks);
  const [task, setTask] = useState<DraftTarea>({
    titulo: "",
    descripcion: "",
    estado: "complete",
    asignacion: "",
  });

  const router = useRouter();
  const params = useParams();

  const slug = params.slug;
  const id = Array.isArray(slug) ? slug[0] : slug;

  useEffect(() => {
    if (id) {
      const taskToEdit = tasksSlices.tasks.find((t: Tarea) => t.id === id);

      if (taskToEdit) {
        setTask({
          ...taskToEdit,
          titulo: taskToEdit.titulo,
          descripcion: taskToEdit.descripcion,
          estado: taskToEdit.estado,
          asignacion: taskToEdit.asignacion,
        });
        setCurrentTaskId(id);
        setIsEditing(true);
      }
    }
  }, [id, tasksSlices.tasks]);

  const dispatch = useAppDispatch();
  //const tasks = useAppSelector((state) => state.tasks);

  const { titulo, descripcion } = task;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(task).includes("")) {
      setError(true);

      return;
    }
    setError(false);

    if (isEditing && currentTaskId) {
      const updatedTask: Tarea = {
        id: currentTaskId,
        ...task,
      };
      dispatch(editTask(updatedTask));
      router.push("/");
    } else {
      dispatch(addTask(task));
      router.push("/");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid my-3 grid-cols-1 md:grid-cols-2 gap-4 space-y-2 h-full w-full"
    >
      {error && (
        <div className="bg-red-500 col-span-2 text-white p-3 rounded-md w-full uppercase font-bold">
          Todos los campos son obligatorios
        </div>
      )}
      <div className="gap-4 flex flex-col md:flex-row col-span-2 justify-between items-center h-full">
        <label
          className="text-sm sm:text-base font-semibold uppercase"
          htmlFor="titulo"
        >
          Título:
        </label>
        <input
          type="text"
          id="titulo"
          className="w-full p-2 border-gray-300 border-2 rounded-md"
          placeholder="Escribe el título de la tarea"
          value={titulo}
          name="titulo"
          onChange={handleChange}
        />
      </div>
      <div className="col-span-2 gap-3 flex flex-col  justify-between items-center">
        <label
          className="text-sm sm:text-base font-semibold uppercase w-full text-center md:text-start"
          htmlFor="descripcion"
        >
          Descripción:
        </label>
        <textarea
          name="descripcion"
          id="descripcion"
          className="w-full min-h-[150px] p-2 resize-none border-gray-300 border-2 rounded-md"
          placeholder="Escribe la descripción de la tarea"
          value={descripcion}
          onChange={handleChange}
        ></textarea>
      </div>

      <hr className="col-span-2" />
      <div className=" col-span-2  gap-4 flex flex-col md:flex-row justify-between md:items-center">
        <span className="text-sm sm:text-base font-semibold uppercase text-start">
          Estado:
        </span>

        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between w-full">
          {arrayStateTareas.map((tareaItem) => (
            <RadioButtonStatus
              key={tareaItem.state}
              tarea={tareaItem}
              onChange={handleChange}
            />
          ))}
        </div>
      </div>
      <hr className="col-span-2" />
      <div className="gap-4 col-span-2 flex flex-col md:flex-row justify-between md:items-center">
        <label
          htmlFor="asignacion"
          className="text-sm sm:text-base font-semibold uppercase"
        >
          tipo de usuario:
        </label>
        <select
          name="asignacion"
          id="asignacion"
          className="w-full p-2 border-gray-300 border-2 rounded-md"
          onChange={handleChange}
        >
          <option value="" className="text-xs sm:text-sm md:text-base">
            -- Selecciona un usuario --
          </option>
          {arrayUsers.map((user) => (
            <SelectUserAssigned key={user.key} user={user} />
          ))}
        </select>
      </div>

      <div className="col-span-2 gap-4 flex justify-center items-center">
        <button className="bg-gray-500 transition-colors duration-300 hover:bg-gray-700 text-white p-2 md:p-3 rounded-md w-full md:w-3/4 lg:w-1/2 uppercase font-bold cursor-pointer">
          {isEditing ? "Actualizar Tarea" : "Agregar Tarea"}
        </button>
      </div>
    </form>
  );
}
