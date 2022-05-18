import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UtilsProps {}

const StyledUtils = styled.div`
  color: pink;
`;

export function Utils(props: UtilsProps) {
  return (
    <StyledUtils>
      <h1>Welcome to Utils!</h1>
    </StyledUtils>
  );
}

export default Utils;
