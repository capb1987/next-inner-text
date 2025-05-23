import { z } from "zod";
import { jsonSchema, tareaSchema } from "@/schemas";

export type Tarea = z.infer<typeof tareaSchema>;

export type DraftTarea = Omit<Tarea, "id">;

export type JsonType = z.infer<typeof jsonSchema>;

export type Tareas = Tarea[];
