import styled from 'styled-components';
import { Container } from './Container';
function App() {
	return (
		<>
			<StyledWrapper>
				<Container />
			</StyledWrapper>
		</>
	);
}
const StyledWrapper = styled.div`
	padding: 100px;
`;
export default App;
