"use client";

import { getTareas } from "@/data";
import { Tareas } from "@/types";
import { useEffect, useState } from "react";
import TareaCard from "@/components/server/TareaCard";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";

export default function TareaList({ apiUrl }: { apiUrl: string }) {
  const [data, setData] = useState<Tareas>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getTareas(apiUrl);
        setData(data ?? []);
      } catch (error) {
        console.error("Error al obtener tareas", error);
      } finally {
      }
    };
    loadData();
  }, [apiUrl]);

  return (
    <>
      {data.length === 0 ? (
        <p>No hay tareas</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 overflow-x-auto pb-4">
          <div className="flex-1 min-w-[280px]">
            <div className="bg-green-500 text-white p-3 rounded-t-md sticky top-0 z-10">
              <h2 className="font-bold text-center flex gap-3 items-center justify-center text-sm md:text-base lg:text-xl">
                <FaCheckCircle /> Complete
              </h2>
            </div>
            <div className="bg-green-50 p-2 space-y-4 rounded-b-md h-[500px] overflow-y-auto">
              {data
                ?.filter((tarea) => tarea.estado === "complete")
                .map((tarea) => (
                  <TareaCard key={tarea.id} tarea={tarea} />
                ))}
            </div>
          </div>

          {/* Columna In Progress */}
          <div className="flex-1 min-w-[280px]">
            <div className="bg-yellow-500 text-white p-3 rounded-t-md sticky top-0 z-10">
              <h2 className="font-bold text-center flex gap-3 items-center justify-center text-sm md:text-base lg:text-xl">
                <FaArrowsRotate /> In Progress
              </h2>
            </div>
            <div className="bg-yellow-50 p-2 space-y-4 rounded-b-md h-[500px] overflow-y-auto">
              {data
                ?.filter((tarea) => tarea.estado === "in-progress")
                .map((tarea) => (
                  <TareaCard key={tarea.id} tarea={tarea} />
                ))}
            </div>
          </div>

          <div className="flex-1 min-w-[280px]">
            <div className="bg-red-700 text-white p-3 rounded-t-md sticky top-0 z-10">
              <h2 className="font-bold text-center flex gap-3 items-center justify-center text-sm md:text-base lg:text-xl">
                <MdOutlinePendingActions /> Pending
              </h2>
            </div>
            <div className="bg-red-50 p-2 space-y-4 rounded-b-md h-[500px] overflow-y-auto">
              {data
                ?.filter((tarea) => tarea.estado === "pending")
                .map((tarea) => (
                  <TareaCard key={tarea.id} tarea={tarea} />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
