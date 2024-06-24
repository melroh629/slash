import styled from 'styled-components';

interface buttonProps {
	numbers: number;
}
export const Button = ({ numbers }: buttonProps) => {
	return <StyledButton>{numbers}</StyledButton>;
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
