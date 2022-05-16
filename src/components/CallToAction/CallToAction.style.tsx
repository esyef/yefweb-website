import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theming';

export const CtaStyle = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: ${Theme.spacing.large};
  gap: 1rem;
`;

export const CtaTxtStyle = styled.h2`
  font-size: ${Theme.fontSizes.subheading};
  font-weight: ${Theme.fontWeight.Black};

  text-align: center;
  flex-basis: 100%;

  @media (min-width: 40rem) {
    flex-basis: 70%;
  }
`;
