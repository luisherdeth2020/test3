export default function getPerson() {
	const apiURL = 'https://rickandmortyapi.com/api/character';
	return (
    fetch(apiURL)
		.then((response) => response.json())
		.then((resp) => {
			const { results = [] } = resp;

			const gifs = results.map((personajes) => ({
				url: personajes.image,
				title: personajes.name,
				location:personajes.location.name,
			}));
			return gifs;
		})
    );
}
