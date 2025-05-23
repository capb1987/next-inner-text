import { tareasSchemas } from "@/schemas";

export const getDatabyId = async (data: string) => {
  return data;
};

export const getTareas = async (api: string) => {
  if (!api) return [];

  try {
    const localData = localStorage.getItem("tasks");
    if (localData) {
      const parsedLocal = JSON.parse(localData);
      const parsedTareas = tareasSchemas.safeParse(parsedLocal);
      if (parsedTareas.success) {
        return parsedTareas.data;
      }
    }

    const datos = await fetch(`${api}`);
    if (!datos.ok) {
      return [];
    }
    const json = await datos.json();
    const parsedJson = tareasSchemas.safeParse(json);
    if (parsedJson.success) {
      localStorage.setItem("tasks", JSON.stringify(parsedJson.data));
      return parsedJson.data;
    }
  } catch (error) {
    console.error("Error al obtener tareas", error);
  }
};
