import React, {useState} from 'react';
import './Remover.css';

function Remover() {

	const [students] = useState([
		'Abby Mecoil',
		'Toni Zuck',
		'Peter Hanshfield',
		'Rose Tobernak'
	]);

	return (
		<div className="Remover">
			<h3>Remover:</h3>
			<p>Add a delete button for each student to remove it from the list.</p>
			<ul className="Remover__list">
				{students.map((student, index) => {
					return <li key={index}>{student}</li>;
				})}
			</ul>
		</div>
	);
}

export default Remover;
