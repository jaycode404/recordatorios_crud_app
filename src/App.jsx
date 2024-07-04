import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Lista from "./components/Lista";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";
import { db } from "./DataBase/firebase";
import { ref, get, set, child, push, update, remove } from "firebase/database";

import Swal from "sweetalert2";
import CirculoBlur from "./components/CirculoBlur";
import { v4 as uuidv4 } from "uuid";

const initalForm = {
  id: null,
  titulo: "",
  descripcion: "",
};

function App() {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);
  const [tareas, setTareas] = useState([]);
  const [form, setForm] = useState(initalForm);
  const contMargin = `m-[2rem]`;
  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  const handleDark = (e) => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  //GET
  useEffect(() => {
    const getTareas = async () => {
      const tareasRef = ref(db, "tareas");
      return get(tareasRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const tareasArr = snapshot.val();
            if (!tareasArr) return [];
            const newTareasArr = Object.keys(tareasArr).map((key) => ({
              id: key,
              ...tareasArr[key],
            }));
            setTareas(newTareasArr);
          } else {
            console.log("no se encontraron tareas");
            return [];
          }
        })
        .catch((err) => {
          console.log(err);
          return [];
        });
    };
    getTareas();
  }, []);

  const randomId = () => {
    return uuidv4();
  };

  // Función para crear una nueva tarea
  const crearTarea = async (form) => {
    const tareasRef = ref(db, `tareas/${randomId()}`);
    set(tareasRef, form)
      .then(() => {
        console.log("Tarea creada con éxito:");
        Swal.fire({
          icon: "success",
          title: "Enviado Con Éxito",
          text: "La tarea se ha enviado con éxito.",
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch((error) => {
        console.error("Error al crear la tarea:", error);
      });
  };

  //EDITAR TAREA
  const editarTarea = async (form) => {
    try {
      const taskRef = ref(db, `tareas/${form.id}`);

      await update(taskRef, {
        titulo: form.titulo,
        descripcion: form.descripcion,
      });
      console.log("Tarea actualizada exitosamente");
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };
  //BORRAR TAREA
  const borrarTarea = async (id) => {

    console.log("borrando", id);

    const confirm = await Swal.fire({
      title: "Eliminar tarea?",
      showDenyButton: true,
      confirmButtonText: "Eliminar",
    });

    if (confirm.isConfirmed) {
      try {
        remove(ref(db, `tareas/${id}`));

        console.log("Tarea eliminada correctamente");

        const nuevasTareas = tareas.filter((t) => t.id !== id);
        setTareas(nuevasTareas);

        Swal.fire({
          title: "Eliminada correctamente!",
          icon: "success",
        });
      } catch (error) {
        console.error("Error al eliminar la tarea:", error);
        Swal.fire({
          title: "Error",
          text: "Hubo un error al eliminar la tarea",
          icon: "error",
        });
      }
    }
  };

  return (
    <>
      <Router>
        <CirculoBlur />
        <div className={`${contMargin} dark:bg-black  `}>
          <Header />
        </div>
        <div className="flex justify-end mr-[5rem] dark:text-white">
          <button onClick={handleDark}>
            {theme === "dark" ? "Light ☼" : "Dark ☾"}
          </button>
        </div>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <div className={`${contMargin}`}>
                  <div className="flex gap-[1rem]">
                    <div className={`${contMargin}`}>
                      <Form
                        form={form}
                        setForm={setForm}
                        crearTarea={crearTarea}
                        editarTarea={editarTarea}
                        theme={theme}
                      />
                    </div>
                    <div className={`${contMargin}`}>
                      <Lista
                        tareas={tareas}
                        setForm={setForm}
                        borrarTarea={borrarTarea}
                      />
                    </div>
                  </div>
                </div>
              }
            />
            <Route
              path="info"
              element={
                <div className={`${contMargin}`}>
                  <Info />
                </div>
              }
            />
            <Route
              path="lista"
              element={
                <div className={`${contMargin}`}>
                  <Lista
                    tareas={tareas}
                    setForm={setForm}
                    borrarTarea={borrarTarea}
                  />
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
