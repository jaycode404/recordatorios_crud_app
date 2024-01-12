import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";
import Lista from "./components/Lista";
import { Form } from "./components/Form";
import { useEffect, useState } from "react";
import { tareas as tareasDB } from "./DataBase/db.json";

const initalForm = {
  id: null,
  titulo: "",
  descripcion: "",
};
const contMargin = "m-[2rem]";
function App() {
  const [tareas, setTareas] = useState(tareasDB);
  const [form, setForm] = useState(initalForm);

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
  }, [tareas]);
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
      alert("tarea borrada");
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className={`${contMargin}`}>
                <Header />
                <div className="flex gap-[4rem]">
                  <div className={`${contMargin}`}>
                    <Form
                      form={form}
                      setForm={setForm}
                      crearTarea={crearTarea}
                      editarTarea={editarTarea}
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
          >
            <Route path="info" element={<Info />} />
            <Route path="lista" element={<Lista />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
