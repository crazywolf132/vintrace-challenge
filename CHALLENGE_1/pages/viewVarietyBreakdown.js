import React from 'react';

function Page(props) {
	const { query: data, subtitle, field } = props;

	const renderEntry = (entry, index) => (
		<div style={{ marginBottom: '10px' }}>
			<p key={index}>{entry}</p>
		</div>
	);

	const renderCompany = (company, index) => (
		<div key={index}>
			<h2>{company.companyName}</h2>
			<h4>{subtitle}:</h4>
			<>{company[field].map(renderEntry)}</>
			<hr style={{ marginBottom: '1em' }} />
		</div>
	);

	// Render data...
	return (
		<>
			{/* <p>{JSON.stringify(data, null, 2)}</p> */}
			{data.map(renderCompany)}
		</>
	);
}

// This gets called on every request
Page.getInitialProps = ({ query }) => {
	return { query: query.data, subtitle: query.subtitle, field: query.field };
};

export default Page;
