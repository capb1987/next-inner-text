import { z } from "zod";

// Tarea
export const tareaSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  descripcion: z.string(),
  estado: z.enum(["complete", "in-progress", "pending"]),
  asignacion: z.string(),
});

// Array de tareas

export const tareasSchemas = z.array(tareaSchema);

// Json Schema para el json-server

export const jsonSchema = z.object({
  tareas: tareasSchemas,
});
