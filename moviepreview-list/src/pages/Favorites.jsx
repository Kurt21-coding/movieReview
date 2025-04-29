import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
	const { favorites } = useMovieContext();

	if (favorites) {
		return (
			<div className="favorites">
				<h2>Your Favorites</h2>
				<div className="movies-grid">
					{favorites.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		);
	}
	return (
		<div className="favorite-page">
			<h1>Favorites</h1>
			<p>Favorite page content goes here.</p>
		</div>
	);
}

export default Favorites;
