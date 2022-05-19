import styled from '@emotion/styled';
import { Theme } from 'src/styles/Theming';

export const Emailsendtyle = styled.article`
  position: absolute;
  right: 5%;
  bottom: -45%;
  z-index: 10;
  height: 5rem;
  width: 250px;
  background: ${Theme.colors.neutral};
  border-radius: 15px;
  text-align: center;
  border: 1px solid ${Theme.colors.secondary};
  color: ${Theme.colors.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease;
  padding: 1.5rem;
`;
