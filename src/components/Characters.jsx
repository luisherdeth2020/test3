import { useEffect, useState } from 'react';
import getPerson from './getPerson';

const Characters = () => {
	const [gifs, getGifs] = useState([]);
	useEffect(() => {
		getPerson().then((person) => getGifs(person));
	}, []);
    // console.log(gifs.image);
	return (
		<div className="row">
			{gifs.map((person, index) => (
				<div key={index} className="col mb-4">
					<div className="card" style={{ minWidth: '200px' }}>
						<img src={person.url} alt={person.title} />
						<div className="card-body">
							<h5 className="card-title">{person.title}</h5>
							<hr />
							<p>location: {person.location}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Characters;
