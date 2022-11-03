export default function getPerson() {
	const apiURL = 'https://rickandmortyapi.com/api/character';
	return (
    fetch(apiURL)
		.then((response) => response.json())
		.then((resp) => {
			const { data = [] } = resp;

			const gifs = data.map((personajes) => ({
				url: personajes.image,
				title: personajes.name,
			}));
			return gifs;
		})
    );
}
