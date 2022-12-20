import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/movies" element={<Movies />}/>
        <Route exact path="/movies/:id" element={<MovieInfo />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
