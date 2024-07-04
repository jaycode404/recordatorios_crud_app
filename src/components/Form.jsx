import { Card, Input, Button, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
export function Form({ form, setForm, crearTarea, editarTarea, theme }) {
  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando tarea:", form);
    if (!form.titulo && !form.descripcion) {
      Swal.fire({
        icon: "warning",
        title: "Llena todos los campos...",
      });
      return;
    }
    if (!form.id) {
      crearTarea(form);
    } else {
      console.log("editando");
      editarTarea(form);
      
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <div className="flex flex-col gap-2 w-[14rem] ">
        <Typography
          variant="h4"
          color="blue-gray"
          className="dark:text-gray-100"
        >
          Agrega una tarea:
        </Typography>

        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col mt-0.5 mb-2 w-[100%] gap-3"
        >
          <Typography className="dark:text-gray-100">
            Nombre de tarea
          </Typography>
          <Input
            className="dark:text-gray-100"
            color={theme === "dark" ? "white" : "black"}
            type="text"
            label="Ejercicio, tarea..."
            name="titulo"
            value={form.titulo}
            size="lg"
            placeholder="Ir al gimnasio, hacer la cena..."
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <Typography className="dark:text-gray-100">
            Descripcion de tarea
          </Typography>
          <Input
            className="dark:text-gray-100"
            color={theme === "dark" ? "white" : "black"}
            type="text"
            name="descripcion"
            value={form.descripcion}
            size="lg"
            label="Agregar mas peso..."
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <Button className="mt-3 w-full" fullWidth type="submit">
            {form.id ? "Guardar Cambios" : "Crear"}
          </Button>
        </form>
      </div>
    </Card>
  );
}
