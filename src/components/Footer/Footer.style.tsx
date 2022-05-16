import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theming';

export const FooterStyle = styled.footer`
  text-align: center;
  padding: 1.5rem;
`;

export const FooterTxtStyle = styled.p`
  font-size: ${Theme.fontSizes.text};
  font-weight: ${Theme.fontWeight.Regular};
`;

export const FooterSpanStyle = styled.span`
  font-size: ${Theme.fontSizes.text};
  font-weight: ${Theme.fontWeight.Black};
`;
