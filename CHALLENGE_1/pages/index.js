import React from 'react';
function IndexPage() {
	return (
		<>
			<h1>Please visit one of the following URLS</h1>
			<a href='/getYearBreakdown'>/getYearBreakdown</a>
			<a href='/getVarietyBreakdown'>/getVarietyBreakdown</a>
			<a href='/printVarietyBreakdown'>/printVarietyBreakdown</a>
			<a href='/printYearAndVarietyBreakdown'>
				/printYearAndVarietyBreakdown
			</a>

			<h3>Or one of the following API endpoints</h3>
			<a href='/api/getYearBreakdown'>/api/getYearBreakdown</a>
			<a href='/api/getVarietyBreakdown'>/api/getVarietyBreakdown</a>
			<a href='/api/printVarietyBreakdown'>/api/printVarietyBreakdown</a>
			<a href='/api/printYearAndVarietyBreakdown'>
				/api/printYearAndVarietyBreakdown
			</a>
		</>
	);
}

export default IndexPage;
