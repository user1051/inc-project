import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ClockLoader, RingLoader } from "react-spinners";
import { Button } from "@mui/material";
import { debounce, result } from "lodash";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import WebSearch from "./WebSearch";
import NavBar from "./NavBar";
import ImageSearch from "./ImageSearch";

function App() {
	const [results, setResults] = useState([]);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState();
	const [imageResults, setImageResults] = useState([]);
	const [totalResults, setTotalResults] = useState("");
	const [relatedSearchResults, setRelatedSearchResults] = useState([]);

	// console.log(process.env.REACT_APP_API_KEY);

	const fetchResults = async () => {
		if (query) {
			setLoading(true);
			await axios
				.get(
					`https://app.zenserp.com/api/v2/search?apikey=${process.env.REACT_APP_API_KEY}&q=${query}`
				)
				.then(function (response) {
					console.log(response);
					setResults(response.data.organic);
					setRelatedSearchResults(response.data.related_searches);
					setTotalResults(response.data.number_of_results);
					setLoading(false);
				})
				.catch(function (error) {
					console.error(error);
				});
			await axios
				.get(
					`https://app.zenserp.com/api/v2/search?apikey=${process.env.REACT_APP_API_KEY}&q=${query}&tbm=isch`
				)
				.then(function (response) {
					console.log("image search data", response);
					setImageResults(response.data.image_results);
					// setLoading(false);
				})
				.catch(function (error) {
					console.error(error);
				});
		} else {
			alert("Please enter a query");
		}
	};
	// fetchResults();
	console.log(results);
	return (
		<div className="">
			<div className="flex justify-center items-center p-2  w-full bg-white sticky top-0">
				<form onSubmit={() => fetchResults()} className="flex items-center">
					<input
						placeholder="type here to search..."
						className="outline outline-1 rounded-tl-sm p-1 rounded-bl-sm"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Link to="/search">
						<Button
							type="submit"
							variant="contained"
							onClick={() => fetchResults()}
							className="p-1"
						>
							Search
						</Button>
					</Link>
				</form>
			</div>
			{results.length > 0 && <NavBar />}
			{results.length > 0 && (
				<p className="ml-28 text-xs my-2">About {totalResults} results</p>
			)}
			<Routes>
				<Route
					path="/search"
					element={
						<WebSearch
							loading={loading}
							results={results}
							relatedResults={relatedSearchResults}
						/>
					}
				/>
				<Route
					path="/images"
					element={
						<ImageSearch loading={loading} imageResults={imageResults} />
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
