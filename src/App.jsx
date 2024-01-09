import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div className=" m-[2rem]">
                <Header />
              </div>
            }
          />
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
