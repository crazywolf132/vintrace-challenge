function YearBreakdownPage(props) {
	const { query: data } = props;

	const renderYear = (entry, index) => (
		<div style={{ marginBottom: '10px' }}>
			<p key={index}>
				{entry.percentage}% - {entry.year}
			</p>
		</div>
	);

	const renderCompany = (company, index) => (
		<div key={index}>
			<h2>{company.companyName}</h2>
			<>{company.yearlyPercentage.map(renderYear)}</>
			<hr style={{ marginBottom: '1em' }} />
		</div>
	);

	// Render data...
	return <>{data.map(renderCompany)}</>;
}

// This gets called on every request
YearBreakdownPage.getInitialProps = ({ query }) => {
	return { query: query.data };
};

export default YearBreakdownPage;
