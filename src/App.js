import Navbar from './components/NavBar';
import Characters from './components/Characters';

function App() {
	// const [gifs, getGifs] = useState([]);

	// const getFetch = () => {
	// 	const apiKey = 'https://rickandmortyapi.com/api/character';
	// 	fetch(apiKey)
	// 		.then((response) => response.json())
	// 		.then((resp) => getGifs(resp.results));
	// };

	// useEffect(() => {
	// 	getFetch();
	// }, []);

	return (
		<>
			<Navbar title="Rick and Morty" />
			<div className="container mt-5">
				<Characters/>
			</div>
		</>
	);
}
export default App;
