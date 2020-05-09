import { Router } from 'express';
import _ from 'lodash';
import extractUnique from '../utils/extractUnique';
import {
	printYearAndVarietyBreakdown,
	getYearlyBreakdown,
} from '../utils/handlers';

// Creating the router
const router = Router();

// Setting up a global path of where the data is.
// This is done incase this BaseRoute file ever moves in production
// or for any other reason... We can still get the data.
const home = `${process.cwd()}/data`;
// Creating a list filled with the data from the provided data files.
const overAllData = [
	require(`${home}/11YVCHAR001.json`),
	require(`${home}/11YVCHAR002.json`),
	require(`${home}/15MPPN002-VK.json`),
];

/**
 * GetYearBreakdown page
 */
router.get('/getYearBreakdown', async (req, res) => {
	res.app.render(req, res, '/viewYearBreakdown', {
		data: getYearlyBreakdown(overAllData),
	});
});

/**
 * GetVarietyBreakdown page
 */
router.get('/getVarietyBreakdown', async (req, res) => {
	res.app.render(req, res, '/viewVarietyBreakdown', {
		data: extractUnique(overAllData, 'variety'),
		field: 'variety',
		subtitle: 'Types',
	});
});

/**
 * PrintVarietyBreakdown page
 */
router.get('/printVarietyBreakdown', async (req, res) => {
	res.app.render(req, res, '/viewVarietyBreakdown', {
		data: extractUnique(overAllData, 'region'),
		field: 'region',
		subtitle: 'Regions',
	});
});

/**
 * PrintYearAndVarietyBreakdown page
 */
router.get('/printYearAndVarietyBreakdown', async (req, res) => {
	res.app.render(req, res, '/viewYearAndVarietyBreakdown', {
		data: printYearAndVarietyBreakdown(overAllData),
	});
});

export default router;
