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
	const [disabled, setDisabled] = useState<boolean>(false);

	const handleFloorClick = (value: number) => {
		const selectedElevator = selectElevator(value);
		if (selectedElevator) {
			updateElevatorState(selectedElevator.elevatorId, value);
		}
		if (selectedElevator?.currentFloor === value) return;
		if (elevatorStates.every(elevator => elevator.isMoving)) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	};

	const selectElevator = (calledFloor: number) => {
		const availableElevators = elevatorStates.filter(
			elevator => !elevator.isMoving
		);
		if (availableElevators.length === 0) return null;
		const closestElevator = availableElevators.reduce((prev, current) => {
			const prevDistance = Math.abs(prev.currentFloor - calledFloor);
			const currentDistance = Math.abs(current.currentFloor - calledFloor);
			return prevDistance < currentDistance ? prev : current;
		});

		return closestElevator;
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
					<Button
						key={index}
						value={index + 1}
						disabled={disabled}
						onClick={handleFloorClick}
					/>
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
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	flex-flow: row-reverse;
`;
const StyledButtonList = styled.div`
	display: flex;
	width: 150px;
	flex-wrap: wrap-reverse;
	gap: 10px;
	justify-content: space-between;
`;
const StyledElevatorList = styled.div`
	display: flex;
	gap: 24px;
`;
