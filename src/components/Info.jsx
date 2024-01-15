import { Typography } from "@material-tailwind/react";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Info() {
  return (
    <div className="mx-[3rem]">
      <Typography className="m-[2rem]" variant="h1">
        Información
      </Typography>
      <Typography className="m-[2rem] w-[85%]">
        Una herramienta de recordatorios en React JS que he desarrollado es una
        aplicación que permite a los usuarios crear, editar y eliminar
        recordatorios de manera intuitiva. Con una interfaz limpia y amigable,
        los usuarios pueden: <br /><br />
        <Typography variant="h4">Crear Recordatorios:</Typography> Agregar nuevos
        recordatorios especificando el título, la descripción y otros detalles
        relevantes.
        <br /> <Typography variant="h4">Editar Recordatorios: </Typography>Modificar la
        información de los recordatorios existentes, ajustando el título, la
        descripción u otros campos según sea necesario.
        <br />
        <Typography variant="h4">Eliminar Recordatorios:</Typography> Eliminar de forma
        sencilla los recordatorios que ya no son necesarios, manteniendo la
        lista organizada. <br />
        <br />
        La aplicación utiliza React JS para construir una interfaz de usuario
        interactiva y receptiva. Además, se implementa una conexión con un
        servidor backend para almacenar y recuperar datos, permitiendo así una
        experiencia persistente y compartida entre diferentes sesiones. Con un
        diseño centrado en la usabilidad, esta herramienta de recordatorios
        busca facilitar la gestión diaria de tareas y eventos importantes para
        los usuarios, proporcionando una solución eficiente y fácil de usar.
      </Typography>
    </div>
  );
}
