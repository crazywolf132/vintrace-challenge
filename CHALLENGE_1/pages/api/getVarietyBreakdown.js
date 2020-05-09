import _ from 'lodash';

import extractUnique from '../../utils/extractUnique';

const overAllData = [
	require(`../../data/11YVCHAR001.json`),
	require(`../../data/11YVCHAR002.json`),
	require(`../../data/15MPPN002-VK.json`),
];

export default (req, res) => {
	const temp = extractUnique(overAllData, 'variety');

	const final = temp.map((company) => {
		let unique = 0;
		company.variety.forEach((type) => {
			// At the time of writing this, this was the only way i could think of
			// but i am positive there are 1000's of other ways. If i had more time
			// and a better understanding of the requirements, I am positive I would
			// be able to do this a better way.

			if (_.filter(temp, { variety: [type] }).length === 1) {
				// This means its unique, as only 1 item in the list of companies has it AKA (this company)
				unique++;
			}
		});
		company.uniquePercentage = (unique / company.variety.length) * 100;

		return company;
	});

	res.json(final);
};
