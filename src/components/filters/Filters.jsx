import {
	StyledCheckboxContainer,
	StyledFiltersContainer,
	StyledPlatformContainer,
	StyledSortContainer
} from './styles';

const Filters = ({ handleCheck, setSortBy }) => {
	return (
		<StyledFiltersContainer>
			<StyledPlatformContainer>
				<h2>Platform</h2>
				<StyledCheckboxContainer>
					<input
						type='checkbox'
						id='PS5'
						name='PS5'
						onChange={event => handleCheck(event)}
					/>
					<label htmlFor='PS5'>PS5</label>
				</StyledCheckboxContainer>
				<StyledCheckboxContainer>
					<input
						type='checkbox'
						id='PS4'
						name='PS4'
						onChange={event => handleCheck(event)}
					/>
					<label htmlFor='PS4'>PS4</label>
				</StyledCheckboxContainer>
				<StyledCheckboxContainer>
					<input
						type='checkbox'
						id='PC'
						name='PC'
						onChange={event => handleCheck(event)}
					/>
					<label htmlFor='PC'>PC</label>
				</StyledCheckboxContainer>
				<StyledCheckboxContainer>
					<input
						type='checkbox'
						id='Xbox'
						name='Xbox'
						onChange={event => handleCheck(event)}
					/>
					<label htmlFor='Xbox'>Xbox</label>
				</StyledCheckboxContainer>
			</StyledPlatformContainer>
			<StyledSortContainer>
				<h2>Sort By</h2>
				<select onChange={event => setSortBy(event.target.value)}>
					<option value='0'>Default</option>
					<option value='1'>Name</option>
					<option value='2'>Release Date</option>
				</select>
			</StyledSortContainer>
		</StyledFiltersContainer>
	);
};

export default Filters;
