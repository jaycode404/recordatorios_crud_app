import { Typography } from "@material-tailwind/react";
import React from "react";
import { SimpleCard } from "./Card";

export default function Lista({ tareas, setForm, borrarTarea }) {
  return (
    <div className="mx-[3rem]">
      <Typography variant="h2" className="dark:text-gray-100">
        Aqui apareceran todos los recordatorios
      </Typography>

      <div className="flex flex-wrap gap-3 w-[85%]">
        {tareas.map((tarea) => {
          return (
            <div key={tarea.id}>
              <SimpleCard
                setForm={setForm}
                tarea={tarea}
                borrarTarea={borrarTarea}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
