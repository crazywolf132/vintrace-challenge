import styled from 'styled-components';

export const CoreContent = styled.div`
	justify-content: space-between;
	width: 100%;
	height: 100%;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 0.3px 2.2px rgba(0, 0, 0, 0.011),
		0 0.7px 5.3px rgba(0, 0, 0, 0.016), 0 1.3px 10px rgba(0, 0, 0, 0.02),
		0 2.2px 17.9px rgba(0, 0, 0, 0.024), 0 4.2px 33.4px rgba(0, 0, 0, 0.029),
		0 10px 80px rgba(0, 0, 0, 0.04);
	overflow: hidden;
`;

/**
 * EVERYTGHING TODO WITH THE HEADER
 */
export const HeaderSection = styled.div`
	display: flex;
	font-size: 16px;
	margin: 1em auto;
	width: 100%;
	justify-content: center;
	border-bottom: 1px #e2e2e2 solid;
`;

export const ReturnOption = styled.h1`
	flex: 1;
	text-align: right;
	margin-left: 1em;

	:hover {
		transform: scale(1.02);
		cursor: pointer;
	}
`;

export const EditOption = styled.h1`
	flex: 1;
	text-align: right;
	margin-right: 1em;

	:hover {
		transform: scale(1.02);
		cursor: pointer;
	}
`;

export const HeaderText = styled.h2`
	flex: 90%;
	text-align: center;
	font-weight: 500;
`;

// Used to section the product information away from the header.
export const Product = styled.div`
	display: flex;
`;

/**
 * EVERYTHING TODO WITH THE LEFT SIDE
 */

export const LeftSide = styled.div`
	flex: 1;
	padding: 1.5em;
	text-align: center;
`;

export const ProductImage = styled.img`
	max-width: 100%;
	border-radius: 4px;
`;

/**
 * EVERYTHING TODO WITH THE RIGHT SIDE
 */
export const RightSide = styled.div`
	flex: 2;
	padding: 1.5em;
	text-align: center;
`;

export const FancyHeader = styled.h1`
	font-family: 'Great Vibes', cursive;
	font-size: 4em;
	font-weight: normal;
	margin-bottom: 1em;
`;

export const InfoBox = styled.div`
	position: relative;
	left: 40%;
	text-align: left;
	margin: 0 auto;
`;

export const TopicHeader = styled.h3`
	font-family: 'Baloo 2', cursive;
	font-weight: bold;
	font-size: 20px;
	margin-bottom: -20px;
`;

export const TopicValue = styled.h4`
	font-family: 'Baloo 2', cursive;
	font-weight: 500;
    font-size: 16px;
    ${(props) => (props.isComponent ? 'margin-top: 0;' : '')}
	margin-bottom: ${(props) => (props.isComponent ? '10px' : '1em')};
`;

export const TopicInput = styled.input`
	margin-top: 20px;
	width: 25%;
	border: none;
	padding: 1em;
	background-color: #f1f1f1;
	border-radius: 4px;
`;

export const ComponentButton = styled.button`
	padding: 1.5em 2em;
	width: 20%;
	border: none;
	background: #add8e6;
	border-radius: 4px;
	font-weight: bold;
	text-transform: uppercase;
	box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);

	:hover {
		transform: scale(1.02);
		cursor: pointer;
		background-color: #c7f2ff;
	}

	:active {
		transform: scale(0.98);
		background-color: #94bfcd;
	}
`;
