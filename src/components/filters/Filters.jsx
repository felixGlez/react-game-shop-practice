import {
	StyledCheckboxContainer,
	StyledFiltersContainer,
	StyledPlatformContainer,
	StyledSortContainer
} from './styles';

const Filters = ({ filters, setFilters }) => {
	return (
		<StyledFiltersContainer>
			<StyledPlatformContainer>
				<h2>Platform</h2>
				<StyledCheckboxContainer>
					<input
						type='checkbox'
						id='ps5'
						name='ps5'
						onChange={event => handleCheck(event, filters, setFilters)}
					/>
					<label htmlFor='ps5'>PS5</label>
				</StyledCheckboxContainer>
				<StyledCheckboxContainer>
					<input
						type='checkbox'
						id='ps4'
						name='ps4'
						onChange={event => handleCheck(event, filters, setFilters)}
					/>
					<label htmlFor='ps4'>PS4</label>
				</StyledCheckboxContainer>
				<StyledCheckboxContainer>
					<input
						type='checkbox'
						id='pc'
						name='pc'
						onChange={event => handleCheck(event, filters, setFilters)}
					/>
					<label htmlFor='pc'>PC</label>
				</StyledCheckboxContainer>
				<StyledCheckboxContainer>
					<input
						type='checkbox'
						id='xbox'
						name='xbox'
						onChange={event => handleCheck(event, filters, setFilters)}
					/>
					<label htmlFor='xbox'>Xbox</label>
				</StyledCheckboxContainer>
			</StyledPlatformContainer>
			<StyledSortContainer>
				<h2>Sort By</h2>
				<select>
					<option value='0'>Default</option>
					<option value='1'>Name</option>
					<option value='2'>Release Date</option>
				</select>
			</StyledSortContainer>
		</StyledFiltersContainer>
	);
};

const handleCheck = (event, filters, setFilters) => {
	const { name, checked } = event.target;
	// setFilters({ ...filters, [name]: !filters[name] });
	// es equivalente, pero más óptimo esto:
	setFilters({ ...filters, [name]: checked });
};

export default Filters;
