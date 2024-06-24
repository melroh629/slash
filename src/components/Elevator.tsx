import styled, { keyframes } from 'styled-components';

interface ElevatorState {
	currentFloor: number;
	destinationFloor: number | null;
	isMoving: boolean;
}

interface ElevatorProps {
	elevatorState: ElevatorState;
}

interface StyledCurrentProps {
	$startBottom: number;
	$endBottom: number;
	$duration: number;
}

export const Elevator = ({ elevatorState }: ElevatorProps) => {
	const { currentFloor, destinationFloor } = elevatorState;

	const calculateBottom = (floor: number) => {
		return (floor - 1) * 40;
	};

	const startBottom = calculateBottom(currentFloor);
	const endBottom =
		destinationFloor !== null ? calculateBottom(destinationFloor) : startBottom;
	const duration =
		destinationFloor !== null ? Math.abs(destinationFloor - currentFloor) : 0;

	return (
		<StyledElevator>
			{Array.from({ length: 15 }, (_, i) => 15 - i).map(number => (
				<li key={number}>{number}</li>
			))}
			<StyledCurrent
				$startBottom={startBottom}
				$endBottom={endBottom}
				$duration={duration}
			/>
		</StyledElevator>
	);
};

const StyledElevator = styled.ul`
	position: relative;
	display: flex;
	flex-direction: column;
	li {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70px;
		height: 40px;
		padding: 10px;
		background: #f0f0f0;
	}
`;

const move = (startBottom: number, endBottom: number) => keyframes`
  from {
    bottom: ${startBottom}px;
  }
  to {
    bottom: ${endBottom}px;
  }
`;

const StyledCurrent = styled.div<StyledCurrentProps>`
	position: absolute;
	bottom: ${({ $startBottom }) => $startBottom}px;
	left: 0;
	width: 70px;
	height: 40px;
	border: 5px solid lime;
	animation: ${({ $startBottom, $endBottom }) => move($startBottom, $endBottom)}
		${({ $duration }) => $duration}s linear;
	animation-fill-mode: forwards;
`;
