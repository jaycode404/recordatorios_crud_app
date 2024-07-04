import { Typography } from "@material-tailwind/react";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Info() {
  return (
    <div className="mx-[3rem]">
      <Typography className="m-[2rem] dark:text-white" variant="h1">
        Información
      </Typography>
      <Typography className="m-[2rem] dark:text-white">
        Esta herramienta la he creado para poner en practica mi uso de librerias
        de componente, nuevos estilos css, darkmode y el modelo CRUD: <br />
        <br />
        <Typography className=" dark:text-white" variant="h4">
          Crear Recordatorios:
        </Typography>{" "}
        Agregar nuevos recordatorios especificando el título, la descripción y
        otros detalles relevantes.
        <br /> <Typography variant="h4">Editar Recordatorios: </Typography>
        Modificar la información de los recordatorios existentes, ajustando el
        título, la descripción u otros campos según sea necesario.
        <br />
        <Typography variant="h4">Eliminar Recordatorios:</Typography> Eliminar
        de forma sencilla los recordatorios que ya no son necesarios,
        manteniendo la lista organizada. <br />
        <br />
        Una aplicacion sencilla que utiliza React JS para construir una interfaz
        de usuario interactiva y receptiva. Además, se implementa una conexión
        con un servidor backend de Firebase para almacenar y recuperar datos,
        permitiendo así una experiencia persistente y compartida entre
        diferentes sesiones. Con un diseño centrado en la usabilidad, esta
        herramienta de recordatorios busca facilitar la gestión diaria de tareas
        y eventos importantes para los usuarios, proporcionando una solución
        eficiente y fácil de usar.
      </Typography>
    </div>
  );
}
