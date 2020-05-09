import { getYearlyBreakdown } from '../../utils/handlers';

const overAllData = [
	require(`../../data/11YVCHAR001.json`),
	require(`../../data/11YVCHAR002.json`),
	require(`../../data/15MPPN002-VK.json`),
];

export default (req, res) => {
	const final = getYearlyBreakdown(overAllData);

	res.json(final);
};
