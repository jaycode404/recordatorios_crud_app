import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export function SimpleCard({ tarea, setForm, borrarTarea }) {
  const [mostrar, setMostrar] = useState(false);
  const [showButton, setShowButton] = useState(true);

  //MOSTRAR button
  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath.includes("/lista")) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, []);

  const clickMostrar = () => {
    setMostrar(!mostrar);
  };

  return (
    <Card className="mt-6 w-76 max-w-64">
      <CardBody className="dark:bg-gray-600 dark:rounded-t-[.5rem]">
        <Typography
          variant="h5"
          color="blue-gray"
          className={`mb-2 overflow-x-hidden max-w-64 dark:text-white ${
            mostrar ? "z-index-9" : "whitespace-nowrap overflow-ellipsis"
          }`}
          onClick={clickMostrar}
        >
          {tarea.titulo}
        </Typography>
        <Typography
          className={`mb-2 overflow-x-hidden max-w-64 dark:text-gray-300 ${
            mostrar
              ? "z-index-9"
              : "whitespace-nowrap overflow-ellipsis dark:text-gray-300"
          }`}
          onClick={clickMostrar}
        >
          {tarea.descripcion}
        </Typography>
      </CardBody>
      <CardFooter className="flex pt-0 gap-3 dark:bg-gray-600 dark:rounded-b-[.5rem]">
        {showButton && (
          <Button
            onClick={() => {
              setForm(tarea);
            }}
          >
            Editar
          </Button>
        )}
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
