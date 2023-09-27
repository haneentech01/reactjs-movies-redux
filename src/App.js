import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />}></Route>
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
