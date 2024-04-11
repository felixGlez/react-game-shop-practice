import styled from 'styled-components';

const StyledFiltersContainer = styled.div`
	width: 15%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

const StyledPlatformContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const StyledCheckboxContainer = styled.div`
	display: flex;
`;

const StyledSortContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export {
	StyledFiltersContainer,
	StyledPlatformContainer,
	StyledCheckboxContainer,
	StyledSortContainer
};
