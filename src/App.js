import { useState, useEffect } from "react";
//Libreries
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import { Login } from "./components/Login";
import { List } from "./components/List";
import { Detail } from "./components/Detail";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Result } from "./components/Result";
import { Favorites } from "./components/Favorites";

//Styles
import "./styles/bootstrap.min.css";
import "./styles/app.css";

function App() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favsInLocal = localStorage.getItem("favs");

    if (favsInLocal !== null) {
      const favsArray = JSON.parse(favsInLocal);
      setFavs(favsArray);
    }
  }, []);

  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem("favs");
    let tempMoviesInFav;

    if (favMovies === null) {
      tempMoviesInFav = [];
      console.log(tempMoviesInFav);
    } else tempMoviesInFav = JSON.parse(favMovies);

    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    const movieData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId,
    };

    let movieIsInArray = tempMoviesInFav.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });

    if (!movieIsInArray) {
      tempMoviesInFav.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFav));
      setFavs(tempMoviesInFav);
      console.log("se agregó la pelicula");
    } else {
      let moviesLeft = tempMoviesInFav.filter(
        (oneMovie) => oneMovie.id !== movieData.id
      );
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      setFavs(moviesLeft);
      console.log("Se eliminó la pelicula");
    }
  };

  return (
    <BrowserRouter>
      <Header favs={favs} />
      <div className="App container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/list"
            element={<List addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/detail" element={<Detail />} />
          <Route
            path="/result"
            element={<Result addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favs={favs}
                addOrRemoveFromFavs={addOrRemoveFromFavs}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
