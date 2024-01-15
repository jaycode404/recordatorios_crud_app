import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

export function SimpleCard({ tarea, setForm, borrarTarea }) {
  const [mostrar, setMostrar] = useState(false);

  const clickMostrar = (e) => {
    setMostrar(!mostrar);
  };
  return (
    <Card className="mt-6 w-76 max-w-64">
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className={`mb-2 overflow-x-hidden max-w-64 ${
            mostrar ? "z-index-9" : "whitespace-nowrap overflow-ellipsis "
          }`}
          onClick={(e) => {
            clickMostrar(e);
          }}
        >
          {tarea.titulo}
        </Typography>
        <Typography
          className={`mb-2 overflow-x-hidden max-w-64 ${
            mostrar ? "z-index-9" : "whitespace-nowrap overflow-ellipsis "
          }`}
          onClick={(e) => {
            clickMostrar(e);
          }}
        >
          {tarea.descripcion}
        </Typography>
      </CardBody>
      <CardFooter className="flex pt-0 gap-3">
        <Button
          onClick={() => {
            setForm(tarea);
          }}
        >
          Editar
        </Button>
        <Button
          onClick={() => {
            borrarTarea(tarea.id);
          }}
        >
          Eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}
