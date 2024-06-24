import styled from 'styled-components';
import { Button } from './components/Button';
interface containerProps {}
export const Container = ({}: containerProps) => {
	return (
		<StyledWrapper>
			<StyledButtonList>
				{Array.from({ length: 15 }, (_, index) => (
					<Button key={index} numbers={index + 1} />
				))}
			</StyledButtonList>

			<StyledFloorList>
				<li>4층</li>
				<li>3층</li>
				<li>2층</li>
				<li>1층</li>
			</StyledFloorList>
		</StyledWrapper>
	);
};
const StyledWrapper = styled.div`
	padding: 0;
`;
const StyledButtonList = styled.div`
	display: flex;
	gap: 10px;
`;
const StyledFloorList = styled.ul`
	display: flex;
	flex-direction: column;

	li {
		display: flex;
		width: fit-content;
		padding: 10px;
		background: #f0f0f0;
	}
`;
