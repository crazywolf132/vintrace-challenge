import React, { useState, useEffect } from 'react';
import allData from '../../__DATA__';
import './style.sass';

/**
 *  GENERAL NOTES.
 *
 * 1. Due to lack of time, I went with a simple user interface layout.
 * Normally I would have designed this in a program such as Figma and carefully thought out the
 * desing and UX.
 *
 * 2. For this task i decided to go without a backend, as I already made one for task 1...
 * and didnt want to mix the 2 tasks together. It is simple enough to intigrate a backend, simply
 * use a library such as `axios` in the `getData` function instead of the `setTimeout`.
 *
 * 3. As there is no backend the data is loaded on a `setTimeout` that is told to wait 2.5seconds
 * before changing the `setLoading` state to `false`
 *
 * 4. As there was no requirement for this page, it was given the least attention, so there are
 * a few `band-aid` solutions in here that I would never perform on a production ready application.
 * One particular problem is the searchBar, and how that operates. Normally, I would tie that to a context
 * then it can be accessed and saved when navigating pages and returning. Another problem with it, is the way
 * it manipulates the data. As the `useEffect` is listening for any changes to the `searchValue` getData function
 * gets run everytime, even if you press the backspace key and there is nothing in there. There should be checks performed
 * before re-fetching the data.
 *
 * 5. Splitting the screen into seperate components. In the real world, you should ideally split this
 * screen into multiple components. Such as `searchBar`, `Product`, `ProductZone`. This is so then they can be loaded
 * individually and potentially used elsewhere throughout the application.
 *
 * 6. Sass. On this screen I am using SASS to demonstrate my skill with it. Though to be fair, this isnt really the best
 * screen for that as there is no real use for animations or functions. The problem with using SASS on a production project
 * is when you use `className` everywhere, it can be hard to track what is what. That is why Styled-components are slightly better.
 * Though there are pros and cons to both.
 *
 * The Edit screen uses styled-components.
 */

/**
 * Home screen. Used to display the wines, and move to the details screen.
 * @param {*} props
 */
export default function HomeScreen(props) {
	// Used for switching to the details page.
	const { switchPage } = props;

	// Setting the dataState (this is better used when we use a service like Axios)
	const [data, setData] = useState([]);
	// State for the searchBar...
	const [searchValue, setSearch] = useState('');
	// State for the loading screen...
	const [isLoading, setLoading] = useState(true);

	/**
	 * Used on load. It will run the getData() function once, then only again
	 * when `searchValue` changes.
	 */
	useEffect(() => {
		getData();
	}, [searchValue]);

	/**
	 * Collects the information (products) to be displayed in the productZone.
	 *
	 * It is an async function incase you plan to use Axios inside of here.
	 *
	 * Does not return anything.
	 */
	const getData = async () => {
		setTimeout(
			() => {
				setData(
					searchValue === ''
						? allData
						: allData.filter(
								(item) =>
									item.description != null &&
									item.description.includes(searchValue)
						  )
				);
				setLoading(false);
			},
			searchValue === '' ? 2500 : 0
		);
	};

	/**
	 * Used to render the Product Item in the ProductZone
	 * Requires a `description` field inside the `data` object.
	 * @param {Object} data
	 * @param {Number} index
	 */
	const renderProduct = (data, index) => (
		<div className='product' key={index} onClick={() => switchPage(index)}>
			<img src='https://media.nicks.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2012-vinoque-chardonnay.jpg' />
			<span className='name'>{data.description || 'unnamed'}</span>
		</div>
	);

	return (
		<div className='core'>
			<div class='mainContent'>
				<div className='header'>
					<h2 className='title'>Welcome to the cellar</h2>
					<input
						type='text'
						name='searchBox'
						className='search'
						value={searchValue}
						onChange={(e) => {
							if (e.target.value === '') setLoading(true);
							setSearch(e.target.value);
						}}
						placeholder='Search for a wine...'
					/>
				</div>
				{isLoading ? (
					<h3 className='loading'>Loading...</h3>
				) : data.length >= 1 ? (
					<div className='productZone'>{data.map(renderProduct)}</div>
				) : (
					<h3 className='loading'>Nothing found sorry...</h3>
				)}
			</div>
		</div>
	);
}
