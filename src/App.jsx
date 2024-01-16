import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Lista from "./components/Lista";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";
import { tareas as tareasDB } from "./DataBase/db.json";
import Swal from "sweetalert2";
import CirculoBlur from "./components/CirculoBlur";

const initalForm = {
  id: null,
  titulo: "",
  descripcion: "",
};

function App() {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);
  const [tareas, setTareas] = useState(tareasDB);
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
    const obtenerTareas = async () => {
      try {
        const response = await fetch("http://localhost:3000/tareas", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        setTareas(data);
      } catch (error) {
        console.log("error:", error);
      }
    };

    obtenerTareas();
  }, []);
  //CREACION DE TAREA
  const crearTarea = async (form) => {
    try {
      const response = await fetch("http://localhost:3000/tareas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        form.id = tareas.length + 1;
        setTareas([...tareas, form]);
        setForm(initalForm);
        console.log("tarea enviada con exito:", form);
      } else {
        alert("error al enviar la tarea");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  //EDITAR TAREA
  const editarTarea = async (form) => {
    console.log("editando", form.id);

    try {
      const response = await fetch(`http://localhost:3000/tareas/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setTareas((prevTareas) => {
          const nuevasTareas = prevTareas.map((t) =>
            t.id === form.id ? { ...t, form } : t
          );
          return nuevasTareas;
        });
        setForm(initalForm);
        console.log("tarea enviada con exito:", form);
      } else {
        alert("error al enviar la tarea");
      }
    } catch (error) {
      console.log("Error:", error);
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
        const response = await fetch(`http://localhost:3000/tareas/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
          const nuevasTareas = tareas.filter((t) => t.id !== id);
          setTareas(nuevasTareas);
        } else {
          alert("error al enviar la tarea");
        }
        Swal.fire({
          title: "Eliminada correctamente!",
          icon: "success",
        });
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };
  return (
    <>
      <Router>
        <CirculoBlur/>
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
