import styled from 'styled-components';
import { useState } from 'react';
import { Button } from './components/Button';
import { Elevator } from './components/Elevator';

interface containerProps {}
interface ElevatorState {
	currentFloor: number;
	destinationFloor: number;
	isMoving: boolean;
}
export const Container = ({}: containerProps) => {
	const [elevatorStates, setElevatorStates] = useState<ElevatorState[]>([
		{ currentFloor: 1, destinationFloor: 1, isMoving: false },
		{ currentFloor: 1, destinationFloor: 1, isMoving: false },
		{ currentFloor: 1, destinationFloor: 1, isMoving: false },
	]);

	const handleFloorClick = (value: number) => {};

	return (
		<StyledWrapper>
			<StyledButtonList>
				{Array.from({ length: 15 }, (_, index) => (
					<Button key={index} value={index + 1} onClick={handleFloorClick} />
				))}
			</StyledButtonList>

			<StyledElevatorList>
				{elevatorStates.map((state, index) => (
					<Elevator key={index} elevatorState={state} />
				))}
			</StyledElevatorList>
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
const StyledElevatorList = styled.div`
	display: flex;
	gap: 10px;
`;
