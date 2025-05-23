import { montserrat } from "@/ui/fonts";
import Link from "next/link";
import TareaList from "@/components/client/TareaList";

export default async function Home() {
  const apiUrl = process.env.ENV_API_SERVER as string;

  return (
    <section className="flex flex-col items-center justify-center p-4 ">
      <div className="w-full md:w-[90%] lg:w-3/4 text-center space-y-5">
        <h1
          className={`${montserrat.className} text-xl md:text-2xl lg:text-3xl`}
        >
          Task Manager
        </h1>
        <p>Esto es la seccion principal de Tareas</p>

        <TareaList apiUrl={apiUrl} />

        <div className="flex flex-col items-center justify-center">
          <Link
            href="/tasks/add"
            className="block text-center font-bold uppercase hover:bg-blue-900 transition-colors duration-300 text-base md:text-lg lg:text-xl my-5 w-full md:w-1/2 lg:w-1/3  bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Agregar tarea
          </Link>
        </div>
      </div>
    </section>
  );
}
