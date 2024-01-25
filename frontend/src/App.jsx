import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import SuperheroList from "./components/SuperheroList";
import SuperheroForm from "./components/SuperheroForm";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SuperheroList />} />
        <Route path="/add" element={<SuperheroForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
