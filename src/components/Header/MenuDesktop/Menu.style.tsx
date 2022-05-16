import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theming';

export const MenuStyle = styled.nav`
  display: none;
  @media (min-width: 40rem) {
    flex-basis: 30%;
    display: block;
  }
`;

export const NavigationStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${Theme.spacing.small};
`;

export const ItemsStyle = styled.li`
  list-style: none;
  text-transform: uppercase;
  font-size: ${Theme.fontSizes.text};
  font-weight: ${Theme.fontWeight.Medium};
  opacity: 0.85;
  transition: opacity 300ms ease-in;
  @media (min-width: 40rem) {
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
