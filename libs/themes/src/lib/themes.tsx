import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ThemesProps {}

const StyledThemes = styled.div`
  color: pink;
`;

export function Themes(props: ThemesProps) {
  return (
    <StyledThemes>
      <h1>Welcome to Themes!</h1>
    </StyledThemes>
  );
}

export default Themes;
