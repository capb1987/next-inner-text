import FormTask from "@/components/client/FormTask";
import { montserrat } from "@/ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Task Manager - Editar Tarea",
  description: "Aqui se edita una tarea",
};
export default function EditTask() {
  return (
    <section className="flex flex-col items-center justify-center p-4">
      <div>
        <h1
          className={`${montserrat.className} text-xl md:text-2xl lg:text-3xl`}
        >
          Task Edit Page
        </h1>
        <p>Esto es la seccion para Editar tareas</p>
      </div>

      <div className="flex flex-col items-center w-full md:w-3/4 lg:w-1/2 text-center rounded-md bg-white/70 p-4 md:p-8 my-3 text-gray-400 min-h-[500px] shadow-2xl">
        <h3 className="text-lg md:text-xl p-2 font-bold">
          ¿Quieres agregar una tarea? 📝 Vamos!
        </h3>
        <FormTask />
      </div>
    </section>
  );
}
