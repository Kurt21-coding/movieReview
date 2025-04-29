import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
	return (
		<>
			<MovieProvider>
			<NavBar />
			<main className="main-content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route
						path="/movie/:id"
						element={
							<div className="movie-page">
								<h1>Movie</h1>
								<p>Movie page content goes here.</p>
							</div>
						}
					/>
					<Route
						path="/about"
						element={
							<div className="not-found">
								<h1>404 Not Found</h1>
								<p>The page you are looking for does not exist.</p>
							</div>
						}
					/>
				</Routes>
			</main>
			</MovieProvider>
		</>
	);
}

export default App;
