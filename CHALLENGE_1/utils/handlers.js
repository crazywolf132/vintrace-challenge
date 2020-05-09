import _ from 'lodash';

/**
 * Used to generate the data for the getYearBreakdown endpoints.
 * @param {List[Object]} givenData
 */
export const getYearlyBreakdown = (givenData) => {
	return _.clone(givenData).map((file) => {
		// Designing out final object
		const data = {
			companyName: file.ownerName,
			yearlyPercentage: [],
			uniquePercentage: 0,
		};

		// Using a list of seen years so we dont get duplicates
		let seen = [];
		// Naturally the _.sortBy will arrange the data in the reverse order to what we want...
		// so we flip it so then we have the most recent year at the top, then sorted by their
		// highest - lowest percentage
		let newData = _.reverse(
			_.sortBy(file.components, ['year', 'percentage'])
		);

		// Going through all the sorted and flipped components list.
		newData.forEach((component) => {
			// Checking to see if we have already seen this year.
			if (!seen.includes(component.year)) {
				// We havent seen this year, so we are adding it to our final object...
				data.yearlyPercentage.push({
					percentage: component.percentage,
					year: component.year,
				});
				// We are also appending this year to the list of `seen`, so we dont
				// add it again
				seen.push(component.year);
			}
		});

		// returning the final object into the list of objects...
		// ultimately replacing the current object in that position in the list.
		return data;
	});
};

// Used by the printYearAndVarietyBreakdown endpoints...
export const printYearAndVarietyBreakdown = (givenData) => {
	// Cloning the givenData before we start working with it.
	return _.clone(givenData).map((file) => {
		// Creating a list of previously seen years.
		// This will be used to sort our data.
		let seen = {};

		// Going through each companies components list (each data files component feild);
		file.components.map((component) => {
			// Checking to see if there is already an object setup for this year inside of `seen`
			if (!(component.year in seen)) {
				// There is not... So we will initialise a blank list inside of `seen` with the key
				// of the year of this component.
				seen[component.year] = [];
			}
			// Regardless of if the year has already been seen (handled above if it hasnt)
			// we are going to push this variety into the list.
			seen[component.year].push(component.variety);
		});

		// We are now going through every object in the `seen` object,
		// and making sure each list does not have any duplicate values
		Object.keys(seen).map((key) => (seen[key] = _.uniq(seen[key])));

		// returning the new object to be added to the list.
		return {
			companyName: file.ownerName,
			yearVarietyCombo: seen,
		};
	});
};
