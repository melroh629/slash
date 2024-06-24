import styled, { keyframes } from 'styled-components';

interface ElevatorState {
	currentFloor: number;
	destinationFloor: number;
	isMoving: boolean;
}

// ElevatorProps 인터페이스 정의
interface ElevatorProps {
	elevatorState: ElevatorState;
}

interface StyledCurrentProps {
	$bottom: number;
	$duration: number;
}
export const Elevator = ({ elevatorState }: ElevatorProps) => {
	const calculateBottom = (currentFloor: number, destinationFloor: number) => {
		return (destinationFloor - currentFloor) * 40;
	};
	const bottomValue = calculateBottom(
		elevatorState.currentFloor,
		elevatorState.destinationFloor
	);
	const duration =
		Math.abs(elevatorState.destinationFloor - elevatorState.currentFloor) * 1;

	return (
		<StyledElevator>
			{Array.from({ length: 15 }, (_, i) => 15 - i).map(number => (
				<li key={number}>{number}</li>
			))}

			<StyledCurrent $bottom={bottomValue} $duration={duration} />
		</StyledElevator>
	);
};

const StyledElevator = styled.ul`
	position: relative;
	display: flex;
	flex-direction: column;
	li {
		display: flex;
		width: 40px;
		height: 40px;
		padding: 10px;
		background: #f0f0f0;
	}
`;
const move = (bottom: number) => keyframes`
  0% {
    bottom: 0;
  }
  100% {
    bottom: ${bottom}px;
  }
`;

const StyledCurrent = styled.div<StyledCurrentProps>`
	position: absolute;
	bottom: ${props => props.$bottom}px;
	left: 0;
	width: 40px;
	height: 40px;
	border: 5px solid lime;
	animation: ${props => move(props.$bottom)} ${props => props.$duration}s linear;
`;
