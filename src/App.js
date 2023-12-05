import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componets/NavBar";
import { Home } from "./componets/Home";
import About from "./componets/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./componets/Alert";
import Login from "./componets/Login";
import Signup from "./componets/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <NavBar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
