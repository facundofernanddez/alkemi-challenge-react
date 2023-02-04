//Libreries
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import { Login } from "./components/Login";
import { List } from "./components/List";
import { Detail } from "./components/Detail";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Result } from "./components/Result";

//Styles
import "./styles/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
