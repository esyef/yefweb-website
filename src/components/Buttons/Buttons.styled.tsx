import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from 'src/styles/Theming';

export const ButtonsStyle = styled.a`
  display: block;
  text-transform: uppercase;
  outline: none;
  padding: 1rem;
  border-radius: 15px;

  @media (min-width: 40rem) {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const PrimaryButton = styled(ButtonsStyle)`
  color: ${Theme.colors.secondary};
  border: 1px solid ${Theme.colors.secondary};
  transition: all 300ms ease-in-out;
  position: relative;
  z-index: 2;

  @media (min-width: 40rem) {
    &:hover {
      color: ${Theme.colors.white};
      background: ${Theme.colors.secondary};
      transform: translateY(-3px);
      opacity: 0.8;
      box-shadow: ${Theme.shadows.standar};
    }
  }
`;

export const SecondaryButton = styled(ButtonsStyle)`
  color: ${Theme.colors.white};
  border: 1px solid ${Theme.colors.neutral};
  transition: all 300ms ease-in-out;
  box-shadow: ${Theme.shadows.standar};
  @media (min-width: 40rem) {
    &:hover {
      color: ${Theme.colors.white};
      background: ${Theme.colors.neutral};
      transform: translateY(-3px);
      border: 1px solid ${Theme.colors.white};
    }
  }
`;

export const ButtonIconStyle = styled.a`
  line-height: 50%;
  outline: none;
  opacity: 0.9;
  transition: opacity 200ms ease-in;
  @media (min-width: 40rem) {
    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
