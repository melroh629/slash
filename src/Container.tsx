import styled from 'styled-components';
import { useState } from 'react';
import { Button } from './components/Button';
import { Elevator } from './components/Elevator';

interface containerProps {}
interface ElevatorState {
	elevatorId: number;
	currentFloor: number;
	destinationFloor: number | null;
	isMoving: boolean;
}
export const Container = ({}: containerProps) => {
	const [elevatorStates, setElevatorStates] = useState<ElevatorState[]>([
		{ elevatorId: 1, currentFloor: 1, destinationFloor: 1, isMoving: false },
		{ elevatorId: 2, currentFloor: 1, destinationFloor: 1, isMoving: false },
		{ elevatorId: 3, currentFloor: 1, destinationFloor: 1, isMoving: false },
	]);

	const handleFloorClick = (value: number) => {
		const selectedElevator = selectElevator();
		if (selectedElevator) {
			updateElevatorState(selectedElevator.elevatorId, value);
		}
	};
	const selectElevator = () => {
		return elevatorStates.find(elevator => !elevator.isMoving);
	};

	const updateElevatorState = (
		elevatorId: number,
		destinationFloor: number
	) => {
		const newElevatorStates = elevatorStates.map(elevator => {
			if (elevator.elevatorId === elevatorId) {
				const duration =
					Math.abs(destinationFloor - elevator.currentFloor) * 1000;
				setTimeout(() => {
					setElevatorStates(prevStates =>
						prevStates.map(prev => {
							if (prev.elevatorId === elevatorId) {
								// 어느 시점에 나타나는지? 1초 뒤에 나타남
								return {
									...prev,
									currentFloor: destinationFloor,
									destinationFloor: null,
									isMoving: false,
								};
							}
							return prev;
						})
					);
				}, duration);
				return {
					...elevator,
					destinationFloor: destinationFloor,
					isMoving: true,
				};
			}
			return elevator;
		});

		setElevatorStates(newElevatorStates);
	};

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
