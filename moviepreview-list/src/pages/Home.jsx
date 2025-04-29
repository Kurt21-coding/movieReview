import MovieCard from "../components/MovieCard";
import { useState, useEffect, use } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/App.css";
import "../css/Home.css";

function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const data = await getPopularMovies();
				setMovies(data);
			} catch (error) {
				console.error("Error fetching movies:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchMovies();
	}, []);
	
	const handleSearch = async (event) => {
        event.preventDefault();
		if (!searchQuery.trim()) return;
		if (loading) return;
		setLoading(true);
		try {
			const searchResults = await searchMovies(searchQuery);
			console.log(searchResults);
			setMovies(searchResults);
			setError(null);
		} catch (error) {
			setError("Something went wrong while searching for movies.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="home">
				<form action="" onSubmit={handleSearch} className="search-form">
					<input 
                        type="text" 
                        placeholder="Search..." 
                        className="search-input" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        />
					<button type="submit" className="search-btn">
						Search
					</button>
				</form>
				{error && <p className="error">Error: {error.message}</p>}

				{loading && <p className="loading">Loading...</p>}
				{!loading && movies.length === 0 && <p>No movies found.</p>}
				<div className="movies-grid">
					{movies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		</>
	);
}

export default Home;
