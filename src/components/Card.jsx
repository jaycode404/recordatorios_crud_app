import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function SimpleCard({ tarea, setForm, borrarTarea }) {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {tarea.titulo}
        </Typography>
        <Typography>{tarea.descripcion}</Typography>
      </CardBody>
      <CardFooter className="flex pt-0 gap-3">
        <Button
          onClick={() => {
            setForm(tarea);
          }}
        >
          Editar
        </Button>
        <Button onClick={() => {borrarTarea(tarea.id)}}>Eliminar</Button>
      </CardFooter>
    </Card>
  );
}
