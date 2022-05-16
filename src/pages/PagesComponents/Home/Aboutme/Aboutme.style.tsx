import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theming';

export const AboutmeStyle = styled.article`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  gap: ${Theme.spacing.medium};

  margin-bottom: ${Theme.spacing.large};
`;

export const DescriptionStyle = styled.div`
  flex-basis: 100%;

  @media (min-width: 40rem) {
    flex-basis: 50%;
  }
`;

export const DescriptionTxtStyle = styled.p`
  font-size: ${Theme.fontSizes.text};
  font-weight: ${Theme.fontWeight.Regular};
  margin-bottom: 1rem;
`;
