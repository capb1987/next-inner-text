import type { Tarea } from "@/types";
import { changeColor, getNames } from "@/utils";
import Link from "next/link";

type TareaCardProps = {
  tarea: Tarea;
};
export default function TareaCard({ tarea }: TareaCardProps) {
  return (
    <div
      key={tarea.id}
      className="bg-gradient-to-br from-blue-300 via-blue-500 to-blue-900 text-white py-2 px-4 lg:p-6 rounded-md flex flex-col justify-between space-y-4 text-left shadow-md"
    >
      <p className="flex flex-col md:flex-row border-b-[1px] py-3  border-gray-200 gap-3 justify-between items-center">
        <span className="font-semibold  text-sm md:text-base uppercase">
          Titulo:
        </span>
        <span className="text-base text-center">{tarea.titulo}</span>
      </p>
      <p className="flex flex-col md:flex-row border-b-[1px] py-3 gap-3 justify-between items-center">
        <span className="font-semibold text-sm md:text-base uppercase">
          Descripción:
        </span>
        <span className="text-justify text-xs md:text-sm">
          {tarea.descripcion}
        </span>
      </p>
      <p className="flex flex-col md:flex-row border-b-[1px] py-3 justify-between items-center">
        <span className="font-semibold text-sm md:text-base uppercase">
          Estado:
        </span>
        <span className={`${changeColor(tarea.estado)}`}>
          {getNames(tarea.estado)}
        </span>
      </p>
      <p className="flex flex-col md:flex-row border-b-[1px] py-3 justify-between items-center">
        <span className="font-semibold text-sm md:text-base uppercase">
          Asignación:
        </span>
        <span>{tarea.asignacion}</span>
      </p>

      <Link
        href={`/tasks/edit/${tarea.id}`}
        className="block text-center font-bold uppercase hover:bg-gray-900 transition-colors duration-300 text-base md:text-lg lg:text-xl my-5 w-full xl:w-3/4 bg-gray-400 text-white py-2 px-4 rounded-md mx-auto"
      >
        Editar tarea
      </Link>
    </div>
  );
}
