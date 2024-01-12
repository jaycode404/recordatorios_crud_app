import { Typography } from "@material-tailwind/react";
import React from "react";
import { SimpleCard } from "./Card";

export default function Lista({ tareas, setForm, borrarTarea }) {
  return (
    <div>
      <Typography variant="h1">
        Aqui apareceran todos los recordatorios
      </Typography>

      <div>
        {tareas.map((tarea) => {
          return (
            <div key={tarea.id}>
              <SimpleCard setForm={setForm} tarea={tarea} borrarTarea={borrarTarea} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
