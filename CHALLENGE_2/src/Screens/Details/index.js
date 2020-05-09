import React, { useState } from 'react';
import allData from '../../__DATA__';
import {
	CoreContent,
	LeftSide,
	RightSide,
	HeaderSection,
	Product,
	HeaderText,
	ReturnOption,
	FancyHeader,
	TopicHeader,
	TopicValue,
	InfoBox,
	ProductImage,
	EditOption,
	TopicInput,
	ComponentButton,
} from './style';

/**
 * GENERAL NOTES.
 *
 * 1. Due to licensing issues, i only used ASCII art for the arrow and edit
 * icon.
 *
 * 2. Animations on the icons. Normally, I would have better animations on the icons
 * and hopefully they would be pre-decided by a UX engineer.
 *
 * 3. Most of the code below, should be split up into multiple components for the
 * different jobs it does. Eg. The information generator should be its own component so it
 * can be potentially used elsewhere.
 *
 * 4. Normally I would use a theme provider with the styled components so then there
 * isnt multiple places through out the code with similar variables etc. I simply did not
 * add it for this task because I didn't have time, and didnt see it as a high priority for this task.
 *
 * 5. The data is hard selected, normally this would be a prop so then it is dynamic depending
 * on the wine you chose. The reason i went with the idea of hard selecting is because i didn't
 * want to add a context to this application. It simply was overkill for this task.
 *
 * 6. UX. The UX of this design is poor, and I take full ownership for this. This is due to a lack
 * of time for this task. Normally this UI would have been designed in a program such as Figma then
 * had the design approved by a UX person, or myself.
 *
 * 7. The product image would normally come form an internal source as to prevent XSS issues and CORS issues
 * but as none were provided I just went with a single image that was the first to appear on google images.
 *
 * 8. Unlike the Homepage, this page is entirely styled using `styled-components`. Hence the funky named Tags.
 */

export default function DetailsScreen(props) {
	// Used for returning to the home page.
	const { switchPage, wineID } = props;

	// This is where we are getting our data. Defaults to 0 incase anything goes wrong.
	const data = allData[wineID || 0];

	// Setting a state for the current component limit.
	const [componentLimit, setLimit] = useState(5);
	// Setting a state to toggle the edit mode.
	const [editMode, setEditMode] = useState(false);

	/**
	 * Used to create a key-value like tag pair.
	 *
	 * It will take the object and use the `key` and `value` fields
	 * and create the data.
	 *
	 * Currently the fields are all disabled because I never made the
	 * function to replace the current value once modified.
	 *
	 * @param {Object} data
	 * @param {Number} index
	 */
	const renderInformation = (info, index) => (
		<div key={index}>
			<TopicHeader index={`th_${index}`}>
				{info.key
					.replace(/([A-Z])/g, ' $1')
					.replace(/^./, (str) => str.toUpperCase())}
			</TopicHeader>
			{editMode ? (
				<TopicInput
					index={`tv_${index}`}
					type='text'
					disabled
					value={info.value}></TopicInput>
			) : (
				<TopicValue index={`tv_${index}`}>{info.value}</TopicValue>
			)}
		</div>
	);

	/**
	 *
	 * Used to render the components of the wine. It expects
	 * the following fields inside the component: `percentage`, `variety`, `region`
	 *
	 * @param {Object} component
	 * @param {Number} index
	 */
	const renderComponents = (component, index) => (
		<div key={`comp_${index}`}>
			<TopicValue isComponent key={`comp_tv_${index}`}>
				{component.percentage}% <b>{component.variety}</b> from{' '}
				{component.region}
			</TopicValue>
		</div>
	);

	// const

	return (
		<CoreContent>
			<HeaderSection>
				<ReturnOption onClick={switchPage}>←</ReturnOption>
				<HeaderText>Manage Wine</HeaderText>
				<EditOption onClick={() => setEditMode(!editMode)}>
					✎
				</EditOption>
			</HeaderSection>
			<Product>
				<LeftSide>
					<ProductImage src='https://media.nicks.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/2012-vinoque-chardonnay.jpg' />
				</LeftSide>
				<RightSide>
					<FancyHeader>{data.description || 'Unnamed'}</FancyHeader>
					<InfoBox>
						{Object.keys(data)
							.filter((key) => key !== 'components')
							.map((key, index) =>
								renderInformation(
									{ key: key, value: data[key] },
									index
								)
							)}
						<TopicHeader
							style={{
								marginBottom: '0.25em',
								marginTop: '2em',
							}}>
							Components
						</TopicHeader>
						{data.components
							.filter((item, index) => index <= componentLimit)
							.map(renderComponents)}
						{data.components.length > 5 &&
							componentLimit !== data.components.length && (
								<ComponentButton
									onClick={() =>
										setLimit(data.components.length)
									}>
									See the rest
								</ComponentButton>
							)}
					</InfoBox>
				</RightSide>
			</Product>
		</CoreContent>
	);
}
