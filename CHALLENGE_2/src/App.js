import React, { useState } from 'react';
import HomeScreen from './Screens/Home';
import DetailsScreen from './Screens/Details';
import './style.sass';

/**
 * GENERAL NOTES.
 *
 * 1. In a production enviroment, you would want to use a proper navigation library to navigate
 * between pages. In this task, I did not. The reason for this is because the homepage wasn't
 * even in the requirements, so it was a quick add. It doesnt need anything too advanced to work.
 *
 * 2. I wouldn't use a state like this for cross-page data, but I have because using a context
 * for this task would have been overkill.
 *
 * 3. I am using React-Hooks throughout the project as they are cleaner, smaller and easier to use.
 * In the industry it might be hard for some people to understand how this project works as react-hooks
 * are fairly new and not everyone knows them. I am more than willing to teach the new standard to anyone
 * who wants to learn.
 */
function App() {
	const [isDetailsPage, setDetailsPage] = useState(true);
	const [loadedWine, setWine] = useState(2);

	return (
		<>
			{isDetailsPage ? (
				<DetailsScreen
					wineID={loadedWine}
					switchPage={() => setDetailsPage(false)}
				/>
			) : (
				<HomeScreen
					switchPage={(wineID) => {
						setWine(wineID);
						setDetailsPage(true);
					}}
				/>
			)}
		</>
	);
}

export default App;
