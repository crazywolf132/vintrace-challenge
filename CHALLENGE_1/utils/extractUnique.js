import _ from 'lodash';

// A general function used by 2 endpoints to extract unique information from a specific
// field in the given data.
export default function extractUnique(data, field) {
	// Creating a clone of the data provided before working on it.
	return _.clone(data).map((file) => {
		const result = {
			companyName: file.ownerName,
		};

		// I am doing it like this so then we can use the actual `field` variable in the data
		// This will allow for this function to be re-used in more places.
		result[field] = _.uniq(
			file.components.map((component) => component[field])
		);

		return result;
	});
}
