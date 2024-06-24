import styled from 'styled-components';

interface buttonProps {
	value: number;
	onClick: (value: number) => void;
	disabled?: boolean;
}
export const Button = ({ value, onClick, disabled }: buttonProps) => {
	return (
		<StyledButton
			onClick={e =>
				onClick(Number((e.currentTarget as HTMLButtonElement).value))
			}
			value={value}
			disabled={disabled}
		>
			{value}
		</StyledButton>
	);
};
const StyledButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	background: #fff;
	border: 1px solid #f0f0f0;
`;
