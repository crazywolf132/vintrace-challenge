import React from 'react';

function Page(props) {
	const { query: data } = props;

	const renderEntry = (entry, index) => (
		<div style={{ marginBottom: '10px' }}>
			{console.log(entry)}
			<p key={index}>
				{entry.year} - {entry.data.join(', ')}
			</p>
		</div>
	);

	const renderCompany = (company, index) => (
		<div key={index}>
			<h2>{company.companyName}</h2>
			<>
				{Object.keys(company.yearVarietyCombo).map((key, index) =>
					renderEntry(
						{ year: key, data: company.yearVarietyCombo[key] },
						index
					)
				)}
			</>
			<hr style={{ marginBottom: '1em' }} />
		</div>
	);

	// Render data...
	return <>{data.map(renderCompany)}</>;
}

// This gets called on every request
Page.getInitialProps = ({ query }) => {
	return { query: query.data };
};

export default Page;
