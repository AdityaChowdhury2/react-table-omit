import { useState } from 'react';
import Table from './Table';
import Modal from './components/Modal';
const columns = [
	{
		name: 'id',
	},
	{
		name: 'title',
	},
	{
		name: 'author',
	},
	{
		name: 'price',
	},
	{
		name: 'publicationYear',
	},
	{
		name: 'genre',
	},
];
const data = [
	{
		id: 1,
		title: 'The Catcher in the Rye',
		author: 'J.D. Salinger',
		price: '$10.00',
		publicationYear: 1951,
		genre: 'Fiction',
	},
	{
		id: 2,
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		price: '$12.00',
		publicationYear: 1960,
		genre: 'Fiction',
	},
	{
		id: 3,
		title: '1984',
		author: 'George Orwell',
		price: '$8.00',
		publicationYear: 1949,
		genre: 'Dystopian',
	},
	{
		id: 4,
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		price: '$11.00',
		publicationYear: 1925,
		genre: 'Fiction',
	},
	{
		id: 5,
		title: 'Moby-Dick',
		author: 'Herman Melville',
		price: '$9.00',
		publicationYear: 1851,
		genre: 'Adventure',
	},
	{
		id: 6,
		title: 'Pride and Prejudice',
		author: 'Jane Austen',
		price: '$10.50',
		publicationYear: 1813,
		genre: 'Romance',
	},
	{
		id: 7,
		title: 'The Hobbit',
		author: 'J.R.R. Tolkien',
		price: '$13.50',
		publicationYear: 1937,
		genre: 'Fantasy',
	},
	{
		id: 8,
		title: 'Brave New World',
		author: 'Aldous Huxley',
		price: '$9.50',
		publicationYear: 1932,
		genre: 'Dystopian',
	},
	{
		id: 9,
		title: 'The Odyssey',
		author: 'Homer',
		price: '$8.50',
		publicationYear: 1970,
		genre: 'Epic Poetry',
	},
	{
		id: 10,
		title: 'Frankenstein',
		author: 'Mary Shelley',
		price: '$11.50',
		publicationYear: 1818,
		genre: 'Gothic Fiction',
	},
];
function App() {
	// Initially all columns will be selected
	const [selected, setSelected] = useState(columns);
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	};

	// Function to handle checkbox selection
	const handleSelect = e => {
		// If the checkbox is checked, add the selected item to the state
		if (e.target.checked) {
			setSelected([...selected, { name: e.target.value }]);
		}
		// If the checkbox is unchecked, remove the item from the state
		else {
			setSelected(selected.filter(item => item.name !== e.target.value));
		}
	};

	return (
		<div className="container px-3 lg:px-10">
			<div className="flex justify-between mt-3">
				<div className="w-1/3">Logo</div>
				<div className="w-2/3 flex justify-end">
					<ul className="flex gap-5 ">
						<li>Home</li>
						<li>About</li>
						<li>Contact</li>
						<li>Login</li>
					</ul>
				</div>
			</div>
			<div className="flex justify-end px-5 my-4 relative">
				<button
					disabled={showModal}
					onClick={openModal}
					className="bg-green-500 py-1 px-3 text-yellow-100 rounded"
				>
					Filter
				</button>
				{/* Modal for column select options */}
				{showModal && (
					<Modal
						columns={columns}
						selected={selected}
						closeModal={closeModal}
						handleSelect={handleSelect}
					/>
				)}
			</div>
			<Table columns={selected} data={data} />
		</div>
	);
}

export default App;
