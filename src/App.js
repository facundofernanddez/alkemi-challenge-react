//Libreries
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import { Login } from "./components/Login";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

//Styles
import "./styles/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
