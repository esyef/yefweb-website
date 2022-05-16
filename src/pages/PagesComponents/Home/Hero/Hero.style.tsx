import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theming';

export const HeroStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-bottom: ${Theme.spacing.large};
`;

export const TitleStyle = styled.h1`
  font-weight: ${Theme.fontWeight.Regular};

  font-size: ${Theme.fontSizes.heading1};
  text-align: center;
  @media (min-width: 40rem) {
    min-width: 90%;
    max-width: 60rem;
    font-size: 5rem;
  }
`;

export const TextAccent = styled.span`
  font-weight: ${Theme.fontWeight.Black};
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
